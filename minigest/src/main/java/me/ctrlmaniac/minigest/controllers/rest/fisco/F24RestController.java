package me.ctrlmaniac.minigest.controllers.rest.fisco;

import java.security.Principal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import me.ctrlmaniac.minigest.entities.account.Account;
import me.ctrlmaniac.minigest.services.account.AccountService;
import me.ctrlmaniac.minigest.services.fisco.f24.F24Service;

@RestController
@RequestMapping("/api/fisco")
public class F24RestController {

	@Autowired
	AccountService accountService;

	@Autowired
	F24Service service;

	@GetMapping("")
	public ResponseEntity<?> get(Principal principal) {
		if (principal != null) {
			Account account = accountService.findByEmail(principal.getName());

			if (account != null) {
				return new ResponseEntity<>(service.findAllByUtente(account), HttpStatus.OK);
			}
		}
		return new ResponseEntity<>("Utente non connesso", HttpStatus.NOT_FOUND);
	}
}
