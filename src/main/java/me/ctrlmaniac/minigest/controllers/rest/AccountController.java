package me.ctrlmaniac.minigest.controllers.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import me.ctrlmaniac.minigest.entitities.Account;
import me.ctrlmaniac.minigest.services.AccountService;

@RestController
@RequestMapping("/account")
public class AccountController {

    @Autowired
    AccountService accountService;

    @Autowired
    PasswordEncoder passwordEncoder;

    @PostMapping("/nuovo")
    public ResponseEntity<Account> register(@RequestBody Account account) {

        String hashPwd = passwordEncoder.encode(account.getPassword());
        account.setPassword(hashPwd);
        Account saved = accountService.save(account);

        return new ResponseEntity<Account>(saved, HttpStatus.CREATED);
    }

}
