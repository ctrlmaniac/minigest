package me.ctrlmaniac.minigest.services.docfisc.chiusurafiscale;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import me.ctrlmaniac.minigest.repositories.docfisc.chiusurafiscale.ChiusuraFiscaleRepartoRepo;
import me.ctrlmaniac.minigest.entities.docfisc.chiusurafiscale.ChiusuraFiscaleReparto;

@Service
public class ChiusuraFiscaleRepartoService {

	@Autowired
	ChiusuraFiscaleRepartoRepo repo;

	public ChiusuraFiscaleReparto save(ChiusuraFiscaleReparto reparto) {
		return repo.save(reparto);
	}

	public void delete(ChiusuraFiscaleReparto reparto) {
		repo.delete(reparto);
	}

	public void deleteById(String id) {
		Optional<ChiusuraFiscaleReparto> opt = repo.findById(id);

		if (opt.isPresent()) {
			repo.deleteById(id);
		}
	}
}
