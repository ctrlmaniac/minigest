package me.ctrlmaniac.minigest.services.azienda;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import me.ctrlmaniac.minigest.entities.azienda.AziendaIndirizzo;
import me.ctrlmaniac.minigest.repositories.azienda.AziendaIndirizzoRepo;

@Service
public class AziendaIndirizzoService {

	@Autowired
	private AziendaIndirizzoRepo indirizzoRepo;

	public AziendaIndirizzo save(AziendaIndirizzo indirizzo) {
		return indirizzoRepo.save(indirizzo);
	}
}
