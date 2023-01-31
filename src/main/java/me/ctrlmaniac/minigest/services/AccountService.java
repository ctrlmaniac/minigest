package me.ctrlmaniac.minigest.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import me.ctrlmaniac.minigest.entitities.Account;
import me.ctrlmaniac.minigest.repositories.AccountRepo;

@Service
public class AccountService implements UserDetailsService {

	@Autowired
	AccountRepo accountRepo;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		List<GrantedAuthority> authorities = null;
		Account user = accountRepo.findByEmail(username);

		if (user == null) {
			throw new UsernameNotFoundException("User details not found for the user : " + username);
		} else {
			String password = user.getPassword();
			authorities = new ArrayList<>();
			authorities.add(new SimpleGrantedAuthority(user.getRole()));

			return new User(username, password, authorities);
		}
	}

	public Account save(Account a) {
		return accountRepo.save(a);
	}

}
