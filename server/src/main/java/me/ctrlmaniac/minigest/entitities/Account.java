package me.ctrlmaniac.minigest.entitities;

import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
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

	@Column
	private String fname;

	@Column
	private String lname;

	@Column
	private String password;

	@Column(columnDefinition = "varchar(255) default 'CUSTOMER'")
	private String role;

	@OneToMany
	private List<Azienda> aziende;

	public Account(String email, String fname, String lname, String password, String role, List<Azienda> aziende) {
		this.email = email;
		this.fname = fname;
		this.lname = lname;
		this.password = password;
		this.role = role;
		this.aziende = aziende;
	}

}
