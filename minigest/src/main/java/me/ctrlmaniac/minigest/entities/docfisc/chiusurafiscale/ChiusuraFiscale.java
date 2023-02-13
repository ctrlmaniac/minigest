package me.ctrlmaniac.minigest.entities.docfisc.chiusurafiscale;

import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;

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
import me.ctrlmaniac.minigest.entities.negozio.Negozio;

@Entity
@Setter
@Getter
@ToString
@NoArgsConstructor
public class ChiusuraFiscale {

	@Id
	@GeneratedValue(strategy = GenerationType.UUID)
	private String id;

	@ManyToOne
	private Negozio negozio;

	private LocalDate data;
	private double totale;
	private int numeroDocFisc;

	@OneToMany(fetch = FetchType.EAGER, mappedBy = "chiusuraFiscale")
	private Set<ChiusuraFiscaleReparto> reparti = new HashSet<>();

	@Transient
	private Set<Double> aliquoteIVA = new HashSet<>();

	@Transient
	private double imponibile;

	@Transient
	private double imposta;

	public ChiusuraFiscale(Negozio negozio, LocalDate data, double totale, int numeroDocFisc) {
		this.negozio = negozio;
		this.data = data;
		this.totale = totale;
		this.numeroDocFisc = numeroDocFisc;
	}

	public ChiusuraFiscale(Negozio negozio, LocalDate data, double totale, int numeroDocFisc,
			Set<ChiusuraFiscaleReparto> reparti) {
		this.negozio = negozio;
		this.data = data;
		this.totale = totale;
		this.numeroDocFisc = numeroDocFisc;
		this.reparti = reparti;
	}

	public void addReparto(ChiusuraFiscaleReparto reparto) {
		this.reparti.add(reparto);
	}

	public void removeReparto(ChiusuraFiscaleReparto reparto) {
		this.reparti.remove(reparto);
	}

	public Set<ChiusuraFiscaleReparto> getRepartiByAliquota(double aliquota) {
		Set<ChiusuraFiscaleReparto> reparti = new HashSet<>();

		for (ChiusuraFiscaleReparto reparto : this.reparti) {
			if (reparto.getAliquota() == aliquota) {
				reparti.add(reparto);
			}
		}

		return reparti;
	}

	public Set<Double> getAliquoteIVA() {
		Set<Double> aliquoteIVA = new HashSet<>();

		for (ChiusuraFiscaleReparto reparto : this.reparti) {
			aliquoteIVA.add(reparto.getAliquota());
		}

		return aliquoteIVA;
	}

	public double getImponibile() {
		double totale = 0;

		for (ChiusuraFiscaleReparto reparto : this.reparti) {
			totale += reparto.getImponibile();
		}

		return totale;
	}

	public double getImposta() {
		double totale = 0;

		for (ChiusuraFiscaleReparto reparto : this.reparti) {
			totale += reparto.getImposta();
		}

		return totale;
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
		ChiusuraFiscale other = (ChiusuraFiscale) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}

}
