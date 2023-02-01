package me.ctrlmaniac.minigest.entitities.docfisc.chiusurafiscale;

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

	@Column
	private LocalDate data;

	@Column
	private double totale;

	@Column
	private int numeroDocFisc;

	@OneToMany(fetch = FetchType.EAGER)
	private List<ChiusuraFiscaleReparto> reparti;

	public ChiusuraFiscale(Negozio negozio, LocalDate data, double totale, int numeroDocFisc,
			List<ChiusuraFiscaleReparto> reparti) {
		this.negozio = negozio;
		this.data = data;
		this.totale = totale;
		this.numeroDocFisc = numeroDocFisc;
		this.reparti = reparti;
	}

}
