package me.ctrlmaniac.minigest.models.bilancio;

import java.util.Set;
import java.util.HashSet;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class BilancioUscite {
	private double totale;
	private double imponibile;
	private double imposta;
	private Set<Reparto> reparti = new HashSet<>();

}
