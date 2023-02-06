package me.ctrlmaniac.minigest.entitities.account;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;
import lombok.Data;
import lombok.NoArgsConstructor;
import me.ctrlmaniac.minigest.entitities.azienda.Azienda;

@Entity
@Data
@NoArgsConstructor
public class Account {

	@Id
	@GeneratedValue(strategy = GenerationType.UUID)
	private String id;

	@Column(unique = true)
	private String email;

	private String fname;

	private String lname;

	private String password;

	@ManyToMany(fetch = FetchType.EAGER)
	Set<AccountRole> roles = new HashSet<>();

	@OneToMany
	private List<Azienda> aziende;

	public Account(String email, String fname, String lname, String password, Set<AccountRole> roles,
			List<Azienda> aziende) {
		this.email = email;
		this.fname = fname;
		this.lname = lname;
		this.password = password;
		this.roles = roles;
		this.aziende = aziende;
	}

	public Account(String email, String fname, String lname, String password, AccountRole role,
			List<Azienda> aziende) {
		this.email = email;
		this.fname = fname;
		this.lname = lname;
		this.password = password;
		this.roles.add(role);
		this.aziende = aziende;
	}
}
