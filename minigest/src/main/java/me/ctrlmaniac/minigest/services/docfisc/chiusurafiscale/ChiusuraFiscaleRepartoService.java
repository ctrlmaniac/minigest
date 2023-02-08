package me.ctrlmaniac.minigest.services.docfisc.chiusurafiscale;

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
}
