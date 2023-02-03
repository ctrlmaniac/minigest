package me.ctrlmaniac.minigest.services.docfisc.fattura;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import me.ctrlmaniac.minigest.entitities.docfisc.fattura.Fattura;
import me.ctrlmaniac.minigest.entitities.docfisc.fattura.FatturaReparto;
import me.ctrlmaniac.minigest.repositories.docfisc.fattura.FatturaRepartoRepo;

@Service
public class FatturaRepartoService {

	@Autowired
	private FatturaRepartoRepo fatturaRepartoRepo;

	public FatturaReparto get(String id) {
		Optional<FatturaReparto> repartoOpt = fatturaRepartoRepo.findById(id);

		if (repartoOpt.isPresent()) {
			return repartoOpt.get();
		}

		return null;
	}

	public FatturaReparto save(FatturaReparto r) {
		return fatturaRepartoRepo.save(r);
	}

	public List<FatturaReparto> getAll() {
		return fatturaRepartoRepo.findAll();
	}

	public List<FatturaReparto> getAllByFattura(Fattura fattura) {
		return fatturaRepartoRepo.findAllByFattura(fattura);
	}

	public void deleteById(String id) {
		fatturaRepartoRepo.deleteById(id);
	}

	public void delete(FatturaReparto reparto) {
		fatturaRepartoRepo.delete(reparto);
	}

	public FatturaReparto update(String id, FatturaReparto newReparto) {
		Optional<FatturaReparto> repartoOpt = fatturaRepartoRepo.findById(id);

		if (repartoOpt.isPresent()) {
			FatturaReparto oldReparto = repartoOpt.get();

			oldReparto.setAliquota(newReparto.getAliquota());
			oldReparto.setImponibile(newReparto.getImponibile());
			oldReparto.setImposta(newReparto.getImposta());

			return fatturaRepartoRepo.save(oldReparto);
		}

		return null;
	}
}
