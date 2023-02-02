package me.ctrlmaniac.minigest.entitities.docfisc.fattura;

import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.CascadeType;

import com.fasterxml.jackson.annotation.JsonIncludeProperties;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
public class FatturaReparto {

	@Id
	@GeneratedValue(strategy = GenerationType.UUID)
	private String id;

	@ManyToOne
	@JsonIncludeProperties("id")
	@Cascade(CascadeType.SAVE_UPDATE)
	@JoinColumn(name = "fattura_id")
	Fattura fattura;

	private double aliquota;
	private double imponibile;
	private double imposta;

	public FatturaReparto(Fattura fattura, double aliquota, double imponibile, double imposta) {
		this.fattura = fattura;
		this.aliquota = aliquota;
		this.imponibile = imponibile;
		this.imposta = imposta;
	}

}
