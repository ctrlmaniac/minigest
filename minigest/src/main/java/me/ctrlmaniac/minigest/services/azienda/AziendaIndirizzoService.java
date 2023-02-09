package me.ctrlmaniac.minigest.services.azienda;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import me.ctrlmaniac.minigest.entities.azienda.AziendaIndirizzo;
import me.ctrlmaniac.minigest.repositories.azienda.AziendaIndirizzoRepo;

@Service
public class AziendaIndirizzoService {

	@Autowired
	private AziendaIndirizzoRepo repo;

	public AziendaIndirizzo save(AziendaIndirizzo indirizzo) {
		return repo.save(indirizzo);
	}

	public AziendaIndirizzo update(String id, AziendaIndirizzo payload) {
		Optional<AziendaIndirizzo> opt = repo.findById(id);

		if (opt.isPresent()) {
			AziendaIndirizzo old = opt.get();

			old.setCap(payload.getCap());
			old.setComune(payload.getComune());
			old.setIndirizzo(payload.getIndirizzo());
			old.setNazione(payload.getNazione());
			old.setNumeroCivico(payload.getNumeroCivico());
			old.setProvincia(payload.getProvincia());

			return repo.save(old);
		}

		return null;
	}
}
