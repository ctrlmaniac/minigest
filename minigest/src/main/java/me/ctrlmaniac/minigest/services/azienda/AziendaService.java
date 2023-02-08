package me.ctrlmaniac.minigest.services.azienda;

import me.ctrlmaniac.minigest.entities.azienda.Azienda;
import me.ctrlmaniac.minigest.repositories.azienda.AziendaRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AziendaService {

	@Autowired
	private AziendaRepo aziendaRepo;

	public List<Azienda> findAll() {
		return aziendaRepo.findAll();
	}

	public Azienda save(Azienda azienda) {
		return aziendaRepo.save(azienda);
	}
}
