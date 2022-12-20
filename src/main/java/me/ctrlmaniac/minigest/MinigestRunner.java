package me.ctrlmaniac.minigest;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import me.ctrlmaniac.minigest.entitities.Azienda;
import me.ctrlmaniac.minigest.entitities.User;
import me.ctrlmaniac.minigest.services.AziendaService;
import me.ctrlmaniac.minigest.services.UserService;

@Component
public class MinigestRunner implements CommandLineRunner {

    @Autowired
    UserService us;

    @Autowired
    AziendaService as;

    @Override
    public void run(String... args) throws Exception {
        User davide = new User("Davide", "Di Criscito", "davide.dicriscito@gmail.com");
        User mario = new User("Mario", "Rossi", "mario.rossi@gmail.com");

        List<User> utentiLarapida = new ArrayList<>();
        utentiLarapida.add(davide);

        Azienda larapida = new Azienda(utentiLarapida, "La Rapida di Davide Di Criscito");

        us.save(davide);
        us.save(mario);

        as.save(larapida);

        System.out.println("Application started");
    }

}
