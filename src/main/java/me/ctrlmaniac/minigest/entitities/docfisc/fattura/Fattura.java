package me.ctrlmaniac.minigest.entitities.docfisc.fattura;

import java.time.LocalDate;
import java.util.List;

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
import lombok.Data;
import lombok.NoArgsConstructor;
import me.ctrlmaniac.minigest.entitities.azienda.Azienda;
import me.ctrlmaniac.minigest.entitities.docfisc.TipoDocFisc;

@Entity
@Data
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
	private List<FatturaReparto> reparti;

	@OneToMany(fetch = FetchType.EAGER, mappedBy = "fattura", cascade = CascadeType.ALL)
	private List<FatturaScadenza> scadenze;

	@OneToMany(fetch = FetchType.EAGER, mappedBy = "fattura", cascade = CascadeType.ALL)
	private List<FatturaPagamento> pagamenti;

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
			String numero, double totale, List<FatturaReparto> reparti, List<FatturaScadenza> scadenze,
			List<FatturaPagamento> pagamenti) {
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
}
