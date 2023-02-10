package me.ctrlmaniac.minigest.services.docfisc.chiusurafiscale;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import me.ctrlmaniac.minigest.entities.negozio.Negozio;
import me.ctrlmaniac.minigest.entities.docfisc.chiusurafiscale.ChiusuraFiscale;
import me.ctrlmaniac.minigest.entities.docfisc.chiusurafiscale.ChiusuraFiscaleReparto;
import me.ctrlmaniac.minigest.repositories.docfisc.chiusurafiscale.ChiusuraFiscaleRepo;

@Service
public class ChiusuraFiscaleService {

	@Autowired
	private ChiusuraFiscaleRepo repo;

	@Autowired
	private ChiusuraFiscaleRepartoService repartoService;

	public ChiusuraFiscale find(String id) {
		Optional<ChiusuraFiscale> opt = repo.findById(id);

		if (opt.isPresent()) {
			return opt.get();
		}

		return null;
	}

	public List<ChiusuraFiscale> findAll(Negozio negozio) {
		return repo.findByNegozioOrderByDataAsc(negozio);

	}

	public List<ChiusuraFiscale> findAllByNegozio(Negozio negozio) {
		return repo.findAllByNegozio(negozio);
	}

	public List<ChiusuraFiscale> findAllByNegozioAndByData(Negozio negozio, String year, String month) {
		return repo.findAllByNegozioAndByYearAndByMonth(negozio, year, month);
	}

	public ChiusuraFiscale save(ChiusuraFiscale payload) {
		ChiusuraFiscale chiusura = repo.save(payload);

		if (payload.getReparti().size() != 0) {
			for (ChiusuraFiscaleReparto reparto : payload.getReparti()) {
				reparto.setChiusuraFiscale(chiusura);
				repartoService.save(reparto);
			}
		}

		return chiusura;
	}

	public void delete(ChiusuraFiscale chiusura) {
		for (ChiusuraFiscaleReparto reparto : chiusura.getReparti()) {
			repartoService.delete(reparto);
		}

		repo.delete(chiusura);
	}

	public ChiusuraFiscale update(String id, ChiusuraFiscale payload) {
		Optional<ChiusuraFiscale> opt = repo.findById(id);

		if (opt.isPresent()) {
			ChiusuraFiscale chiusura = opt.get();

			chiusura.setData(payload.getData());
			chiusura.setTotale(payload.getTotale());
			chiusura.setNumeroDocFisc(payload.getNumeroDocFisc());

			for (ChiusuraFiscaleReparto reparto : chiusura.getReparti()) {
				if (!payload.getReparti().contains(reparto)) {
					repartoService.delete(reparto);
				}
			}

			// Salva i nuovi reparti
			for (ChiusuraFiscaleReparto reparto : payload.getReparti()) {
				if (reparto.getId() == null) {
					reparto.setChiusuraFiscale(chiusura);
					repartoService.save(reparto);
				}
			}

			chiusura.setReparti(payload.getReparti());

			return repo.save(chiusura);
		}

		return null;
	}

	public List<ChiusuraFiscale> findLast7(Negozio negozio) {
		return repo.findTop7ByNegozioOrderByDataDesc(negozio);
	}
}
