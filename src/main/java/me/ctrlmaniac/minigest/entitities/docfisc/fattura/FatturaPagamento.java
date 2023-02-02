package me.ctrlmaniac.minigest.entitities.docfisc.fattura;

import java.time.LocalDate;
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
public class FatturaPagamento {

	@Id
	@GeneratedValue(strategy = GenerationType.UUID)
	private String id;

	@ManyToOne
	@JsonIncludeProperties("id")
	private Fattura fattura;

	private LocalDate data;
	private double importo;

	public FatturaPagamento(Fattura fattura, LocalDate data, double importo) {
		this.fattura = fattura;
		this.data = data;
		this.importo = importo;
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
		FatturaPagamento reparto = (FatturaPagamento) o;
		// field comparison
		return Objects.equals(id, reparto.getId());
	}

}
