package me.ctrlmaniac.minigest.services.account;

import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import me.ctrlmaniac.minigest.repositories.account.PasswordResetRepo;
import me.ctrlmaniac.minigest.entitities.account.Account;
import me.ctrlmaniac.minigest.entitities.account.PasswordReset;

@Service
public class PasswordResetService {

	@Autowired
	PasswordResetRepo passwordResetRepo;

	public PasswordReset generateToken(Account account, String token, LocalDate expiration) {
		PasswordReset accountToken = new PasswordReset(account, token, expiration);
		return passwordResetRepo.save(accountToken);
	}
}
