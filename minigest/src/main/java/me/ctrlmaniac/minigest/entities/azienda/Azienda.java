package me.ctrlmaniac.minigest.entities.azienda;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import jakarta.persistence.FetchType;
import jakarta.persistence.UniqueConstraint;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import me.ctrlmaniac.minigest.entities.account.Account;

import java.util.HashSet;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonIncludeProperties;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(uniqueConstraints = { @UniqueConstraint(columnNames = { "idFiscaleIVAPaese", "idFiscaleIVACodice" }) })
public class Azienda {

	@Id
	@GeneratedValue(strategy = GenerationType.UUID)
	private String id;

	private String titolo;
	private String denominazione;
	private String codiceEORI;
	private String idFiscaleIVAPaese;
	private String idFiscaleIVACodice;
	private String codiceFiscale;

	@OneToOne(fetch = FetchType.EAGER)
	private AziendaIndirizzo sede;

	@OneToOne(fetch = FetchType.EAGER)
	private AziendaIndirizzo stabileOrganizzazione;

	@OneToOne(fetch = FetchType.EAGER)
	@JsonIgnoreProperties({ "utenti", "rappresentanteFiscale" })
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

	@ManyToMany
	@JoinTable(name = "account_aziende")
	@JsonIncludeProperties({ "id", "email" })
	Set<Account> utenti = new HashSet<>();

	public void addUtente(Account utente) {
		utenti.add(utente);
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
		Azienda other = (Azienda) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}

}
