package me.ctrlmaniac.minigest.entitities.docfisc.fattura;

import java.util.Objects;

import com.fasterxml.jackson.annotation.JsonIncludeProperties;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@ToString
@NoArgsConstructor
public class FatturaReparto {

	@Id
	@GeneratedValue(strategy = GenerationType.UUID)
	private String id;

	@ManyToOne
	@JsonIncludeProperties("id")
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

	@Override
	public boolean equals(Object o) {
		// self check
		if (this == o)
			return true;
		// null check
		if (o == null)
			return false;
		// type check and cast
		if (getClass() != o.getClass())
			return false;
		FatturaReparto reparto = (FatturaReparto) o;
		// field comparison
		return Objects.equals(id, reparto.getId());
	}

}
