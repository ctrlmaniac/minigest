package me.ctrlmaniac.minigest.entities.azienda;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
public class AziendaIndirizzo {

	@Id
	@GeneratedValue(strategy = GenerationType.UUID)
	private String id;

	private String indirizzo;
	private String numeroCivico;
	private String cap;
	private String comune;
	private String provincia;
	private String nazione;

	public AziendaIndirizzo(String indirizzo, String numeroCivico, String cap, String comune, String provincia,
			String nazione) {
		this.indirizzo = indirizzo;
		this.numeroCivico = numeroCivico;
		this.cap = cap;
		this.comune = comune;
		this.provincia = provincia;
		this.nazione = nazione;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		AziendaIndirizzo other = (AziendaIndirizzo) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		return result;
	}

}