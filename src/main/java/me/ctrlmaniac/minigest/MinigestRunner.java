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
    AziendaService aziendaService;

    @Autowired
    AccountService accountService;

    @Autowired
    PasswordEncoder passwordEncoder;

    @Override
    public void run(String... args) throws Exception {
        // Crea un'azienda
        Azienda larapida = new Azienda("La Rapida di Davide Di Criscito");
        aziendaService.save(larapida);

        Azienda shop = new Azienda("Shop");
        aziendaService.save(shop);

        // Crea un utente
        String hashPwd = passwordEncoder.encode("12345");
        Account davide = new Account("davide.dicriscito@gmail.com", "Davide", "Di Criscito", hashPwd, "ADMIN", null);

        // Crea una lista di aziende che appartengono a Davide
        List<Azienda> davideAziende = new ArrayList<>();
        davideAziende.add(larapida);
        davideAziende.add(shop);
        davide.setAziende(davideAziende);

        // Salva l'account
        accountService.save(davide);

        System.out.println("Application started at http://localhost:8080");
    }

}
