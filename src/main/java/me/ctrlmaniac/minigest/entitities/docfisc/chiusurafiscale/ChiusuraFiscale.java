package me.ctrlmaniac.minigest.entitities.docfisc.chiusurafiscale;

import java.time.LocalDate;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import me.ctrlmaniac.minigest.entitities.Negozio;

@Entity
public class ChiusuraFiscale {

	@Id
	@GeneratedValue(strategy = GenerationType.UUID)
	private String id;

	@ManyToOne
	private Negozio negozio;

	@Column
	private LocalDate data;

	@Column
	private double totale;

	@Column
	private int numeroDocFisc;

	@OneToMany
	private List<ChiusuraFiscaleReparto> reparti;

	public ChiusuraFiscale() {
	}

	public ChiusuraFiscale(Negozio negozio, LocalDate data, double totale, int numeroDocFisc,
			List<ChiusuraFiscaleReparto> reparti) {
		this.negozio = negozio;
		this.data = data;
		this.totale = totale;
		this.numeroDocFisc = numeroDocFisc;
		this.reparti = reparti;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public Negozio getNegozio() {
		return negozio;
	}

	public void setNegozio(Negozio negozio) {
		this.negozio = negozio;
	}

	public LocalDate getData() {
		return data;
	}

	public void setData(LocalDate data) {
		this.data = data;
	}

	public double getTotale() {
		return totale;
	}

	public void setTotale(double totale) {
		this.totale = totale;
	}

	public int getNumeroDocFisc() {
		return numeroDocFisc;
	}

	public void setNumeroDocFisc(int numeroDocFisc) {
		this.numeroDocFisc = numeroDocFisc;
	}

	public List<ChiusuraFiscaleReparto> getReparti() {
		return reparti;
	}

	public void setReparti(List<ChiusuraFiscaleReparto> reparti) {
		this.reparti = reparti;
	}

}
