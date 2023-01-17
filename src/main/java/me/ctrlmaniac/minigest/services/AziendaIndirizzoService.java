package me.ctrlmaniac.minigest.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import me.ctrlmaniac.minigest.entitities.AziendaIndirizzo;
import me.ctrlmaniac.minigest.repositories.AziendaIndirizzoRepo;

@Service
public class AziendaIndirizzoService {
    @Autowired
    AziendaIndirizzoRepo indirizzoRepo;

    public AziendaIndirizzo get(String id) {
        Optional<AziendaIndirizzo> indirizzoOpt = indirizzoRepo.findById(id);

        if (indirizzoOpt.isPresent()) {
            return indirizzoOpt.get();
        }

        return null;
    }

    public AziendaIndirizzo save(AziendaIndirizzo a) {
        return indirizzoRepo.save(a);
    }

    public List<AziendaIndirizzo> getAll() {
        return indirizzoRepo.findAll();
    }

    public void deleteById(String id) {
        indirizzoRepo.deleteById(id);
    }

    public AziendaIndirizzo update(String id, AziendaIndirizzo newAziendaIndirizzo) {
        Optional<AziendaIndirizzo> oldAziendaIndirizzoOpt = indirizzoRepo.findById(id);

        if (oldAziendaIndirizzoOpt.isPresent()) {
            AziendaIndirizzo oldAziendaIndirizzo = oldAziendaIndirizzoOpt.get();

            oldAziendaIndirizzo.setIndirizzo(newAziendaIndirizzo.getIndirizzo());
            oldAziendaIndirizzo.setNumeroCivico(newAziendaIndirizzo.getNumeroCivico());
            oldAziendaIndirizzo.setComune(newAziendaIndirizzo.getComune());
            oldAziendaIndirizzo.setProvincia(newAziendaIndirizzo.getProvincia());
            oldAziendaIndirizzo.setNazione(newAziendaIndirizzo.getNazione());

            return indirizzoRepo.save(oldAziendaIndirizzo);
        }

        return null;
    }
}
