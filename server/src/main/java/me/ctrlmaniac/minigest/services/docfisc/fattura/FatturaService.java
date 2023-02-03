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
import me.ctrlmaniac.minigest.dto.FatturaDTO;

@Service
public class FatturaService {

	@Autowired
	private AziendaService aziendaService;

	@Autowired
	private FatturaRepo fatturaRepo;

	@Autowired
	private FatturaRepartoService fatturaRepartoService;

	@Autowired
	private FatturaScadenzaService fatturaScadenzaService;

	@Autowired
	private FatturaPagamentoService fatturaPagamentoService;

	public Fattura get(String id) {
		Optional<Fattura> fatturaOpt = fatturaRepo.findById(id);

		if (fatturaOpt.isPresent()) {
			return fatturaOpt.get();
		}

		return null;
	}

	public Fattura save(FatturaDTO f) {
		Fattura fattura = new Fattura();

		fattura.setCedente(f.getCedente());
		fattura.setTipoDocumento(f.getTipoDocumento());
		fattura.setCedente(f.getCedente());
		fattura.setCommittente(f.getCommittente());
		fattura.setData(f.getData());
		fattura.setNumero(f.getNumero());
		fattura.setTotale(f.getTotale());

		Fattura saved = fatturaRepo.save(fattura);

		if (f.getReparti() != null) {
			for (FatturaReparto reparto : f.getReparti()) {
				reparto.setFattura(saved);
				fatturaRepartoService.save(reparto);
			}
		}

		if (f.getScadenze() != null) {
			for (FatturaScadenza scadenza : f.getScadenze()) {
				scadenza.setFattura(saved);
				fatturaScadenzaService.save(scadenza);
			}
		}

		if (f.getPagamenti() != null) {
			for (FatturaPagamento pagamento : f.getPagamenti()) {
				pagamento.setFattura(saved);
				fatturaPagamentoService.save(pagamento);
			}
		}

		return fattura;
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

			// Salva i nuovi reparti
			for (FatturaReparto reparto : newFattura.getReparti()) {
				if (reparto.getId() == null) {
					reparto.setFattura(oldFattura);
					fatturaRepartoService.save(reparto);
				}
			}

			// Salva le nuove scadenze
			for (FatturaScadenza scadenza : newFattura.getScadenze()) {
				if (scadenza.getId() == null) {
					scadenza.setFattura(oldFattura);
					fatturaScadenzaService.save(scadenza);
				}
			}

			// Salva i nuovi pagamenti
			for (FatturaPagamento pagamento : newFattura.getPagamenti()) {
				if (pagamento.getId() == null) {
					pagamento.setFattura(oldFattura);
					fatturaPagamentoService.save(pagamento);
				}
			}

			oldFattura.setReparti(newFattura.getReparti());
			oldFattura.setScadenze(newFattura.getScadenze());
			oldFattura.setPagamenti(newFattura.getPagamenti());

			return fatturaRepo.save(oldFattura);

		}

		return null;
	}

	public void deleteById(String id) {
		Fattura fattura = get(id);

		if (fattura != null) {
			fatturaRepo.deleteById(fattura.getId());

			for (FatturaReparto reparto : fattura.getReparti()) {
				fatturaRepartoService.deleteById(reparto.getId());
			}

			for (FatturaScadenza scadenza : fattura.getScadenze()) {
				fatturaScadenzaService.deleteById(scadenza.getId());
			}

			for (FatturaPagamento pagamento : fattura.getPagamenti()) {
				fatturaPagamentoService.deleteById(pagamento.getId());
			}
		}
	}
}
