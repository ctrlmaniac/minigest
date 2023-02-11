package me.ctrlmaniac.minigest.controllers.rest.account;

import java.security.Principal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import me.ctrlmaniac.minigest.entities.account.Account;
import me.ctrlmaniac.minigest.services.account.AccountService;

@RestController
@RequestMapping("/api/account/principal")
public class AccountPrincipalRestController {

	@Autowired
	AccountService accountService;

	@GetMapping("")
	public ResponseEntity<?> currentUser(Principal principal) {
		if (principal != null) {
			Account user = accountService.findByEmail(principal.getName());

			if (user != null) {
				return new ResponseEntity<Account>(user, HttpStatus.OK);
			}
		}

		return new ResponseEntity<String>("Utente non connesso", HttpStatus.NOT_FOUND);
	}
}
