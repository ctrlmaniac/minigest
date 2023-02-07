package me.ctrlmaniac.minigest.entitities.account;

import java.time.LocalDate;

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
public class PasswordReset {

	@Id
	@GeneratedValue(strategy = GenerationType.UUID)
	private String id;

	@OneToOne(fetch = FetchType.EAGER)
	private Account account;

	private String token;

	private LocalDate expiryDate;

	public PasswordReset(Account account, String token, LocalDate expiryDate) {
		this.account = account;
		this.token = token;
		this.expiryDate = expiryDate;
	}

	public PasswordReset(Account account, String token) {
		this.account = account;
		this.token = token;
	}
}
