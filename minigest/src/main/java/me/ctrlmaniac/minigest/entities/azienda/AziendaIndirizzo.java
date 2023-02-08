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

}