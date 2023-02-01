package me.ctrlmaniac.minigest.entitities.docfisc.fattura;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
public class FatturaScadenza {

	@Id
	@GeneratedValue(strategy = GenerationType.UUID)
	private String id;

	private LocalDate data;
	private double importo;

	public FatturaScadenza(LocalDate data, double importo) {
		this.data = data;
		this.importo = importo;
	}

}
