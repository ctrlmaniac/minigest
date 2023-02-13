package me.ctrlmaniac.minigest.models.bilancio;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Set;
import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.HashSet;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class BilancioEntrate {
	private double totale;
	private double imponibile;
	private double imposta;
	private Set<Reparto> reparti = new HashSet<>();

	public double getImponibile() {
		double totale = 0;

		for (Reparto reparto : this.reparti) {
			totale += reparto.getImponibile();
		}

		BigDecimal tot = new BigDecimal(totale);
		tot = tot.setScale(2, RoundingMode.HALF_EVEN);

		return tot.doubleValue();
	}

	public double getImposta() {
		double totale = 0;

		for (Reparto reparto : this.reparti) {
			totale += reparto.getImposta();
		}

		BigDecimal tot = new BigDecimal(totale);
		tot = tot.setScale(2, RoundingMode.HALF_EVEN);

		return tot.doubleValue();
	}
}
