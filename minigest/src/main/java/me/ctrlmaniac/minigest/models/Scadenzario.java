package me.ctrlmaniac.minigest.models;

import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Scadenzario {
	private LocalDate dataScadenza;
	private double totale;

	private String tipo;
	private String id;
}
