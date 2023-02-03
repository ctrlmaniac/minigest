package me.ctrlmaniac.minigest.entitities.docfisc.fattura;

import java.time.LocalDate;
import java.util.Objects;

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
public class FatturaScadenza {

	@Id
	@GeneratedValue(strategy = GenerationType.UUID)
	private String id;

	@ManyToOne
	@JsonIncludeProperties("id")
	private Fattura fattura;

	private LocalDate data;
	private double importo;

	@Transient
	private boolean pagato;

	public FatturaScadenza(Fattura fattura, LocalDate data, double importo) {
		this.fattura = fattura;
		this.data = data;
		this.importo = importo;
	}

	public boolean getPagato() {
		double pagamenti = 0;

		if (fattura.getPagamenti() != null) {
			for (FatturaPagamento pagamento : fattura.getPagamenti()) {
				int val = pagamento.getData().compareTo(data);

				if (val >= 0) {
					// Il pagamento è avvenuto prima della o alla data di scadenza
					pagamenti += pagamento.getImporto();
				}
			}
		}

		return pagamenti >= importo;
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
		FatturaScadenza reparto = (FatturaScadenza) o;
		// field comparison
		return Objects.equals(id, reparto.getId());
	}

}
