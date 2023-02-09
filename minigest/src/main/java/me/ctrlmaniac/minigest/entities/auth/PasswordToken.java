package me.ctrlmaniac.minigest.entities.auth;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import lombok.Data;
import lombok.NoArgsConstructor;
import me.ctrlmaniac.minigest.entities.account.Account;

@Entity
@Data
@NoArgsConstructor
public class PasswordToken {

	@Id
	@GeneratedValue(strategy = GenerationType.UUID)
	private String id;

	@OneToOne(fetch = FetchType.EAGER)
	private Account account;

	private String token;

	private LocalDate expiryDate;

	public PasswordToken(Account account, String token) {
		this.account = account;
		this.token = token;
		this.expiryDate = LocalDate.now().plusDays(1);
	}
}
