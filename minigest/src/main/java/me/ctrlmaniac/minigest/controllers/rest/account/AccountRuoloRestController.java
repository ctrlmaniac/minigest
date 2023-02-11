package me.ctrlmaniac.minigest.controllers.rest.account;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import me.ctrlmaniac.minigest.services.account.AccountRuoloService;
import me.ctrlmaniac.minigest.entities.account.AccountRuolo;

import java.util.List;

@RestController
@RequestMapping("/api/account/ruoli")
public class AccountRuoloRestController {
	@Autowired
	AccountRuoloService service;

	@GetMapping("")
	public ResponseEntity<List<AccountRuolo>> findAll() {
		return new ResponseEntity<>(service.findAll(), HttpStatus.OK);
	}
}
