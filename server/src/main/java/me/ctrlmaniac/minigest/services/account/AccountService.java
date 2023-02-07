package me.ctrlmaniac.minigest.services.account;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import me.ctrlmaniac.minigest.entitities.account.Account;
import me.ctrlmaniac.minigest.entitities.account.AccountRole;
import me.ctrlmaniac.minigest.repositories.account.AccountRepo;

@Service
public class AccountService implements UserDetailsService {

	@Autowired
	private AccountRepo accountRepo;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		List<GrantedAuthority> authorities = null;
		Account user = accountRepo.findByEmail(username);

		if (user == null) {
			throw new UsernameNotFoundException("User details not found for the user : " + username);
		} else {
			String password = user.getPassword();
			authorities = new ArrayList<>();

			for (AccountRole role : user.getRoles()) {
				authorities.add(new SimpleGrantedAuthority(role.getName().toString()));
			}

			return new User(username, password, authorities);
		}
	}

	public Account save(Account a) {
		return accountRepo.save(a);
	}

	public Account findByEmail(String email) {
		return accountRepo.findByEmail(email);
	}

	public boolean exists(String email) {
		return accountRepo.existsByEmail(email);
	}

	public List<Account> findAll() {
		return accountRepo.findAll();
	}

	public Account findById(String id) {
		Optional<Account> opt = accountRepo.findById(id);

		if (opt.isPresent()) {
			return opt.get();
		}

		return null;
	}

	public List<Account> searchByEmail(String email) {
		return accountRepo.searchByEmail(email);
	}

}
