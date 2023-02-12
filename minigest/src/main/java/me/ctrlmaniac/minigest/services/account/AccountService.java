package me.ctrlmaniac.minigest.services.account;

import me.ctrlmaniac.minigest.entities.account.Account;
import me.ctrlmaniac.minigest.entities.account.AccountRuolo;
import me.ctrlmaniac.minigest.entities.azienda.Azienda;
import me.ctrlmaniac.minigest.entities.azienda.AziendaIndirizzo;
import me.ctrlmaniac.minigest.entities.negozio.Negozio;
import me.ctrlmaniac.minigest.enums.RuoloEnum;
import me.ctrlmaniac.minigest.repositories.account.AccountRepo;
import me.ctrlmaniac.minigest.services.azienda.AziendaIndirizzoService;
import me.ctrlmaniac.minigest.services.azienda.AziendaService;
import me.ctrlmaniac.minigest.services.negozio.NegozioService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import java.util.List;
import java.util.Optional;

@Service
public class AccountService implements UserDetailsService {

	@Autowired
	private AccountRepo accountRepo;

	@Autowired
	private AccountRuoloService ruoloService;

	@Autowired
	private PasswordEncoder passwordEncoder;

	@Autowired
	private AziendaService aziendaService;

	@Autowired
	private AziendaIndirizzoService aziendaIndirizzoService;

	@Autowired
	private NegozioService negozioService;

	public Account findById(String id) {
		Optional<Account> opt = accountRepo.findById(id);

		if (opt.isPresent()) {
			return opt.get();
		}

		return null;
	}

	public Account findByEmail(String email) {
		Optional<Account> opt = accountRepo.findByEmail(email);

		if (opt.isPresent()) {
			return opt.get();
		}

		return null;
	}

	public List<Account> findByEmailContainingIgnoreCase(String email) {
		return accountRepo.findByEmailContainingIgnoreCase(email);
	}

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		Account account = findByEmail(username);

		if (account == null) {
			throw new UsernameNotFoundException(username);
		}

		UserDetails user = new User(account.getEmail(), account.getPassword(), account.getAuthorities());

		return user;
	}

	public List<Account> findAll() {
		return accountRepo.findAll();
	}

	public boolean existsByEmail(String email) {
		return accountRepo.existsByEmail(email);
	}

	public Account save(Account payload) {
		AccountRuolo user = ruoloService.findByNome(RuoloEnum.ROLE_USER);

		payload.addRuolo(user);
		payload.setPassword(passwordEncoder.encode(payload.getPassword()));

		payload.setAccountNonExpired(payload.isAccountNonExpired() || true);
		payload.setAccountNonLocked(payload.isAccountNonLocked() || true);
		payload.setCredentialsNonExpired(payload.isCredentialsNonExpired() || true);
		payload.setEnabled(payload.isEnabled() || true);

		Account account = accountRepo.save(payload);

		for (Azienda azienda : payload.getAziende()) {
			azienda.addUtente(account);
			aziendaService.save(azienda);

			if (azienda.getSede() != null) {
				AziendaIndirizzo sede = azienda.getSede();
				aziendaIndirizzoService.save(sede);
			}

			for (Negozio negozio : azienda.getNegozi()) {
				negozio.setAzienda(azienda);
				negozioService.save(negozio);
			}
		}

		return accountRepo.save(account);
	}

	public void deleteById(String id) {
		accountRepo.deleteById(id);
	}

	public Account update(String id, Account payload) {
		Optional<Account> opt = accountRepo.findById(id);

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

			// Aggiorna le aziende
			for (Azienda azienda : old.getAziende()) {
				azienda.removeUtente(old);
				old.removeAzienda(azienda);
				aziendaService.save(azienda);
			}
			for (Azienda azienda : payload.getAziende()) {
				azienda.addUtente(old);
				old.addAzienda(azienda);
				aziendaService.save(azienda);
			}

			return accountRepo.save(old);
		}

		return null;
	}
}
