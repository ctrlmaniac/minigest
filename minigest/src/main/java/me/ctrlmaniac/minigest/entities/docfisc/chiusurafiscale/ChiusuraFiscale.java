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
