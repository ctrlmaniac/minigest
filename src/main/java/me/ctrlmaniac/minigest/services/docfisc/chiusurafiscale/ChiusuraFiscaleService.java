package me.ctrlmaniac.minigest.services.docfisc.chiusurafiscale;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import me.ctrlmaniac.minigest.entitities.Negozio;
import me.ctrlmaniac.minigest.entitities.docfisc.chiusurafiscale.ChiusuraFiscale;
import me.ctrlmaniac.minigest.entitities.docfisc.chiusurafiscale.ChiusuraFiscaleReparto;
import me.ctrlmaniac.minigest.repositories.NegozioRepo;
import me.ctrlmaniac.minigest.repositories.docfisc.chiusurafiscale.ChiusuraFiscaleRepo;

@Service
public class ChiusuraFiscaleService {

	@Autowired
	ChiusuraFiscaleRepo cfRepo;

	@Autowired
	ChiusuraFiscaleRepartoService cfRepartoService;

	@Autowired
	NegozioRepo negozioRepo;

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

	public List<ChiusuraFiscale> getAll(String idNegozio) {
		Optional<Negozio> negozioOpt = negozioRepo.findById(idNegozio);

		if (negozioOpt.isPresent()) {
			Negozio negozio = negozioOpt.get();

			return cfRepo.findByNegozioOrderByDataAsc(negozio);
		} else {
			return null;
		}

	}

	public List<ChiusuraFiscale> getLatest7(String idNegozio) {
		Optional<Negozio> negozioOpt = negozioRepo.findById(idNegozio);

		if (negozioOpt.isPresent()) {
			Negozio negozio = negozioOpt.get();

			return cfRepo.findTop7ByNegozioOrderByDataDesc(negozio);
		} else {
			return null;
		}

	}

	public void deleteById(String id) {
		cfRepo.deleteById(id);
	}

	public ChiusuraFiscale update(String id, ChiusuraFiscale newCF) {
		Optional<ChiusuraFiscale> cfOpt = cfRepo.findById(id);

		if (cfOpt.isPresent()) {
			ChiusuraFiscale oldCF = cfOpt.get();
			List<ChiusuraFiscaleReparto> reparti = oldCF.getReparti();

			oldCF.setData(newCF.getData());
			oldCF.setTotale(newCF.getTotale());
			oldCF.setNumeroDocFisc(newCF.getNumeroDocFisc());

			// salva il nuovo reparto
			for (ChiusuraFiscaleReparto reparto : newCF.getReparti()) {
				if (reparto.getId() == null) {
					cfRepartoService.save(reparto);
				}
			}

			oldCF.setReparti(newCF.getReparti());

			ChiusuraFiscale chiusura = cfRepo.save(oldCF);

			// Elimina i vecchi reparti
			for (ChiusuraFiscaleReparto reparto : reparti) {
				if (!newCF.getReparti().contains(reparto)) {
					cfRepartoService.deleteById(reparto.getId());
				}
			}

			return chiusura;
		}

		return null;
	}
}
