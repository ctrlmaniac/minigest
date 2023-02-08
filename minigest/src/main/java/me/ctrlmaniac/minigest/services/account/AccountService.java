package me.ctrlmaniac.minigest.services.account;

import me.ctrlmaniac.minigest.entities.account.Account;
import me.ctrlmaniac.minigest.repositories.account.AccountRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AccountService {
	
	@Autowired
	AccountRepo accountRepo;
	
	public Account findByEmail(String email) {
		Optional<Account> opt = accountRepo.findByEmail(email);
		
		if (opt.isPresent()) {
			return opt.get();
		}
		
		return null;
	}
	
	public List<Account> findAll() {
		return accountRepo.findAll();
	}
	
	public Account save(Account account) {
		return accountRepo.save(account);
	}
}
