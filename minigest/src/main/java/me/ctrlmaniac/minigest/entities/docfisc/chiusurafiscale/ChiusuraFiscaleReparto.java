package me.ctrlmaniac.minigest.entities.docfisc.chiusurafiscale;

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
@Setter
@Getter
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

	public ChiusuraFiscaleReparto(double aliquota, double totale, double totaleAnnulli, double totaleResi) {
		this.aliquota = aliquota;
		this.totale = totale;
		this.totaleAnnulli = totaleAnnulli;
		this.totaleResi = totaleResi;
	}

	public ChiusuraFiscaleReparto(ChiusuraFiscale chiusuraFiscale, double aliquota, double totale, double totaleAnnulli,
			double totaleResi) {
		this.chiusuraFiscale = chiusuraFiscale;
		this.aliquota = aliquota;
		this.totale = totale;
		this.totaleAnnulli = totaleAnnulli;
		this.totaleResi = totaleResi;
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
		ChiusuraFiscaleReparto other = (ChiusuraFiscaleReparto) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}

}
