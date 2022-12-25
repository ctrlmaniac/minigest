package me.ctrlmaniac.minigest;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import me.ctrlmaniac.minigest.entitities.Account;
import me.ctrlmaniac.minigest.entitities.Azienda;
import me.ctrlmaniac.minigest.services.AccountService;
import me.ctrlmaniac.minigest.services.AziendaService;

@Component
public class MinigestRunner implements CommandLineRunner {

    @Autowired
    AziendaService as;

    @Autowired
    AccountService accountService;

    @Autowired
    PasswordEncoder passwordEncoder;

    @Override
    public void run(String... args) throws Exception {
        Account account = new Account("davide.dicriscito@gmail.com", "Davide", "Di Criscito", "12345", "ADMIN");
        String hashPwd = passwordEncoder.encode(account.getPassword());
        account.setPassword(hashPwd);
        accountService.save(account);

        Azienda larapida = new Azienda("La Rapida di Davide Di Criscito");
        List<Account> larapidaUsers = new ArrayList<>();

        larapidaUsers.add(account);

        larapida.setAccount(larapidaUsers);

        as.save(larapida);

        System.out.println("Application started");
    }

}
