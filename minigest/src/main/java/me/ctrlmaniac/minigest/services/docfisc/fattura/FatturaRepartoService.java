package me.ctrlmaniac.minigest.services.docfisc.fattura;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import me.ctrlmaniac.minigest.entities.docfisc.fattura.FatturaReparto;
import me.ctrlmaniac.minigest.repositories.docfisc.fattura.FatturaRepartoRepo;

@Service
public class FatturaRepartoService {

	@Autowired
	private FatturaRepartoRepo repo;

	public FatturaReparto save(FatturaReparto reparto) {
		return repo.save(reparto);
	}

	public void delete(FatturaReparto reparto) {
		repo.delete(reparto);
	}

	public void deleteById(String id) {
		repo.deleteById(id);
	}
}
