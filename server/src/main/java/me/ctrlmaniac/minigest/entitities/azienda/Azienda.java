package me.ctrlmaniac.minigest.entitities.azienda;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
public class Azienda {

	@Id
	@GeneratedValue(strategy = GenerationType.UUID)
	private String id;

	@Column
	private String titolo;

	@Column
	private String denominazione;

	@Column
	private String codiceEORI;

	@Column(columnDefinition = "varchar(2)")
	private String idFiscaleIVAPaese;

	@Column(columnDefinition = "varchar(28)")
	private String idFiscaleIVACodice;

	@Column(columnDefinition = "varchar(16)")
	private String codiceFiscale;

	@OneToOne(fetch = FetchType.EAGER, cascade = CascadeType.REMOVE)
	private AziendaIndirizzo sede;

	@OneToOne(fetch = FetchType.EAGER, cascade = CascadeType.REMOVE)
	private AziendaIndirizzo stabileOrganizzazione;

	@OneToOne(fetch = FetchType.EAGER, cascade = CascadeType.REMOVE)
	private Azienda rappresentanteFiscale;

	public Azienda(String titolo, String denominazione, String codiceEORI, String idFiscaleIVAPaese,
			String idFiscaleIVACodice, String codiceFiscale, AziendaIndirizzo sede,
			AziendaIndirizzo stabileOrganizzazione, Azienda rappresentanteFiscale) {
		this.titolo = titolo;
		this.denominazione = denominazione;
		this.codiceEORI = codiceEORI;
		this.idFiscaleIVAPaese = idFiscaleIVAPaese;
		this.idFiscaleIVACodice = idFiscaleIVACodice;
		this.codiceFiscale = codiceFiscale;
		this.sede = sede;
		this.stabileOrganizzazione = stabileOrganizzazione;
		this.rappresentanteFiscale = rappresentanteFiscale;
	}

}
