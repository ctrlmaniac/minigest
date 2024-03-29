package me.ctrlmaniac.minigest.entities.docfisc.chiusurafiscale;

import java.math.BigDecimal;
import java.math.RoundingMode;

import com.fasterxml.jackson.annotation.JsonIncludeProperties;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Transient;
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

	public ChiusuraFiscaleReparto(ChiusuraFiscale chiusuraFiscale, double aliquota, double totale, double totaleAnnulli,
			double totaleResi) {
		this.chiusuraFiscale = chiusuraFiscale;
		this.aliquota = aliquota;
		this.totale = totale;
		this.totaleAnnulli = totaleAnnulli;
		this.totaleResi = totaleResi;
	}

	@Transient
	private double imponibile;

	@Transient
	private double imposta;

	public double getImponibile() {
		double imponibile = (100 * totale) / (100 + aliquota);
		BigDecimal value = new BigDecimal(imponibile);
		return value.setScale(2, RoundingMode.HALF_EVEN).doubleValue();
	}

	public double getImposta() {
		double imposta = (aliquota * totale) / (100 + aliquota);
		BigDecimal value = new BigDecimal(imposta);
		return value.setScale(2, RoundingMode.HALF_EVEN).doubleValue();
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