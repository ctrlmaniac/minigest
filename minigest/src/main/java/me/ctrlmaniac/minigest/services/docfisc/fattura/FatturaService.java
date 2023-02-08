package me.ctrlmaniac.minigest.services.docfisc.fattura;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import me.ctrlmaniac.minigest.repositories.docfisc.fattura.FatturaRepo;
import me.ctrlmaniac.minigest.entities.docfisc.fattura.Fattura;
import me.ctrlmaniac.minigest.entities.azienda.Azienda;

import java.util.Optional;
import java.util.List;

@Service
public class FatturaService {

	@Autowired
	private FatturaRepo repo;

	public Fattura save(Fattura fattura) {
		return repo.save(fattura);
	}

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
}
