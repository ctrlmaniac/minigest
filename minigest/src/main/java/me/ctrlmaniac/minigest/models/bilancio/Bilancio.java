package me.ctrlmaniac.minigest.models.bilancio;

import org.springframework.data.annotation.Transient;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Bilancio {
	private BilancioMode entrate;
	private BilancioMode uscite;

	@Transient
	private double utile;

	@Transient
	private double impostaDaVersare;

	public double getUtile() {
		return entrate.getImponibile() - uscite.getImponibile();
	}

	public double getImpostaDaVersare() {
		return entrate.getImposta() - uscite.getImposta();
	}
}
