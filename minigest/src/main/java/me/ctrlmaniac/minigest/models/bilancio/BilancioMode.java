package me.ctrlmaniac.minigest.models.bilancio;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Set;
import java.util.HashSet;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class BilancioMode {
	private double totale;
	private double imponibile;
	private double imposta;
	private Set<Reparto> reparti = new HashSet<>();
}
