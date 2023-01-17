package me.ctrlmaniac.minigest.services.azienda;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import me.ctrlmaniac.minigest.entitities.azienda.Azienda;
import me.ctrlmaniac.minigest.repositories.azienda.AziendaRepo;

@Service
public class AziendaService {
    @Autowired
    AziendaRepo aziendaRepo;

    public Azienda get(String id) {
        Optional<Azienda> aziendaOpt = aziendaRepo.findById(id);

        if (aziendaOpt.isPresent()) {
            return aziendaOpt.get();
        }

        return null;
    }

    public Azienda save(Azienda a) {
        return aziendaRepo.save(a);
    }

    public List<Azienda> getAll() {
        return aziendaRepo.findAll();
    }

    public void deleteById(String id) {
        aziendaRepo.deleteById(id);
    }

    public Azienda update(String id, Azienda newAzienda) {
        Optional<Azienda> oldAziendaOpt = aziendaRepo.findById(id);

        if (oldAziendaOpt.isPresent()) {
            Azienda oldAzienda = oldAziendaOpt.get();

            oldAzienda.setDenominazione(newAzienda.getDenominazione());
            oldAzienda.setTitolo(newAzienda.getTitolo());
            oldAzienda.setNome(newAzienda.getNome());
            oldAzienda.setCognome(newAzienda.getCognome());
            oldAzienda.setCodiceEORI(newAzienda.getCodiceEORI());
            oldAzienda.setIdFiscaleIVAPaese(newAzienda.getIdFiscaleIVAPaese());
            oldAzienda.setIdFiscaleIVACodice(newAzienda.getIdFiscaleIVACodice());
            oldAzienda.setCodiceFiscale(newAzienda.getCodiceFiscale());
            oldAzienda.setSede(newAzienda.getSede());

            return aziendaRepo.save(oldAzienda);
        }

        return null;
    }
}
