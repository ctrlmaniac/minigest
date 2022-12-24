package me.ctrlmaniac.minigest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
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

    @Override
    public void run(String... args) throws Exception {
        Account account = new Account("davide.dicriscito@gmail.com", "Davide", "Di Criscito", "12345", "ADMIN");
        Azienda larapida = new Azienda("La Rapida di Davide Di Criscito");

        as.save(larapida);
        accountService.save(account);

        System.out.println("Application started");
    }

}
