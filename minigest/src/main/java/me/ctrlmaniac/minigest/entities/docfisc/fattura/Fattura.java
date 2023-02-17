package me.ctrlmaniac.minigest.entities.docfisc.fattura;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.time.LocalDate;
import java.util.Set;
import java.util.List;
import java.util.ArrayList;
import java.util.Collections;
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

	private String filepath;

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

	@Transient
	private Set<Double> aliquoteIVA;

	public Fattura(Azienda cedente, Azienda committente, TipoDocFisc tipoDocumento, LocalDate data, LocalDate dataSDI,
			String numero, double totale, String filepath) {
		this.cedente = cedente;
		this.committente = committente;
		this.tipoDocumento = tipoDocumento;
		this.data = data;
		this.dataSDI = dataSDI;
		this.numero = numero;
		this.totale = totale;
		this.filepath = filepath;
	}

	public Fattura(Azienda cedente, Azienda committente, TipoDocFisc tipoDocumento, LocalDate data, LocalDate dataSDI,
			String numero, double totale, String filepath, Set<FatturaReparto> reparti, Set<FatturaScadenza> scadenze,
			Set<FatturaPagamento> pagamenti) {
		this.cedente = cedente;
		this.committente = committente;
		this.tipoDocumento = tipoDocumento;
		this.data = data;
		this.dataSDI = dataSDI;
		this.numero = numero;
		this.totale = totale;
		this.filepath = filepath;
		this.reparti = reparti;
		this.scadenze = scadenze;
		this.pagamenti = pagamenti;
	}

	public double getImponibile() {
		double totale = 0;

		if (this.getReparti() != null) {
			for (FatturaReparto reparto : this.getReparti()) {
				totale += reparto.getImponibile();
			}
		}

		BigDecimal tot = new BigDecimal(totale);
		tot = tot.setScale(2, RoundingMode.HALF_EVEN);

		return tot.doubleValue();
	}

	public double getImposta() {
		double totale = 0;

		if (this.getReparti() != null) {
			for (FatturaReparto reparto : this.getReparti()) {
				totale += reparto.getImposta();
			}
		}

		BigDecimal tot = new BigDecimal(totale);
		tot = tot.setScale(2, RoundingMode.HALF_EVEN);

		return tot.doubleValue();
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

	public Set<Double> getAliquoteIVA() {
		Set<Double> aliquoteIVA = new HashSet<>();

		for (FatturaReparto reparto : this.reparti) {
			aliquoteIVA.add(reparto.getAliquota());
		}

		List<Double> listaAliquote = new ArrayList<>(aliquoteIVA);
		Collections.sort(listaAliquote);

		return new HashSet<>(listaAliquote);
	}

	public Set<FatturaReparto> getRepartiByAliquota(double aliquota) {
		Set<FatturaReparto> reparti = new HashSet<>();

		for (FatturaReparto reparto : this.reparti) {
			if (reparto.getAliquota() == aliquota) {
				reparti.add(reparto);
			}
		}

		return reparti;
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
