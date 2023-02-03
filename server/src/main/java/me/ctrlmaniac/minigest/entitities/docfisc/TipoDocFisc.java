package me.ctrlmaniac.minigest.entitities.docfisc;

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
public class TipoDocFisc {

	@Id
	@GeneratedValue(strategy = GenerationType.UUID)
	private String id;

	@Column(unique = true)
	private String codice;

	@Column
	private String descrizione;

	public TipoDocFisc(String codice, String descrizione) {
		this.codice = codice;
		this.descrizione = descrizione;
	}

}
