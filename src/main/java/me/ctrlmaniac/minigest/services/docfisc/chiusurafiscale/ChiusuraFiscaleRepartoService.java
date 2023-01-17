package me.ctrlmaniac.minigest.services.docfisc.chiusurafiscale;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import me.ctrlmaniac.minigest.entitities.docfisc.chiusurafiscale.ChiusuraFiscaleReparto;
import me.ctrlmaniac.minigest.repositories.docfisc.chiusurafiscale.ChiusuraFiscaleRepartoRepo;

@Service
public class ChiusuraFiscaleRepartoService {

    @Autowired
    ChiusuraFiscaleRepartoRepo cfRepo;

    public ChiusuraFiscaleReparto get(String id) {
        Optional<ChiusuraFiscaleReparto> cfOpt = cfRepo.findById(id);

        if (cfOpt.isPresent()) {
            return cfOpt.get();
        }

        return null;
    }

    public ChiusuraFiscaleReparto save(ChiusuraFiscaleReparto cf) {
        return cfRepo.save(cf);
    }

    public List<ChiusuraFiscaleReparto> getAll() {
        return cfRepo.findAll();
    }

    public void deleteById(String id) {
        cfRepo.deleteById(id);
    }

    public ChiusuraFiscaleReparto update(String id, ChiusuraFiscaleReparto newCF) {
        Optional<ChiusuraFiscaleReparto> cfOpt = cfRepo.findById(id);

        if (cfOpt.isPresent()) {
            ChiusuraFiscaleReparto oldCF = cfOpt.get();

            oldCF.setAliquota(newCF.getAliquota());
            oldCF.setTotale(newCF.getTotale());
            oldCF.setTotaleAnnulli(newCF.getTotaleAnnulli());
            oldCF.setTotaleResi(newCF.getTotaleResi());

            return cfRepo.save(oldCF);
        }

        return null;
    }
}
