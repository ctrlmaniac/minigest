package me.ctrlmaniac.minigest.entitities.azienda;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;

@Entity
public class Azienda {

	@Id
	@GeneratedValue(strategy = GenerationType.UUID)
	private String id;

	@Column
	private String denominazione;

	@Column
	private String titolo;

	@Column
	private String nome;

	@Column
	private String cognome;

	@Column
	private String codiceEORI;

	@Column(columnDefinition = "varchar(2)")
	private String idFiscaleIVAPaese;

	@Column(columnDefinition = "varchar(28)")
	private String idFiscaleIVACodice;

	@Column(columnDefinition = "varchar(16)")
	private String codiceFiscale;

	@OneToOne
	private AziendaIndirizzo sede;

	@OneToOne
	private AziendaIndirizzo stabileOrganizzazione;

	@OneToOne
	private Azienda rappresentanteFiscale;

	public Azienda() {
	}

	public Azienda(String denominazione, String titolo, String nome, String cognome, String codiceEORI,
			String idFiscaleIVAPaese, String idFiscaleIVACodice, String codiceFiscale, AziendaIndirizzo sede,
			AziendaIndirizzo stabileOrganizzazione, Azienda rappresentanteFiscale) {
		this.denominazione = denominazione;
		this.titolo = titolo;
		this.nome = nome;
		this.cognome = cognome;
		this.codiceEORI = codiceEORI;
		this.idFiscaleIVAPaese = idFiscaleIVAPaese;
		this.idFiscaleIVACodice = idFiscaleIVACodice;
		this.codiceFiscale = codiceFiscale;
		this.sede = sede;
		this.stabileOrganizzazione = stabileOrganizzazione;
		this.rappresentanteFiscale = rappresentanteFiscale;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getDenominazione() {
		return denominazione;
	}

	public void setDenominazione(String denominazione) {
		this.denominazione = denominazione;
	}

	public String getTitolo() {
		return titolo;
	}

	public void setTitolo(String titolo) {
		this.titolo = titolo;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getCognome() {
		return cognome;
	}

	public void setCognome(String cognome) {
		this.cognome = cognome;
	}

	public String getCodiceEORI() {
		return codiceEORI;
	}

	public void setCodiceEORI(String codiceEORI) {
		this.codiceEORI = codiceEORI;
	}

	public String getIdFiscaleIVAPaese() {
		return idFiscaleIVAPaese;
	}

	public void setIdFiscaleIVAPaese(String idFiscaleIVAPaese) {
		this.idFiscaleIVAPaese = idFiscaleIVAPaese;
	}

	public String getIdFiscaleIVACodice() {
		return idFiscaleIVACodice;
	}

	public void setIdFiscaleIVACodice(String idFiscaleIVACodice) {
		this.idFiscaleIVACodice = idFiscaleIVACodice;
	}

	public String getCodiceFiscale() {
		return codiceFiscale;
	}

	public void setCodiceFiscale(String codiceFiscale) {
		this.codiceFiscale = codiceFiscale;
	}

	public AziendaIndirizzo getSede() {
		return sede;
	}

	public void setSede(AziendaIndirizzo sede) {
		this.sede = sede;
	}

	public AziendaIndirizzo getStabileOrganizzazione() {
		return stabileOrganizzazione;
	}

	public void setStabileOrganizzazione(AziendaIndirizzo stabileOrganizzazione) {
		this.stabileOrganizzazione = stabileOrganizzazione;
	}

	public Azienda getRappresentanteFiscale() {
		return rappresentanteFiscale;
	}

	public void setRappresentanteFiscale(Azienda rappresentanteFiscale) {
		this.rappresentanteFiscale = rappresentanteFiscale;
	}

}
