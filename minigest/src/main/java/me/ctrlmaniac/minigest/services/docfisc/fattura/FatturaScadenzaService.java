package me.ctrlmaniac.minigest.services.docfisc.fattura;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import me.ctrlmaniac.minigest.entities.docfisc.fattura.FatturaScadenza;
import me.ctrlmaniac.minigest.repositories.docfisc.fattura.FatturaScadenzaRepo;

@Service
public class FatturaScadenzaService {

	@Autowired
	private FatturaScadenzaRepo repo;

	public FatturaScadenza save(FatturaScadenza scadenza) {
		return repo.save(scadenza);
	}

	public void delete(FatturaScadenza scadenza) {
		repo.delete(scadenza);
	}

	public void deleteById(String id) {
		repo.deleteById(id);
	}
}
