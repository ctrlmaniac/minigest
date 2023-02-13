package me.ctrlmaniac.minigest.models.bilancio;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Reparto {
	private double aliquota;
	private double totale;
	private double imponibile;
	private double imposta;
}
