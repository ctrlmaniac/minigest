package me.ctrlmaniac.minigest.services.azienda;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import me.ctrlmaniac.minigest.entitities.azienda.Azienda;
import me.ctrlmaniac.minigest.repositories.azienda.AziendaRepo;

@Service
public class AziendaService {
	@Autowired
	private AziendaRepo aziendaRepo;

	@Autowired
	private AziendaIndirizzoService aziendaIndirizzoService;

	public Azienda get(String id) {
		Optional<Azienda> aziendaOpt = aziendaRepo.findById(id);

		if (aziendaOpt.isPresent()) {
			return aziendaOpt.get();
		}

		return null;
	}

	public boolean exists(String paese, String codice) {
		return aziendaRepo.existsByIdFiscaleIVAPaeseAndIdFiscaleIVACodice(paese, codice);
	}

	public Azienda save(Azienda a) {

		if (a.getSede() != null) {
			aziendaIndirizzoService.save(a.getSede());
		}

		return aziendaRepo.save(a);
	}

	public List<Azienda> getAll() {
		return aziendaRepo.findAllByOrderByDenominazioneAsc();
	}

	public void deleteById(String id) {
		aziendaRepo.deleteById(id);
	}

	public Azienda update(String id, Azienda newAzienda) {
		Optional<Azienda> oldAziendaOpt = aziendaRepo.findById(id);

		if (oldAziendaOpt.isPresent()) {
			Azienda oldAzienda = oldAziendaOpt.get();

			oldAzienda.setDenominazione(newAzienda.getDenominazione());
			oldAzienda.setTitolo(newAzienda.getTitolo());
			oldAzienda.setCodiceEORI(newAzienda.getCodiceEORI());
			oldAzienda.setIdFiscaleIVAPaese(newAzienda.getIdFiscaleIVAPaese());
			oldAzienda.setIdFiscaleIVACodice(newAzienda.getIdFiscaleIVACodice());
			oldAzienda.setCodiceFiscale(newAzienda.getCodiceFiscale());

			// Aggiorna la sede
			if (newAzienda.getSede() == null && oldAzienda.getSede() != null) {
				// C'è una sede vecchia ma non c'è una sede nuova
				aziendaIndirizzoService.deleteById(oldAzienda.getSede().getId());
			}

			if (newAzienda.getSede() != null) {
				if (newAzienda.getSede().getId() == null) {
					// C'è una sede nuova
					aziendaIndirizzoService.save(newAzienda.getSede());
				}
			}
			oldAzienda.setSede(newAzienda.getSede());

			// Aggiorna il rappresentante fiscale
			if (newAzienda.getRappresentanteFiscale() == null && oldAzienda.getRappresentanteFiscale() != null) {
				// C'è un rappresentante fiscale vecchio ma non ce n'è uno nuovo
				deleteById(oldAzienda.getRappresentanteFiscale().getId());
			}

			if (newAzienda.getRappresentanteFiscale() != null) {
				if (newAzienda.getRappresentanteFiscale().getId() == null) {
					// C'è un rapprensentante fiscale nuovo
					save(newAzienda.getRappresentanteFiscale());
				}
			}
			oldAzienda.setRappresentanteFiscale(newAzienda.getRappresentanteFiscale());

			// Aggiorna la stabile organizzazione
			if (newAzienda.getStabileOrganizzazione() == null && oldAzienda.getStabileOrganizzazione() != null) {
				// C'è una stabile organizzazione vecchia ma non ce n'è una nuova
				aziendaIndirizzoService.deleteById(oldAzienda.getStabileOrganizzazione().getId());
			}

			if (newAzienda.getStabileOrganizzazione() != null) {
				if (newAzienda.getStabileOrganizzazione().getId() == null) {
					// C'è una stabile organizzazione nuova
					aziendaIndirizzoService.save(newAzienda.getStabileOrganizzazione());
				}
			}
			oldAzienda.setStabileOrganizzazione(newAzienda.getStabileOrganizzazione());

			return aziendaRepo.save(oldAzienda);
		}

		return null;
	}
}
