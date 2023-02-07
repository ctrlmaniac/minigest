package me.ctrlmaniac.minigest.controllers.rest;

import java.security.Principal;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import me.ctrlmaniac.minigest.entitities.account.Account;
import me.ctrlmaniac.minigest.payloads.UpdateRolesPayload;
import me.ctrlmaniac.minigest.services.account.AccountService;

@RestController
@RequestMapping("/api/account")
public class AccountController {

	@Autowired
	private AccountService accountService;

	@GetMapping("/list")
	public ResponseEntity<List<Account>> findAll(@RequestParam(name = "email", required = false) String email) {
		if (email != null) {
			return new ResponseEntity<>(accountService.searchByEmail(email), HttpStatus.OK);
		}

		return new ResponseEntity<>(accountService.findAll(), HttpStatus.OK);
	}

	@GetMapping("/{id}")
	public ResponseEntity<Account> find(@PathVariable String id) {
		Account account = accountService.findById(id);
		return new ResponseEntity<>(account, account != null ? HttpStatus.OK : HttpStatus.NOT_FOUND);
	}

	@PutMapping("/{id}")
	public ResponseEntity<Account> updateRoles(@PathVariable String id, @RequestBody UpdateRolesPayload payload) {
		Account account = accountService.findById(id);

		if (account != null) {
			account.setRoles(payload.getRoles());
			accountService.save(account);
		}

		return new ResponseEntity<>(account, account != null ? HttpStatus.OK : HttpStatus.NOT_FOUND);
	}

	@GetMapping("")
	public ResponseEntity<?> currentUser(Principal principal) {
		if (principal != null) {
			Account user = accountService.findByEmail(principal.getName());

			if (user != null) {
				return new ResponseEntity<Account>(user, HttpStatus.OK);
			} else {
				return new ResponseEntity<String>("Utente non connesso", HttpStatus.NOT_FOUND);
			}
		}

		return new ResponseEntity<String>("Utente non connesso", HttpStatus.NOT_FOUND);
	}

	@PutMapping("")
	public ResponseEntity<String> updateUser(Principal principal, @RequestBody Account payload) {
		if (principal != null) {
			Account user = accountService.findByEmail(principal.getName());

			if (user == null) {
				return new ResponseEntity<>("Utente non trovato", HttpStatus.NOT_FOUND);
			} else {
				user.setFname(payload.getFname());
				user.setLname(payload.getLname());
				user.setEmail(payload.getEmail());

				accountService.save(user);

				return new ResponseEntity<>("Account modificato con successo", HttpStatus.OK);
			}
		}

		return new ResponseEntity<String>("Utente non connesso", HttpStatus.NOT_FOUND);
	}

}
