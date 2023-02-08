package me.ctrlmaniac.minigest.services.account;

import me.ctrlmaniac.minigest.entities.account.Account;
import me.ctrlmaniac.minigest.entities.account.AccountRuolo;
import me.ctrlmaniac.minigest.repositories.account.AccountRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class AccountService implements UserDetailsService {

	@Autowired
	private AccountRepo accountRepo;

	public Account findByEmail(String email) {
		Optional<Account> opt = accountRepo.findByEmail(email);

		if (opt.isPresent()) {
			return opt.get();
		}

		return null;
	}

	@Override
	public UserDetails loadUserByUsername(String username) {
		Set<GrantedAuthority> authorities = new HashSet<>();
		Account user = findByEmail(username);

		if (user != null) {
			for (AccountRuolo ruolo : user.getRuoli()) {
				authorities.add(new SimpleGrantedAuthority(ruolo.getNome().name()));
			}

			return new User(username, user.getPassword(), authorities);
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
