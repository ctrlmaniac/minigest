package me.ctrlmaniac.minigest.services.azienda;

import me.ctrlmaniac.minigest.entities.account.Account;
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

	public Azienda findByIdFiscaleIVAPaeseAndIdFiscaleIVACodice(String paese, String codice) {
		Optional<Azienda> opt = aziendaRepo.findByIdFiscaleIVAPaeseAndIdFiscaleIVACodice(paese, codice);

		if (opt.isPresent()) {
			return opt.get();
		}

		return null;
	}

	public Azienda findByIdFiscaleIVAPaeseAndIdFiscaleIVACodiceAndCodiceFiscale(String paese, String codice,
			String codiceFiscale) {
		Optional<Azienda> opt = aziendaRepo.findByIdFiscaleIVAPaeseAndIdFiscaleIVACodiceAndCodiceFiscale(paese, codice,
				codiceFiscale);

		if (opt.isPresent()) {
			return opt.get();
		}

		return null;
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

		if (azienda.getUtenti() != null) {
			for (Account utente : azienda.getUtenti()) {
				azienda.addUtente(utente);
			}
		}

		return aziendaRepo.save(azienda);
	}

	public void deleteById(String id) {
		Optional<Azienda> opt = aziendaRepo.findById(id);

		if (opt.isPresent()) {
			Azienda azienda = opt.get();

			// TODO
			// fatturaService.deleteAllByCedente(azienda);
			// fatturaService.deleteAllByCommittente(azienda);

			for (Negozio negozio : azienda.getNegozi()) {
				negozioService.delete(negozio);
			}

			aziendaRepo.deleteById(id);
		}
	}

	public Azienda update(String id, Azienda payload) {
		Optional<Azienda> opt = aziendaRepo.findById(id);

		if (opt.isPresent()) {
			Azienda old = opt.get();

			old.setCodiceEORI(payload.getCodiceEORI());
			old.setCodiceFiscale(payload.getCodiceFiscale());
			old.setDenominazione(payload.getDenominazione());
			old.setIdFiscaleIVACodice(payload.getIdFiscaleIVACodice());
			old.setIdFiscaleIVAPaese(payload.getIdFiscaleIVAPaese());
			old.setTitolo(payload.getTitolo());

			if (payload.getSede() != null) {
				indirizzoService.update(payload.getSede().getId(), payload.getSede());
			}

			if (payload.getUtenti() != null) {
				old.setUtenti(payload.getUtenti());
			}

			return aziendaRepo.save(old);
		}

		return null;
	}
}