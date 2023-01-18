package me.ctrlmaniac.minigest.services.docfisc.chiusurafiscale;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import java.util.stream.IntStream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import me.ctrlmaniac.minigest.entitities.docfisc.chiusurafiscale.ChiusuraFiscale;
import me.ctrlmaniac.minigest.entitities.docfisc.chiusurafiscale.ChiusuraFiscaleReparto;
import me.ctrlmaniac.minigest.repositories.docfisc.chiusurafiscale.ChiusuraFiscaleRepo;

@Service
public class ChiusuraFiscaleService {

	@Autowired
	ChiusuraFiscaleRepo cfRepo;

	@Autowired
	ChiusuraFiscaleRepartoService cfRepartoService;

	public ChiusuraFiscale get(String id) {
		Optional<ChiusuraFiscale> cfOpt = cfRepo.findById(id);

		if (cfOpt.isPresent()) {
			return cfOpt.get();
		}

		return null;
	}

	public ChiusuraFiscale save(ChiusuraFiscale cf) {

		if (cf.getReparti() != null) {
			for (ChiusuraFiscaleReparto cfReparto : cf.getReparti()) {
				cfRepartoService.save(cfReparto);
			}
		}

		return cfRepo.save(cf);
	}

	public List<ChiusuraFiscale> getAll() {
		return cfRepo.findAll();
	}

	public void deleteById(String id) {
		cfRepo.deleteById(id);
	}

	public ChiusuraFiscale update(String id, ChiusuraFiscale newCF) {
		Optional<ChiusuraFiscale> cfOpt = cfRepo.findById(id);

		if (cfOpt.isPresent()) {
			ChiusuraFiscale oldCF = cfOpt.get();

			oldCF.setData(newCF.getData());
			oldCF.setTotale(newCF.getTotale());
			oldCF.setNumeroDocFisc(newCF.getNumeroDocFisc());

			// TODO
			// // Elimina i vecchi reparti
			// for (ChiusuraFiscaleReparto reparto : oldCF.getReparti()) {
			// if (!newCF.getReparti().contains(reparto)) {
			// cfRepartoService.deleteById(reparto.getId());
			// }
			// }

			// salva il nuovo reparto
			for (ChiusuraFiscaleReparto reparto : newCF.getReparti()) {
				if (reparto.getId() == null) {
					cfRepartoService.save(reparto);
				}
			}

			oldCF.setReparti(newCF.getReparti());

			return cfRepo.save(oldCF);
		}

		return null;
	}
}
