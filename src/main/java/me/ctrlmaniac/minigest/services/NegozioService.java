package me.ctrlmaniac.minigest.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import me.ctrlmaniac.minigest.entitities.Negozio;
import me.ctrlmaniac.minigest.entitities.azienda.Azienda;
import me.ctrlmaniac.minigest.repositories.NegozioRepo;

@Service
public class NegozioService {
	@Autowired
	NegozioRepo negozioRepo;

	public Negozio get(String id) {
		Optional<Negozio> negozioOpt = negozioRepo.findById(id);

		if (negozioOpt.isPresent()) {
			return negozioOpt.get();
		}

		return null;
	}

	public Negozio save(Negozio a) {
		return negozioRepo.save(a);
	}

	public List<Negozio> getAll() {
		return negozioRepo.findAll();
	}

	public List<Negozio> getAllByAzienda(Azienda azienda) {
		return negozioRepo.findAllByAzienda(azienda);
	}

	public void deleteById(String id) {
		negozioRepo.deleteById(id);
	}

	public Negozio update(String id, Negozio newNegozio) {
		Optional<Negozio> oldNegozioOpt = negozioRepo.findById(id);

		if (oldNegozioOpt.isPresent()) {
			Negozio oldNegozio = oldNegozioOpt.get();

			oldNegozio.setAzienda(newNegozio.getAzienda());
			oldNegozio.setNome(newNegozio.getNome());

			return negozioRepo.save(oldNegozio);
		}

		return null;
	}
}
