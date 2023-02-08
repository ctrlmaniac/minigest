package me.ctrlmaniac.minigest.controllers.rest.account;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import me.ctrlmaniac.minigest.entities.account.Account;
import me.ctrlmaniac.minigest.services.account.AccountService;

@RestController
@RequestMapping("/api/account")
public class AccountRestController {

	@Autowired
	private AccountService accountService;

	@GetMapping("")
	public ResponseEntity<List<Account>> findAll() {
		return new ResponseEntity<>(accountService.findAll(), HttpStatus.OK);
	}
}
