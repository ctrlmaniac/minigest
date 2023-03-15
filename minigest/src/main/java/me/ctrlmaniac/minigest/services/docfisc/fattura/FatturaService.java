package me.ctrlmaniac.minigest.services.docfisc.fattura;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import me.ctrlmaniac.minigest.repositories.docfisc.fattura.FatturaRepo;
import me.ctrlmaniac.minigest.entities.docfisc.fattura.Fattura;
import me.ctrlmaniac.minigest.entities.docfisc.fattura.FatturaPagamento;
import me.ctrlmaniac.minigest.entities.docfisc.fattura.FatturaReparto;
import me.ctrlmaniac.minigest.entities.docfisc.fattura.FatturaScadenza;
import me.ctrlmaniac.minigest.entities.azienda.Azienda;

import java.util.Optional;
import java.util.List;

@Service
public class FatturaService {

	@Autowired
	private FatturaRepo repo;

	@Autowired
	private FatturaScadenzaService scadenzaService;

	@Autowired
	private FatturaPagamentoService pagamentoService;

	@Autowired
	private FatturaRepartoService repartoService;

	public Fattura findById(String id) {
		Optional<Fattura> opt = repo.findById(id);

		if (opt.isPresent()) {
			return opt.get();
		}

		return null;
	}

	public List<Fattura> findAll() {
		return repo.findAll();
	}

	public List<Fattura> findTop10ByCommittente(Azienda committente) {
		return repo.findTop10ByCommittente(committente);
	}

	public List<Fattura> findTop10ByCedente(Azienda cedente) {
		return repo.findTop10ByCedente(cedente);
	}

	public List<Fattura> findTop10ByCommittenteOrderByDataAsc(Azienda committente) {
		return repo.findTop10ByCommittenteOrderByDataAsc(committente);
	}

	public List<Fattura> findAllByCedente(Azienda cedente) {
		return repo.findAllByCedenteOrderByDataAsc(cedente);
	}

	public List<Fattura> findAllByCedenteByData(Azienda cedente, String year, String month) {
		return repo.findAllByCedenteByYearByMonth(cedente, year, month);
	}

	public List<Fattura> findAllByCedenteByDataSDI(Azienda azienda, String year, String month) {
		return repo.findAllByCedenteByDataSdiAsc(azienda, year, month);
	}

	public List<Fattura> findAllByCommittente(Azienda azienda) {
		return repo.findAllByCommittenteOrderByDataAsc(azienda);
	}

	public List<Fattura> findAllByCommittenteByData(Azienda committente, String year, String month) {
		return repo.findAllByCommittenteByYearByMonth(committente, year, month);
	}

	public List<Fattura> findAllByCommittenteByDataSDI(Azienda committente, String year, String month) {
		return repo.findAllByCommittenteByDataSdiAsc(committente, year, month);
	}

	public void delete(Fattura fattura) {
		for (FatturaReparto reparto : fattura.getReparti()) {
			repartoService.delete(reparto);
		}

		for (FatturaScadenza scadenza : fattura.getScadenze()) {
			scadenzaService.delete(scadenza);
		}

		for (FatturaPagamento pagamento : fattura.getPagamenti()) {
			pagamentoService.delete(pagamento);
		}

		repo.delete(fattura);
	}

	public void deleteAllByCedente(Azienda cedente) {
		for (Fattura fattura : repo.findAllByCedente(cedente)) {
			for (FatturaReparto reparto : fattura.getReparti()) {
				repartoService.delete(reparto);
			}

			for (FatturaScadenza scadenza : fattura.getScadenze()) {
				scadenzaService.delete(scadenza);
			}

			for (FatturaPagamento pagamento : fattura.getPagamenti()) {
				pagamentoService.delete(pagamento);
			}

			repo.delete(fattura);
		}
	}

	public void deleteAllByCommittente(Azienda committente) {
		for (Fattura fattura : repo.findAllByCommittente(committente)) {
			for (FatturaReparto reparto : fattura.getReparti()) {
				repartoService.delete(reparto);
			}

			for (FatturaScadenza scadenza : fattura.getScadenze()) {
				scadenzaService.delete(scadenza);
			}

			for (FatturaPagamento pagamento : fattura.getPagamenti()) {
				pagamentoService.delete(pagamento);
			}

			repo.delete(fattura);
		}
	}

	public Fattura save(Fattura payload) {
		Fattura fattura = repo.save(payload);

		for (FatturaReparto reparto : payload.getReparti()) {
			reparto.setFattura(fattura);
			repartoService.save(reparto);
		}

		for (FatturaScadenza scadenza : payload.getScadenze()) {
			scadenza.setFattura(fattura);
			scadenzaService.save(scadenza);
		}

		for (FatturaPagamento pagamento : payload.getPagamenti()) {
			pagamento.setFattura(fattura);
			pagamentoService.save(pagamento);
		}

		return fattura;
	}

	public Fattura update(String id, Fattura payload) {
		Optional<Fattura> opt = repo.findById(id);

		if (opt.isPresent()) {
			Fattura fattura = opt.get();

			fattura.setCedente(payload.getCedente());
			fattura.setCommittente(payload.getCommittente());
			fattura.setData(payload.getData());
			fattura.setDataSDI(payload.getDataSDI());
			fattura.setTipoDocumento(payload.getTipoDocumento());
			fattura.setTotale(payload.getTotale());

			// REPARTI
			for (FatturaReparto reparto : fattura.getReparti()) {
				if (!payload.getReparti().contains(reparto)) {
					repartoService.deleteById(reparto.getId());
				}
			}

			for (FatturaReparto reparto : payload.getReparti()) {
				if (reparto.getId() == null) {
					reparto.setFattura(fattura);
					repartoService.save(reparto);
				}
			}

			// Scadenze
			for (FatturaScadenza scadenza : fattura.getScadenze()) {
				if (!payload.getScadenze().contains(scadenza)) {
					scadenzaService.deleteById(scadenza.getId());
				}
			}

			for (FatturaScadenza scadenza : payload.getScadenze()) {
				if (scadenza.getId() == null) {
					scadenza.setFattura(fattura);
					scadenzaService.save(scadenza);
				}
			}

			// Pagamenti
			for (FatturaPagamento pagamento : fattura.getPagamenti()) {
				if (!payload.getPagamenti().contains(pagamento)) {
					pagamentoService.deleteById(pagamento.getId());
				}
			}

			for (FatturaPagamento pagamento : payload.getPagamenti()) {
				if (pagamento.getId() == null) {
					pagamento.setFattura(fattura);
					pagamentoService.save(pagamento);
				}
			}

			// Salva tutto
			fattura.setReparti(payload.getReparti());
			fattura.setScadenze(payload.getScadenze());
			fattura.setPagamenti(payload.getPagamenti());

			return repo.save(fattura);
		}

		return null;
	}
}
