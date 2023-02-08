package me.ctrlmaniac.minigest.entities.docfisc.fattura;

import java.time.LocalDate;

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
		FatturaScadenza other = (FatturaScadenza) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}

}
