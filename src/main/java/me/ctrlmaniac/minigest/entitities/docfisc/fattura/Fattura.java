package me.ctrlmaniac.minigest.entitities.docfisc.fattura;

import java.time.LocalDate;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import me.ctrlmaniac.minigest.entitities.azienda.Azienda;
import me.ctrlmaniac.minigest.entitities.docfisc.TipoDocFisc;

@Entity
public class Fattura {

	@Id
	@GeneratedValue(strategy = GenerationType.UUID)
	private String id;

	@ManyToOne
	private Azienda cedente;

	@ManyToOne
	private Azienda committente;

	@ManyToOne
	private TipoDocFisc tipoDocumento;

	@Column
	private LocalDate data;

	@Column
	private String numero;

	@Column
	private double totale;

	@OneToMany(fetch = FetchType.EAGER)
	private List<FatturaReparto> reparti;

	public Fattura() {
	}

	public Fattura(Azienda cedente, Azienda committente, TipoDocFisc tipoDocumento, LocalDate data, String numero,
			double totale, List<FatturaReparto> reparti) {
		this.cedente = cedente;
		this.committente = committente;
		this.tipoDocumento = tipoDocumento;
		this.data = data;
		this.numero = numero;
		this.totale = totale;
		this.reparti = reparti;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public Azienda getCedente() {
		return cedente;
	}

	public void setCedente(Azienda cedente) {
		this.cedente = cedente;
	}

	public Azienda getCommittente() {
		return committente;
	}

	public void setCommittente(Azienda committente) {
		this.committente = committente;
	}

	public TipoDocFisc getTipoDocumento() {
		return tipoDocumento;
	}

	public void setTipoDocumento(TipoDocFisc tipoDocumento) {
		this.tipoDocumento = tipoDocumento;
	}

	public LocalDate getData() {
		return data;
	}

	public void setData(LocalDate data) {
		this.data = data;
	}

	public String getNumero() {
		return numero;
	}

	public void setNumero(String numero) {
		this.numero = numero;
	}

	public double getTotale() {
		return totale;
	}

	public void setTotale(double totale) {
		this.totale = totale;
	}

	public List<FatturaReparto> getReparti() {
		return reparti;
	}

	public void setReparti(List<FatturaReparto> reparti) {
		this.reparti = reparti;
	}

}
