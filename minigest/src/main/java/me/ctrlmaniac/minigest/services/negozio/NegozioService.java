package me.ctrlmaniac.minigest.services.negozio;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import me.ctrlmaniac.minigest.entities.azienda.Azienda;
import me.ctrlmaniac.minigest.entities.negozio.Negozio;
import me.ctrlmaniac.minigest.repositories.negozio.NegozioRepo;

@Service
public class NegozioService {

	@Autowired
	NegozioRepo repo;

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
		// TODO: eliminare chiusure fiscali

		repo.delete(negozio);
	}

	public Negozio update(String id, Negozio payload) {
		Optional<Negozio> opt = repo.findById(id);

		if (opt.isPresent()) {
			Negozio old = opt.get();

			old.setNome(payload.getNome());

			return repo.save(old);
		}

		return null;
	}
}
