package me.ctrlmaniac.minigest.services.account;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import me.ctrlmaniac.minigest.entities.account.Account;
import me.ctrlmaniac.minigest.entities.account.AccountRuolo;
import me.ctrlmaniac.minigest.enums.RuoloEnum;
import me.ctrlmaniac.minigest.repos.account.AccountRepo;

@Service
public class AccountService implements UserDetailsService {

	@Autowired
	AccountRepo repo;

	@Autowired
	AccountRuoloService ruoloService;

	@Autowired
	PasswordEncoder passwordEncoder;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		Optional<Account> opt = repo.findByEmail(username);

		if (!opt.isPresent()) {
			throw new UsernameNotFoundException(username);
		}

		Account account = opt.get();

		UserDetails user = new User(account.getEmail(), account.getPassword(), account.getAuthorities());

		return user;
	}

	public Account findById(String id) {
		Optional<Account> opt = repo.findById(id);

		if (opt.isPresent()) {
			return opt.get();
		}

		return null;
	}

	public Account findByEmail(String email) {
		Optional<Account> opt = repo.findByEmail(email);

		if (opt.isPresent()) {
			return opt.get();
		}

		return null;
	}

	public List<Account> findByEmailContainingIgnoreCase(String email) {
		return repo.findByEmailContainingIgnoreCase(email);
	}

	public List<Account> findAll() {
		return repo.findAll();
	}

	public boolean existsByEmail(String email) {
		return repo.existsByEmail(email);
	}

	public void deleteById(String id) {
		repo.deleteById(id);
	}

	public Account save(Account payload) {
		AccountRuolo user = ruoloService.findByNome(RuoloEnum.ROLE_USER);

		payload.addRuolo(user);
		payload.setPassword(passwordEncoder.encode(payload.getPassword()));

		payload.setAccountNonExpired(payload.isAccountNonExpired());
		payload.setAccountNonLocked(payload.isAccountNonLocked());
		payload.setCredentialsNonExpired(payload.isCredentialsNonExpired());
		payload.setEnabled(payload.isEnabled());

		Account account = repo.save(payload);

		// TODO: aggiungere azienda e negozio

		return account;
	}

	public Account update(String id, Account payload) {
		Optional<Account> opt = repo.findById(id);

		if (opt.isPresent()) {
			Account old = opt.get();

			old.setNome(payload.getNome());
			old.setCognome(payload.getCognome());
			old.setEmail(payload.getEmail());

			old.setAccountNonExpired(payload.isAccountNonExpired());
			old.setAccountNonLocked(payload.isAccountNonLocked());
			old.setCredentialsNonExpired(payload.isCredentialsNonExpired());
			old.setEnabled(payload.isEnabled());

			old.setAuthorities(payload.getAuthorities());

			// TODO: aggiornare azienda e negozi

			return repo.save(old);
		}

		return null;
	}
}
