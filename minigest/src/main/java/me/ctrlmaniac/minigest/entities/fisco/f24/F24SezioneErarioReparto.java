package me.ctrlmaniac.minigest.entities.fisco.f24;

import com.fasterxml.jackson.annotation.JsonIncludeProperties;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Setter
@Getter
@NoArgsConstructor
public class F24SezioneErarioReparto {

	@Id
	@GeneratedValue(strategy = GenerationType.UUID)
	private String id;

	@ManyToOne
	@JsonIncludeProperties("id")
	private F24SezioneErario sezioneErario;

	private String codiceTributo;
	private String riferimento;
	private String anno;
	private double importoDebito;
	private double importoCredito;

	public F24SezioneErarioReparto(F24SezioneErario sezioneErario, String codiceTributo, String riferimento,
			String anno, double importoDebito,
			double importoCredito) {
		this.sezioneErario = sezioneErario;
		this.codiceTributo = codiceTributo;
		this.riferimento = riferimento;
		this.anno = anno;
		this.importoDebito = importoDebito;
		this.importoCredito = importoCredito;
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
		F24SezioneErarioReparto other = (F24SezioneErarioReparto) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}

}
