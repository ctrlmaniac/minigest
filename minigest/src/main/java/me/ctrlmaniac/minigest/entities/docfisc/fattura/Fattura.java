package me.ctrlmaniac.minigest.entities.docfisc.fattura;

import java.time.LocalDate;
import java.util.Set;
import java.util.HashSet;

import com.fasterxml.jackson.annotation.JsonIncludeProperties;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Transient;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import me.ctrlmaniac.minigest.entities.azienda.Azienda;
import me.ctrlmaniac.minigest.entities.docfisc.TipoDocFisc;

@Entity
@Getter
@Setter
@ToString
@NoArgsConstructor
public class Fattura {

	@Id
	@GeneratedValue(strategy = GenerationType.UUID)
	private String id;

	@ManyToOne
	@JsonIncludeProperties({ "id", "denominazione" })
	private Azienda cedente;

	@ManyToOne
	@JsonIncludeProperties({ "id", "denominazione" })
	private Azienda committente;

	@ManyToOne
	private TipoDocFisc tipoDocumento;

	private LocalDate data;
	private LocalDate dataSDI;
	private String numero;
	private double totale;

	@OneToMany(fetch = FetchType.EAGER, mappedBy = "fattura", cascade = CascadeType.ALL)
	private Set<FatturaReparto> reparti = new HashSet<>();

	@OneToMany(fetch = FetchType.EAGER, mappedBy = "fattura", cascade = CascadeType.ALL)
	private Set<FatturaScadenza> scadenze = new HashSet<>();

	@OneToMany(fetch = FetchType.EAGER, mappedBy = "fattura", cascade = CascadeType.ALL)
	private Set<FatturaPagamento> pagamenti = new HashSet<>();

	@Transient
	private double imponibile;

	@Transient
	private double imposta;

	@Transient
	private boolean evasa;

	public Fattura(Azienda cedente, Azienda committente, TipoDocFisc tipoDocumento, LocalDate data, LocalDate dataSDI,
			String numero, double totale) {
		this.cedente = cedente;
		this.committente = committente;
		this.tipoDocumento = tipoDocumento;
		this.data = data;
		this.dataSDI = dataSDI;
		this.numero = numero;
		this.totale = totale;
	}

	public Fattura(Azienda cedente, Azienda committente, TipoDocFisc tipoDocumento, LocalDate data, LocalDate dataSDI,
			String numero, double totale, Set<FatturaReparto> reparti, Set<FatturaScadenza> scadenze,
			Set<FatturaPagamento> pagamenti) {
		this.cedente = cedente;
		this.committente = committente;
		this.tipoDocumento = tipoDocumento;
		this.data = data;
		this.dataSDI = dataSDI;
		this.numero = numero;
		this.totale = totale;
		this.reparti = reparti;
		this.scadenze = scadenze;
		this.pagamenti = pagamenti;
	}

	public double getImponibile() {
		double imponibile = 0;

		if (this.getReparti() != null) {
			for (FatturaReparto reparto : this.getReparti()) {
				imponibile += reparto.getImponibile();
			}
		}

		return imponibile;
	}

	public double getImposta() {
		double imposta = 0;

		if (this.getReparti() != null) {
			for (FatturaReparto reparto : this.getReparti()) {
				imposta += reparto.getImposta();
			}
		}

		return imposta;
	}

	public boolean getEvasa() {
		double scadenze = 0;
		double pagamenti = 0;

		if (this.getScadenze() != null) {
			for (FatturaScadenza scadenza : this.getScadenze()) {
				scadenze += scadenza.getImporto();
			}
		}

		if (this.getPagamenti() != null) {
			for (FatturaPagamento pagamento : this.getPagamenti()) {
				pagamenti += pagamento.getImporto();
			}
		}

		return pagamenti >= scadenze;
	}

	public void addReparto(FatturaReparto reparto) {
		this.reparti.add(reparto);
	}

	public void addScadenza(FatturaScadenza scadenza) {
		this.scadenze.add(scadenza);
	}

	public void addPagamento(FatturaPagamento pagamento) {
		this.pagamenti.add(pagamento);
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Fattura other = (Fattura) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}

}
