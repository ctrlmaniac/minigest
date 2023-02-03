package me.ctrlmaniac.minigest.services.docfisc.chiusurafiscale;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import me.ctrlmaniac.minigest.dto.ChiusuraFiscaleDTO;
import me.ctrlmaniac.minigest.entitities.Negozio;
import me.ctrlmaniac.minigest.entitities.docfisc.chiusurafiscale.ChiusuraFiscale;
import me.ctrlmaniac.minigest.entitities.docfisc.chiusurafiscale.ChiusuraFiscaleReparto;
import me.ctrlmaniac.minigest.repositories.NegozioRepo;
import me.ctrlmaniac.minigest.repositories.docfisc.chiusurafiscale.ChiusuraFiscaleRepo;

@Service
public class ChiusuraFiscaleService {

	@Autowired
	private ChiusuraFiscaleRepo cfRepo;

	@Autowired
	private ChiusuraFiscaleRepartoService cfRepartoService;

	@Autowired
	private NegozioRepo negozioRepo;

	public ChiusuraFiscale get(String id) {
		Optional<ChiusuraFiscale> cfOpt = cfRepo.findById(id);

		if (cfOpt.isPresent()) {
			return cfOpt.get();
		}

		return null;
	}

	public ChiusuraFiscale save(ChiusuraFiscaleDTO cf) {
		ChiusuraFiscale chiusuraFiscale = new ChiusuraFiscale();

		chiusuraFiscale.setNegozio(cf.getNegozio());
		chiusuraFiscale.setData(cf.getData());
		chiusuraFiscale.setTotale(cf.getTotale());
		chiusuraFiscale.setNumeroDocFisc(cf.getNumeroDocFisc());

		ChiusuraFiscale saved = cfRepo.save(chiusuraFiscale);

		if (cf.getReparti() != null) {
			for (ChiusuraFiscaleReparto reparto : cf.getReparti()) {
				reparto.setChiusuraFiscale(saved);
				cfRepartoService.save(reparto);
			}
		}

		return chiusuraFiscale;
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

	public List<ChiusuraFiscale> getAllByNegozioByData(String idNegozio, String year, String month) {
		Optional<Negozio> negozioOpt = negozioRepo.findById(idNegozio);

		if (negozioOpt.isPresent()) {
			Negozio negozio = negozioOpt.get();
			return cfRepo.findAllByNegozioByYearByMonth(negozio, year, month);
		} else {
			return null;
		}
	}

	public List<ChiusuraFiscale> getLast7(String idNegozio) {
		Optional<Negozio> negozioOpt = negozioRepo.findById(idNegozio);

		if (negozioOpt.isPresent()) {
			Negozio negozio = negozioOpt.get();

			return cfRepo.findTop7ByNegozioOrderByDataDesc(negozio);
		} else {
			return null;
		}

	}

	public ChiusuraFiscale update(String id, ChiusuraFiscale newCF) {
		Optional<ChiusuraFiscale> cfOpt = cfRepo.findById(id);

		if (cfOpt.isPresent()) {
			ChiusuraFiscale oldCF = cfOpt.get();

			oldCF.setData(newCF.getData());
			oldCF.setTotale(newCF.getTotale());
			oldCF.setNumeroDocFisc(newCF.getNumeroDocFisc());

			// Elimina i vecchi reparti
			for (ChiusuraFiscaleReparto reparto : oldCF.getReparti()) {
				if (!newCF.getReparti().contains(reparto)) {
					cfRepartoService.deleteById(reparto.getId());
				}
			}

			// salva il nuovo reparto
			for (ChiusuraFiscaleReparto reparto : newCF.getReparti()) {
				if (reparto.getId() == null) {
					reparto.setChiusuraFiscale(oldCF);
					cfRepartoService.save(reparto);
				}
			}

			oldCF.setReparti(newCF.getReparti());

			ChiusuraFiscale chiusura = cfRepo.save(oldCF);

			return chiusura;
		}

		return null;
	}

	public void deleteById(String id) {
		ChiusuraFiscale chiusuraFiscale = get(id);

		if (chiusuraFiscale != null) {
			cfRepo.deleteById(chiusuraFiscale.getId());

			for (ChiusuraFiscaleReparto reparto : chiusuraFiscale.getReparti()) {
				cfRepartoService.deleteById(reparto.getId());
			}
		}
	}
}
