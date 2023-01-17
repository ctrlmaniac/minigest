package me.ctrlmaniac.minigest.controllers.rest;

import java.security.Principal;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import me.ctrlmaniac.minigest.entitities.Account;
import me.ctrlmaniac.minigest.repositories.AccountRepo;
import me.ctrlmaniac.minigest.services.AccountService;

@RestController
@RequestMapping("/api/account")
public class AccountController {

    @Autowired
    AccountService accountService;

    @Autowired
    PasswordEncoder passwordEncoder;

    @Autowired
    AccountRepo accountRepo;

    @GetMapping("")
    public ResponseEntity<Account> currentUser(Principal principal) {
        List<Account> users = accountRepo.findByEmail(principal.getName());
        Account account = new Account();

        if (users.size() == 0) {
            return new ResponseEntity<Account>(account, HttpStatus.NOT_FOUND);
        } else {
            account = new Account(users.get(0).getEmail(), users.get(0).getFname(), users.get(0).getLname(),
                    users.get(0).getRole(), users.get(0).getAziende());
            return new ResponseEntity<Account>(account, HttpStatus.OK);
        }
    }

    @PostMapping("/nuovo")
    public ResponseEntity<Account> register(@RequestBody Account account) {

        String hashPwd = passwordEncoder.encode(account.getPassword());
        account.setPassword(hashPwd);
        Account saved = accountService.save(account);

        return new ResponseEntity<Account>(saved, HttpStatus.CREATED);
    }

}
