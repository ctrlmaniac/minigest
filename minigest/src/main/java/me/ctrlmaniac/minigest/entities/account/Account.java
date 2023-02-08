package me.ctrlmaniac.minigest.entities.account;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import me.ctrlmaniac.minigest.entities.azienda.Azienda;

import java.util.HashSet;
import java.util.Set;
import java.util.Collection;

import com.fasterxml.jackson.annotation.JsonIncludeProperties;

import org.springframework.security.core.userdetails.UserDetails;

@Setter
@Getter
@NoArgsConstructor
@ToString
@Entity
public class Account implements UserDetails {

	@Id
	@GeneratedValue(strategy = GenerationType.UUID)
	private String id;

	@Column(unique = true)
	private String email;

	private String nome;
	private String cognome;
	private String password;
	private boolean enabled;
	private boolean credentialsNonExpired;
	private boolean accountNonExpired;
	private boolean accountNonLocked;

	@ManyToMany(fetch = FetchType.EAGER)
	private Collection<AccountRuolo> authorities = new HashSet<>();

	@ManyToMany(fetch = FetchType.EAGER, mappedBy = "utenti")
	@JsonIncludeProperties({ "id", "denominazione", "negozi" })
	Set<Azienda> aziende = new HashSet<>();

	public Account(String email, String nome, String cognome, String password) {
		this.email = email;
		this.nome = nome;
		this.cognome = cognome;
		this.password = password;
		this.enabled = true;
		this.credentialsNonExpired = true;
		this.accountNonExpired = true;
		this.accountNonLocked = true;
	}

	public Account(String email, String nome, String cognome) {
		this.email = email;
		this.nome = nome;
		this.cognome = cognome;
		this.enabled = true;
		this.credentialsNonExpired = true;
		this.accountNonExpired = true;
		this.accountNonLocked = true;
	}

	public String getUsername() {
		return this.email;
	}

	public void addAzienda(Azienda azienda) {
		aziende.add(azienda);
	}

	public void addRuolo(AccountRuolo ruolo) {
		authorities.add(ruolo);
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
		Account other = (Account) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}

}
