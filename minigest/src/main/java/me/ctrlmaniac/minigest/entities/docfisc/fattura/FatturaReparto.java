package me.ctrlmaniac.minigest.entities.docfisc.fattura;

import com.fasterxml.jackson.annotation.JsonIncludeProperties;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Transient;
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

	@Transient
	private double totale;

	private double aliquota;
	private double imponibile;
	private double imposta;

	public FatturaReparto(Fattura fattura, double aliquota, double imponibile, double imposta) {
		this.fattura = fattura;
		this.aliquota = aliquota;
		this.imponibile = imponibile;
		this.imposta = imposta;
	}

	public double getTotale() {
		return this.imponibile + this.imposta;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		FatturaReparto other = (FatturaReparto) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}

}
