package me.ctrlmaniac.minigest.services.docfisc.chiusurafiscale;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import me.ctrlmaniac.minigest.entities.negozio.Negozio;
import me.ctrlmaniac.minigest.entities.docfisc.chiusurafiscale.ChiusuraFiscale;
import me.ctrlmaniac.minigest.entities.docfisc.chiusurafiscale.ChiusuraFiscaleReparto;
import me.ctrlmaniac.minigest.repositories.docfisc.chiusurafiscale.ChiusuraFiscaleRepo;
import me.ctrlmaniac.minigest.services.negozio.NegozioService;

@Service
public class ChiusuraFiscaleService {

	@Autowired
	private ChiusuraFiscaleRepo repo;

	@Autowired
	private ChiusuraFiscaleRepartoService repartoService;

	@Autowired
	private NegozioService negozioService;

	public ChiusuraFiscale find(String id) {
		Optional<ChiusuraFiscale> opt = repo.findById(id);

		if (opt.isPresent()) {
			return opt.get();
		}

		return null;
	}

	public List<ChiusuraFiscale> findAll(String idNegozio) {
		Negozio negozio = negozioService.findById(idNegozio);

		if (negozio != null) {
			System.out.println("qui");
			return repo.findByNegozioOrderByDataAsc(negozio);
		}

		return new ArrayList<>();

	}

	public List<ChiusuraFiscale> findAllByYearAndByMonth(Negozio negozio, String year, String month) {
		return repo.findAllByNegozioAndByYearAndByMonth(negozio, year, month);
	}

	public ChiusuraFiscale save(ChiusuraFiscale chiusura) {

		if (chiusura.getReparti().size() != 0) {
			for (ChiusuraFiscaleReparto reparto : chiusura.getReparti()) {
				repartoService.save(reparto);
			}
		}

		return repo.save(chiusura);
	}
}
