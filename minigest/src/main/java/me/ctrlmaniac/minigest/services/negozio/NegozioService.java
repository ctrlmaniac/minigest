package me.ctrlmaniac.minigest.services.negozio;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import me.ctrlmaniac.minigest.entities.azienda.Azienda;
import me.ctrlmaniac.minigest.entities.negozio.Negozio;
import me.ctrlmaniac.minigest.repositories.negozio.NegozioRepo;

@Service
public class NegozioService {

	@Autowired
	private NegozioRepo negozioRepo;

	public List<Negozio> findAll() {
		return negozioRepo.findAll();
	}

	public List<Negozio> findAllByAzienda(Azienda azienda) {
		return negozioRepo.findAllByAzienda(azienda);
	}

	public Negozio save(Negozio negozio) {
		return negozioRepo.save(negozio);
	}
}
