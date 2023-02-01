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
public class FatturaPagamento {

	@Id
	@GeneratedValue(strategy = GenerationType.UUID)
	private String id;

	private LocalDate data;
	private double importo;

	public FatturaPagamento(LocalDate data, double importo) {
		this.data = data;
		this.importo = importo;
	}

}
