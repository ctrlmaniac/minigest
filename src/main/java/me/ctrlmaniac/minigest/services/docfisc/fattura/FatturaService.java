package me.ctrlmaniac.minigest.services.docfisc.fattura;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import me.ctrlmaniac.minigest.entitities.azienda.Azienda;
import me.ctrlmaniac.minigest.entitities.docfisc.fattura.Fattura;
import me.ctrlmaniac.minigest.entitities.docfisc.fattura.FatturaReparto;
import me.ctrlmaniac.minigest.repositories.docfisc.fattura.FatturaRepo;
import me.ctrlmaniac.minigest.services.azienda.AziendaService;

@Service
public class FatturaService {

	@Autowired
	FatturaRepo fatturaRepo;

	@Autowired
	FatturaRepartoService fatturaRepartoService;

	@Autowired
	AziendaService aziendaService;

	public Fattura get(String id) {
		Optional<Fattura> fatturaOpt = fatturaRepo.findById(id);

		if (fatturaOpt.isPresent()) {
			return fatturaOpt.get();
		}

		return null;
	}

	public Fattura save(Fattura f) {
		if (f.getReparti() != null) {
			for (FatturaReparto ftReparto : f.getReparti()) {
				fatturaRepartoService.save(ftReparto);
			}
		}

		return fatturaRepo.save(f);
	}

	public List<Fattura> getAllByCendente(String idAzienda) {
		Azienda azienda = aziendaService.get(idAzienda);

		if (azienda == null) {
			return null;
		} else {
			return fatturaRepo.findAllByCedenteOrderByDataAsc(azienda);
		}

	}

	public List<Fattura> getAllByCedenteByData(String idAzienda, String year, String month) {
		Azienda azienda = aziendaService.get(idAzienda);

		if (azienda == null) {
			return null;
		} else {
			return fatturaRepo.findAllByCedenteByYearByMonth(azienda, year, month);
		}
	}

	public List<Fattura> getAllByCommittenteByData(String idAzienda, String year, String month) {
		Azienda azienda = aziendaService.get(idAzienda);

		if (azienda == null) {
			return null;
		} else {
			return fatturaRepo.findAllByCommittenteByYearByMonth(azienda, year, month);
		}
	}

	public List<Fattura> getAllByCommittente(String idAzienda) {
		Azienda azienda = aziendaService.get(idAzienda);

		if (azienda == null) {
			return List.of();
		} else {
			return fatturaRepo.findAllByCommittenteOrderByDataAsc(azienda);
		}

	}

	public Fattura update(String id, Fattura newFattura) {
		Optional<Fattura> fatturaOpt = fatturaRepo.findById(id);

		if (fatturaOpt.isPresent()) {
			Fattura oldFattura = fatturaOpt.get();
			List<FatturaReparto> reparti = oldFattura.getReparti();

			oldFattura.setTipoDocumento(newFattura.getTipoDocumento());
			oldFattura.setCedente(newFattura.getCedente());
			oldFattura.setCommittente(newFattura.getCommittente());
			oldFattura.setData(newFattura.getData());
			oldFattura.setNumero(newFattura.getNumero());
			oldFattura.setTotale(newFattura.getTotale());

			// Salva i nuovi reparti
			for (FatturaReparto reparto : newFattura.getReparti()) {
				if (reparto.getId() == null) {
					fatturaRepartoService.save(reparto);
				}
			}

			oldFattura.setReparti(newFattura.getReparti());

			Fattura fattura = fatturaRepo.save(oldFattura);

			// Elimina i vecchi reparti
			for (FatturaReparto reparto : reparti) {
				if (!newFattura.getReparti().contains(reparto)) {
					fatturaRepartoService.deleteById(reparto.getId());
				}
			}

			return fattura;
		}

		return null;
	}

	public void deleteById(String id) {
		Fattura fattura = get(id);

		if (fattura != null) {
			fattura.setCedente(null);
			fattura.setCommittente(null);

			Fattura tmpFattura = update(id, fattura);
			fatturaRepo.deleteById(tmpFattura.getId());
		}
	}
}
