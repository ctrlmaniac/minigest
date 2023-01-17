package me.ctrlmaniac.minigest;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import me.ctrlmaniac.minigest.entitities.Account;
import me.ctrlmaniac.minigest.entitities.Azienda;
import me.ctrlmaniac.minigest.entitities.AziendaIndirizzo;
import me.ctrlmaniac.minigest.services.AccountService;
import me.ctrlmaniac.minigest.services.AziendaIndirizzoService;
import me.ctrlmaniac.minigest.services.AziendaService;

@Component
public class MinigestRunner implements CommandLineRunner {

        @Autowired
        AziendaService aziendaService;

        @Autowired
        AccountService accountService;

        @Autowired
        PasswordEncoder passwordEncoder;

        @Autowired
        AziendaIndirizzoService aziendaIndirizzoService;

        @Override
        public void run(String... args) throws Exception {
                // Crea un'azienda
                AziendaIndirizzo larapidaSede = new AziendaIndirizzo("Viale Alcide De Gasperi", "6",
                                "Molinetto di Mazzano", "BS", "IT");
                aziendaIndirizzoService.save(larapidaSede);

                Azienda larapida = new Azienda("La Rapida di Davide Di Criscito", null, null, null, null, "IT",
                                "03792670980",
                                "DCRDVD90E23B157R",
                                larapidaSede, null, null);
                aziendaService.save(larapida);

                // Crea una seconda azienda
                AziendaIndirizzo shopSede = new AziendaIndirizzo("Viale Italia", "1", "Brescia", "BS", "IT");
                aziendaIndirizzoService.save(shopSede);

                Azienda shop = new Azienda("Shop", null, null, null, null, "IT", "12345678910", "12345678910", shopSede,
                                null,
                                null);
                aziendaService.save(shop);

                // Crea un utente
                String hashPwd = passwordEncoder.encode("12345");
                Account davide = new Account("davide.dicriscito@gmail.com", "Davide", "Di Criscito", hashPwd, "ADMIN",
                                null);

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
