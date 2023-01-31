package me.ctrlmaniac.minigest.entitities.docfisc.fattura;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
public class FatturaReparto {

	@Id
	@GeneratedValue(strategy = GenerationType.UUID)
	private String id;

	@Column
	private double aliquota;

	@Column
	private double imponibile;

	@Column
	private double imposta;

	public FatturaReparto(double aliquota, double imponibile, double imposta) {
		this.aliquota = aliquota;
		this.imponibile = imponibile;
		this.imposta = imposta;
	}

}
