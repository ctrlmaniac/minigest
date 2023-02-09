package me.ctrlmaniac.minigest.services.negozio;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import me.ctrlmaniac.minigest.entities.azienda.Azienda;
import me.ctrlmaniac.minigest.entities.docfisc.chiusurafiscale.ChiusuraFiscale;
import me.ctrlmaniac.minigest.entities.negozio.Negozio;
import me.ctrlmaniac.minigest.repositories.negozio.NegozioRepo;
import me.ctrlmaniac.minigest.services.docfisc.chiusurafiscale.ChiusuraFiscaleService;

@Service
public class NegozioService {

	@Autowired
	private NegozioRepo repo;

	@Autowired
	private ChiusuraFiscaleService chiusuraService;

	public Negozio findById(String id) {
		Optional<Negozio> opt = repo.findById(id);

		if (opt.isPresent()) {
			return opt.get();
		}

		return null;
	}

	public List<Negozio> findAll() {
		return repo.findAll();
	}

	public List<Negozio> findAllByAzienda(Azienda azienda) {
		return repo.findAllByAzienda(azienda);
	}

	public Negozio save(Negozio negozio) {
		return repo.save(negozio);
	}

	public void delete(Negozio negozio) {
		for (ChiusuraFiscale chiusura : negozio.getChiusure()) {
			chiusuraService.delete(chiusura);
		}

		repo.delete(negozio);
	}
}
