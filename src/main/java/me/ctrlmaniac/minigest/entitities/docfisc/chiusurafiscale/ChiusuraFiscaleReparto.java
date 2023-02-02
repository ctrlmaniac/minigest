package me.ctrlmaniac.minigest.entitities.docfisc.chiusurafiscale;

import java.util.Objects;

import com.fasterxml.jackson.annotation.JsonIncludeProperties;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@ToString
@NoArgsConstructor
public class ChiusuraFiscaleReparto {
	@Id
	@GeneratedValue(strategy = GenerationType.UUID)
	private String id;

	@ManyToOne
	@JsonIncludeProperties("id")
	private ChiusuraFiscale chiusuraFiscale;

	private double aliquota;
	private double totale;
	private double totaleAnnulli;
	private double totaleResi;

	public ChiusuraFiscaleReparto(ChiusuraFiscale chiusuraFiscale, double aliquota, double totale, double totaleAnnulli,
			double totaleResi) {
		this.chiusuraFiscale = chiusuraFiscale;
		this.aliquota = aliquota;
		this.totale = totale;
		this.totaleAnnulli = totaleAnnulli;
		this.totaleResi = totaleResi;
	}

	@Override
	public boolean equals(Object o) {
		// self check
		if (this == o)
			return true;
		// null check
		if (o == null)
			return false;
		// type check and cast
		if (getClass() != o.getClass())
			return false;
		ChiusuraFiscaleReparto reparto = (ChiusuraFiscaleReparto) o;
		// field comparison
		return Objects.equals(id, reparto.getId());
	}

}
