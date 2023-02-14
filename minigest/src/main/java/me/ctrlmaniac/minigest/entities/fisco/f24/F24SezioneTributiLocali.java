package me.ctrlmaniac.minigest.entities.fisco.f24;

import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIncludeProperties;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.HashSet;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Transient;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@ToString
@NoArgsConstructor
public class F24SezioneTributiLocali {

	@Id
	@GeneratedValue(strategy = GenerationType.UUID)
	private String id;

	@OneToOne
	@JsonIncludeProperties("id")
	private F24 f24;

	private double detrazione;

	@OneToMany(fetch = FetchType.EAGER, mappedBy = "sezioneTributiLocali")
	private Set<F24SezioneTributiLocaliReparto> reparti = new HashSet<>();

	@Transient
	private double totaleDebito;

	@Transient
	private double totaleCredito;

	@Transient
	private double saldo;

	public F24SezioneTributiLocali(F24 f24, double detrazione) {
		this.f24 = f24;
		this.detrazione = detrazione;
	}

	public double getTotaleDebito() {
		double totale = 0;

		for (F24SezioneTributiLocaliReparto reparto : this.reparti) {
			totale += reparto.getImportoDebito();
		}

		BigDecimal bdTotale = new BigDecimal(totale);
		bdTotale = bdTotale.setScale(2, RoundingMode.HALF_EVEN);

		return bdTotale.doubleValue();
	}

	public double getTotaleCredito() {
		double totale = 0;

		for (F24SezioneTributiLocaliReparto reparto : this.reparti) {
			totale += reparto.getImportoCredito();
		}

		BigDecimal bdTotale = new BigDecimal(totale);
		bdTotale = bdTotale.setScale(2, RoundingMode.HALF_EVEN);

		return bdTotale.doubleValue();
	}

	public double getSaldo() {
		double totaleDebito = 0;
		double totaleCredito = 0;

		for (F24SezioneTributiLocaliReparto reparto : this.reparti) {
			totaleDebito += reparto.getImportoDebito();
			totaleCredito += reparto.getImportoCredito();
		}

		BigDecimal bdTotaleDebito = new BigDecimal(totaleDebito);
		bdTotaleDebito = bdTotaleDebito.setScale(2, RoundingMode.HALF_EVEN);

		BigDecimal bdTotaleCredito = new BigDecimal(totaleCredito);
		bdTotaleCredito = bdTotaleCredito.setScale(2, RoundingMode.HALF_EVEN);

		double totale = totaleDebito - totaleCredito - this.detrazione;

		BigDecimal bdTotale = new BigDecimal(totale);
		bdTotale = bdTotale.setScale(2, RoundingMode.HALF_EVEN);

		return bdTotale.doubleValue();
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
		F24SezioneTributiLocali other = (F24SezioneTributiLocali) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}

}
