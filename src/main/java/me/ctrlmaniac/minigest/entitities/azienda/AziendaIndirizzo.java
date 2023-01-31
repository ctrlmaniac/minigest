package me.ctrlmaniac.minigest.entitities.azienda;

import jakarta.persistence.Column;
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

	@Column
	private String indirizzo;

	@Column
	private String numeroCivico;

	@Column
	private String cap;

	@Column
	private String comune;

	@Column(columnDefinition = "varchar(2)")
	private String provincia;

	@Column(columnDefinition = "varchar(2)")
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
