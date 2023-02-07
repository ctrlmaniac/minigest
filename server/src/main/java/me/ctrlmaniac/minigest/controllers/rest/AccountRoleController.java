package me.ctrlmaniac.minigest.controllers.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import me.ctrlmaniac.minigest.entitities.account.AccountRole;
import me.ctrlmaniac.minigest.services.account.AccountRoleService;

@RestController
@RequestMapping("/api/account/ruoli")
public class AccountRoleController {

	@Autowired
	private AccountRoleService roleService;

	@GetMapping("")
	public ResponseEntity<List<AccountRole>> findAll() {
		return new ResponseEntity<>(roleService.findAll(), HttpStatus.OK);
	}
}
