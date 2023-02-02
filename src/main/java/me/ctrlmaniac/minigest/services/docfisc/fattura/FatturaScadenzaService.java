package me.ctrlmaniac.minigest.services.docfisc.fattura;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import me.ctrlmaniac.minigest.entitities.docfisc.fattura.FatturaScadenza;
import me.ctrlmaniac.minigest.repositories.docfisc.fattura.FatturaScadenzaRepo;

@Service
public class FatturaScadenzaService {

	@Autowired
	FatturaScadenzaRepo fatturaScadenzaRepo;

	public FatturaScadenza get(String id) {
		Optional<FatturaScadenza> scadenzaOpt = fatturaScadenzaRepo.findById(id);

		if (scadenzaOpt.isPresent()) {
			return scadenzaOpt.get();
		}

		return null;
	}

	public FatturaScadenza save(FatturaScadenza s) {
		return fatturaScadenzaRepo.save(s);
	}

	public List<FatturaScadenza> getAll() {
		return fatturaScadenzaRepo.findAllOrderByDataAsc();
	}

	public void deleteById(String id) {
		fatturaScadenzaRepo.deleteById(id);
	}

	public void delete(FatturaScadenza scadenza) {
		fatturaScadenzaRepo.delete(scadenza);
	}

	public FatturaScadenza update(String id, FatturaScadenza newScadenza) {
		Optional<FatturaScadenza> scadenzaOpt = fatturaScadenzaRepo.findById(id);

		if (scadenzaOpt.isPresent()) {
			FatturaScadenza oldScadenza = scadenzaOpt.get();

			oldScadenza.setData(newScadenza.getData());
			oldScadenza.setImporto(newScadenza.getImporto());

			return fatturaScadenzaRepo.save(oldScadenza);
		}

		return null;
	}
}
