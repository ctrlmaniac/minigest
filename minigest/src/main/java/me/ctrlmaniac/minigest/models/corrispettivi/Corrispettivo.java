package me.ctrlmaniac.minigest.models.corrispettivi;

import java.time.LocalDate;
import java.util.HashMap;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Corrispettivo {
	private LocalDate data;
	private double totale;
	private int numeroDocFisc;
	private HashMap<Double, Reparto> reparti = new HashMap<>();
}
