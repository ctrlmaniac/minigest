package me.ctrlmaniac.minigest.entitities.docfisc.fattura;

import java.time.LocalDate;

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
public class FatturaPagamento {

	@Id
	@GeneratedValue(strategy = GenerationType.UUID)
	private String id;

	@ManyToOne
	@JsonIncludeProperties("id")
	@Cascade(CascadeType.SAVE_UPDATE)
	@JoinColumn(name = "fattura_id")
	private Fattura fattura;

	private LocalDate data;
	private double importo;

	public FatturaPagamento(Fattura fattura, LocalDate data, double importo) {
		this.fattura = fattura;
		this.data = data;
		this.importo = importo;
	}

}
