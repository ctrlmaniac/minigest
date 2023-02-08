package me.ctrlmaniac.minigest.controllers.rest.account;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import me.ctrlmaniac.minigest.entities.account.Account;
import me.ctrlmaniac.minigest.services.account.AccountService;

@RestController
@RequestMapping("/api/account/register")
public class RegisterRestController {

	@Autowired
	private AccountService accountService;

	@GetMapping("")
	public ResponseEntity<Boolean> exists(@RequestParam(name = "email", required = true) String email) {
		return new ResponseEntity<>(accountService.existsByEmail(email), HttpStatus.OK);
	}

	@PostMapping("")
	public ResponseEntity<Account> register(@RequestBody Account account) {
		return new ResponseEntity<>(accountService.save(account), HttpStatus.CREATED);
	}
}
