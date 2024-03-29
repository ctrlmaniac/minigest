package me.ctrlmaniac.minigest.entities.account;

import java.util.HashSet;
import java.util.Set;

import org.springframework.security.core.userdetails.UserDetails;

import com.fasterxml.jackson.annotation.JsonIncludeProperties;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.ManyToMany;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import me.ctrlmaniac.minigest.entities.azienda.Azienda;

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
	private Set<AccountRuolo> authorities = new HashSet<>();

	@ManyToOne(fetch = FetchType.EAGER)
	@JsonIncludeProperties({ "id", "denominazione", "negozi" })
	Azienda azienda;

	public Account(String email, String nome, String cognome, String password) {
		this.email = email;
		this.nome = nome;
		this.cognome = cognome;
		this.password = password;
	}

	public Account(String email, String nome, String cognome, String password, boolean enabled,
			boolean credentialsNonExpired,
			boolean accountNonExpired, boolean accountNonLocked, Azienda azienda) {
		this.email = email;
		this.nome = nome;
		this.cognome = cognome;
		this.password = password;
		this.enabled = enabled;
		this.credentialsNonExpired = credentialsNonExpired;
		this.accountNonExpired = accountNonExpired;
		this.accountNonLocked = accountNonLocked;
		this.azienda = azienda;
	}

	@Override
	public String getUsername() {
		return this.email;
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
