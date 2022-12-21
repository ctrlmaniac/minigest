package me.ctrlmaniac.minigest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import me.ctrlmaniac.minigest.entitities.Azienda;
import me.ctrlmaniac.minigest.services.AziendaService;

@Component
public class MinigestRunner implements CommandLineRunner {

    @Autowired
    AziendaService as;

    @Override
    public void run(String... args) throws Exception {
        Azienda larapida = new Azienda("La Rapida di Davide Di Criscito");

        as.save(larapida);

        System.out.println("Application started");
    }

}
