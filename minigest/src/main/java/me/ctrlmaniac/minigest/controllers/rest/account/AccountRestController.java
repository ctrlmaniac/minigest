package me.ctrlmaniac.minigest.controllers.rest.account;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import me.ctrlmaniac.minigest.entities.account.Account;
import me.ctrlmaniac.minigest.services.account.AccountService;
import me.ctrlmaniac.minigest.payloads.account.Update;

@RestController
@RequestMapping("/api/account")
public class AccountRestController {

	@Autowired
	private AccountService accountService;

	@GetMapping("")
	public ResponseEntity<List<Account>> findAll(@RequestParam(name = "email", required = false) String email) {
		if (email != null) {
			return new ResponseEntity<>(accountService.findByEmailContainingIgnoreCase(email), HttpStatus.OK);
		}

		return new ResponseEntity<>(accountService.findAll(), HttpStatus.OK);
	}

	@GetMapping("/{id}")
	public ResponseEntity<?> get(@PathVariable String id) {
		Account account = accountService.findById(id);

		return new ResponseEntity<>(account, account != null ? HttpStatus.OK : HttpStatus.NOT_FOUND);
	}

	@PutMapping("/{id}")
	public ResponseEntity<?> update(@PathVariable String id, @RequestBody Update payload) {
		Account account = accountService.findById(id);

		if (account != null) {
			account.setAccountNonExpired(payload.isAccountNonExpired());
			account.setAccountNonLocked(payload.isAccountNonLocked());
			account.setCredentialsNonExpired(payload.isCredentialsNonExpired());
			account.setEnabled(payload.isEnabled());

			account.setAuthorities(payload.getAuthorities());

			if (payload.getAziende() == null) {
				account.setAziende(null);
			} else {
				account.setAziende(payload.getAziende());
			}

			Account saved = accountService.save(account);

			return new ResponseEntity<>(saved, HttpStatus.OK);
		}

		return new ResponseEntity<>("Account non trovato", HttpStatus.NOT_FOUND);
	}
}
