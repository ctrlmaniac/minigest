package me.ctrlmaniac.minigest.models.corrispettivi;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Reparto {
	private double aliquota;
	private double totale;
	private double annulli;
	private double resi;
}
