package me.ctrlmaniac.minigest.services.azienda;

import me.ctrlmaniac.minigest.entities.azienda.Azienda;
import me.ctrlmaniac.minigest.entities.negozio.Negozio;
import me.ctrlmaniac.minigest.repositories.azienda.AziendaRepo;
import me.ctrlmaniac.minigest.services.negozio.NegozioService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AziendaService {

	@Autowired
	private AziendaRepo aziendaRepo;

	@Autowired
	private AziendaIndirizzoService indirizzoService;

	@Autowired
	private NegozioService negozioService;

	public Azienda findById(String id) {
		Optional<Azienda> opt = aziendaRepo.findById(id);

		if (opt.isPresent()) {
			return opt.get();
		}

		return null;
	}

	public boolean exists(String paese, String codice) {
		return aziendaRepo.existsByIdFiscaleIVAPaeseAndIdFiscaleIVACodice(paese, codice);
	}

	public List<Azienda> findAll() {
		return aziendaRepo.findAllByOrderByDenominazioneAsc();
	}

	public List<Azienda> searchByDenominazione(String denominazione) {
		return aziendaRepo.searchByDenominazione(denominazione);
	}

	public Azienda save(Azienda azienda) {
		// Salva la sede
		if (azienda.getSede() != null) {
			indirizzoService.save(azienda.getSede());
		}

		// Salva la stabile organizzazione
		if (azienda.getStabileOrganizzazione() != null) {
			indirizzoService.save(azienda.getStabileOrganizzazione());
		}

		// Salva il rappresentante fiscale
		if (azienda.getRappresentanteFiscale() != null) {
			aziendaRepo.save(azienda.getRappresentanteFiscale());
		}

		// Salva i negozi
		if (azienda.getNegozi() != null) {
			for (Negozio negozio : azienda.getNegozi()) {
				negozioService.save(negozio);
			}
		}

		return aziendaRepo.save(azienda);
	}
}
