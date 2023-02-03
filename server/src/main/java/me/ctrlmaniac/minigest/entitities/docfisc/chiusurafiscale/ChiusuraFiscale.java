package me.ctrlmaniac.minigest.entitities.docfisc.chiusurafiscale;

import java.time.LocalDate;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import lombok.Data;
import lombok.NoArgsConstructor;
import me.ctrlmaniac.minigest.entitities.Negozio;

@Entity
@Data
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

	@OneToMany(fetch = FetchType.EAGER, mappedBy = "chiusuraFiscale", cascade = CascadeType.ALL)
	private List<ChiusuraFiscaleReparto> reparti;

	public ChiusuraFiscale(Negozio negozio, LocalDate data, double totale, int numeroDocFisc,
			List<ChiusuraFiscaleReparto> reparti) {
		this.negozio = negozio;
		this.data = data;
		this.totale = totale;
		this.numeroDocFisc = numeroDocFisc;
		this.reparti = reparti;
	}

	public ChiusuraFiscale(Negozio negozio, LocalDate data, double totale, int numeroDocFisc) {
		this.negozio = negozio;
		this.data = data;
		this.totale = totale;
		this.numeroDocFisc = numeroDocFisc;
	}

}
