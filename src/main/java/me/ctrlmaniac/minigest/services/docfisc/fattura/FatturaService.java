package me.ctrlmaniac.minigest.services.docfisc.fattura;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import me.ctrlmaniac.minigest.entitities.docfisc.fattura.Fattura;
import me.ctrlmaniac.minigest.entitities.docfisc.fattura.FatturaReparto;
import me.ctrlmaniac.minigest.repositories.docfisc.fattura.FatturaRepo;

@Service
public class FatturaService {

	@Autowired
	FatturaRepo fatturaRepo;

	@Autowired
	FatturaRepartoService fatturaRepartoService;

	public Fattura get(String id) {
		Optional<Fattura> fatturaOpt = fatturaRepo.findById(id);

		if (fatturaOpt.isPresent()) {
			return fatturaOpt.get();
		}

		return null;
	}

	public Fattura save(Fattura f) {
		return fatturaRepo.save(f);
	}

	public List<Fattura> getAll() {
		return fatturaRepo.findAll();
	}

	public void deleteById(String id) {
		fatturaRepo.deleteById(id);
	}

	public Fattura update(String id, Fattura newFattura) {
		Optional<Fattura> fatturaOpt = fatturaRepo.findById(id);

		if (fatturaOpt.isPresent()) {
			Fattura oldFattura = fatturaOpt.get();
			List<FatturaReparto> reparti = oldFattura.getReparti();

			oldFattura.setTipoDocumento(newFattura.getTipoDocumento());
			oldFattura.setCedente(newFattura.getCedente());
			oldFattura.setCommittente(newFattura.getCommittente());
			oldFattura.setData(newFattura.getData());
			oldFattura.setNumero(newFattura.getNumero());
			oldFattura.setTotale(newFattura.getTotale());

			// Salva i nuovi reparti
			for (FatturaReparto reparto : newFattura.getReparti()) {
				if (reparto.getId() == null) {
					fatturaRepartoService.save(reparto);
				}
			}

			oldFattura.setReparti(newFattura.getReparti());

			Fattura fattura = fatturaRepo.save(oldFattura);

			// Elimina i vecchi reparti
			for (FatturaReparto reparto : reparti) {
				if (!newFattura.getReparti().contains(reparto)) {
					fatturaRepartoService.deleteById(reparto.getId());
				}
			}

			return fattura;
		}

		return null;
	}
}
