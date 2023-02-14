package me.ctrlmaniac.minigest.entities.fisco.f24;

import com.fasterxml.jackson.annotation.JsonIncludeProperties;

import java.math.BigDecimal;
import java.math.RoundingMode;
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
public class F24SezioneRegioni {

	@Id
	@GeneratedValue(strategy = GenerationType.UUID)
	private String id;

	@ManyToOne
	@JsonIncludeProperties("id")
	private F24 f24;

	private String codiceRegione;
	private String codiceTributo;
	private String meseRiferimento;
	private String annoRiferimento;
	private double importoDebito;
	private double importoCredito;

	@Transient
	private double saldo;

	public F24SezioneRegioni(F24 f24, String codiceRegione, String codiceTributo, String meseRiferimento,
			String annoRiferimento, double importoDebito, double importoCredito) {
		this.f24 = f24;
		this.codiceRegione = codiceRegione;
		this.codiceTributo = codiceTributo;
		this.meseRiferimento = meseRiferimento;
		this.annoRiferimento = annoRiferimento;
		this.importoDebito = importoDebito;
		this.importoCredito = importoCredito;
	}

	public double getSaldo() {
		double totale = this.importoDebito - this.importoCredito;

		BigDecimal bdTotale = new BigDecimal(totale);
		bdTotale = bdTotale.setScale(2, RoundingMode.HALF_EVEN);

		return bdTotale.doubleValue();
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
		F24SezioneRegioni other = (F24SezioneRegioni) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}

}
