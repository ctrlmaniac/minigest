package me.ctrlmaniac.minigest.services.docfisc.fattura;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import me.ctrlmaniac.minigest.entitities.azienda.Azienda;
import me.ctrlmaniac.minigest.entitities.docfisc.fattura.Fattura;
import me.ctrlmaniac.minigest.entitities.docfisc.fattura.FatturaPagamento;
import me.ctrlmaniac.minigest.entitities.docfisc.fattura.FatturaReparto;
import me.ctrlmaniac.minigest.entitities.docfisc.fattura.FatturaScadenza;
import me.ctrlmaniac.minigest.repositories.docfisc.fattura.FatturaRepo;
import me.ctrlmaniac.minigest.services.azienda.AziendaService;

@Service
public class FatturaService {

	@Autowired
	AziendaService aziendaService;

	@Autowired
	FatturaRepo fatturaRepo;

	@Autowired
	FatturaRepartoService fatturaRepartoService;

	@Autowired
	FatturaScadenzaService fatturaScadenzaService;

	@Autowired
	FatturaPagamentoService fatturaPagamentoService;

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

		if (f.getScadenze() != null) {
			for (FatturaScadenza scadenza : f.getScadenze()) {
				fatturaScadenzaService.save(scadenza);
			}
		}

		if (f.getPagamenti() != null) {
			for (FatturaPagamento pagamento : f.getPagamenti()) {
				fatturaPagamentoService.save(pagamento);
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

	public List<Fattura> getAllByCommittente(String idAzienda) {
		Azienda azienda = aziendaService.get(idAzienda);

		if (azienda == null) {
			return List.of();
		} else {
			return fatturaRepo.findAllByCommittenteOrderByDataAsc(azienda);
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

	public List<Fattura> getAllByCedenteByDataSDI(String idAzienda, String year, String month) {
		Azienda azienda = aziendaService.get(idAzienda);

		if (azienda == null) {
			return null;
		} else {
			return fatturaRepo.findAllByCedenteByDataSdiAsc(azienda, year, month);
		}
	}

	public List<Fattura> getAllByCommittenteByDataSDI(String idAzienda, String year, String month) {
		Azienda azienda = aziendaService.get(idAzienda);

		if (azienda == null) {
			return null;
		} else {
			return fatturaRepo.findAllByCommittenteByDataSdiAsc(azienda, year, month);
		}
	}

	public Fattura update(String id, Fattura newFattura) {
		Optional<Fattura> fatturaOpt = fatturaRepo.findById(id);

		if (fatturaOpt.isPresent()) {
			Fattura oldFattura = fatturaOpt.get();

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

			// Salva le nuove scadenze
			for (FatturaScadenza scadenza : newFattura.getScadenze()) {
				if (scadenza.getId() == null) {
					fatturaScadenzaService.save(scadenza);
				}
			}

			// Salva i nuovi pagamenti
			for (FatturaPagamento pagamento : newFattura.getPagamenti()) {
				if (pagamento.getId() == null) {
					fatturaPagamentoService.save(pagamento);
				}
			}

			oldFattura.setReparti(newFattura.getReparti());
			oldFattura.setScadenze(newFattura.getScadenze());
			oldFattura.setPagamenti(newFattura.getPagamenti());

			Fattura fattura = fatturaRepo.save(oldFattura);

			// Elimina i vecchi reparti
			for (FatturaReparto reparto : oldFattura.getReparti()) {
				if (!newFattura.getReparti().contains(reparto)) {
					fatturaRepartoService.deleteById(reparto.getId());
				}
			}

			// Elimina le vecchie scadenze
			for (FatturaScadenza scadenza : oldFattura.getScadenze()) {
				if (!newFattura.getScadenze().contains(scadenza)) {
					fatturaScadenzaService.deleteById(scadenza.getId());
				}
			}

			// Elimina i vecchi pagamenti
			for (FatturaPagamento pagamento : oldFattura.getPagamenti()) {
				if (!newFattura.getPagamenti().contains(pagamento)) {
					fatturaPagamentoService.deleteById(pagamento.getId());
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

			for (FatturaReparto reparto : fattura.getReparti()) {
				fatturaRepartoService.deleteById(reparto.getId());
			}
		}
	}
}
