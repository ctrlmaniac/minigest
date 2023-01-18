package me.ctrlmaniac.minigest.entitities.docfisc;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class TipoDocFisc {

	@Id
	@GeneratedValue(strategy = GenerationType.UUID)
	private String id;

	@Column(unique = true)
	private String codice;

	@Column
	private String descrizione;

	public TipoDocFisc() {
	}

	public TipoDocFisc(String codice, String descrizione) {
		this.codice = codice;
		this.descrizione = descrizione;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getCodice() {
		return codice;
	}

	public void setCodice(String codice) {
		this.codice = codice;
	}

	public String getDescrizione() {
		return descrizione;
	}

	public void setDescrizione(String descrizione) {
		this.descrizione = descrizione;
	}

}
