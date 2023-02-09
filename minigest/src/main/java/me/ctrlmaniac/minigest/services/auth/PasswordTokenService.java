package me.ctrlmaniac.minigest.services.auth;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import me.ctrlmaniac.minigest.repositories.auth.PasswordTokenRepo;
import me.ctrlmaniac.minigest.entities.account.Account;
import me.ctrlmaniac.minigest.entities.auth.PasswordToken;

@Service
public class PasswordTokenService {

	@Autowired
	PasswordTokenRepo repo;

	public PasswordToken generateToken(Account account, String token) {
		PasswordToken accountToken = new PasswordToken(account, token);
		return repo.save(accountToken);
	}

	public PasswordToken findByToken(String token) {
		Optional<PasswordToken> opt = repo.findByToken(token);

		if (opt.isPresent()) {
			return opt.get();
		}

		return null;
	}
}
