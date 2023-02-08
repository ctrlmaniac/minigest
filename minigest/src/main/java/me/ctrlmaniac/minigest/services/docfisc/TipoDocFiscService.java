package me.ctrlmaniac.minigest.services.docfisc;

import me.ctrlmaniac.minigest.entities.docfisc.TipoDocFisc;
import me.ctrlmaniac.minigest.repositories.docfisc.TipoDocFiscRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.List;

@Service
public class TipoDocFiscService {

	@Autowired
	private TipoDocFiscRepo repo;

	public TipoDocFisc findByCodice(String codice) {
		Optional<TipoDocFisc> opt = repo.findByCodice(codice);

		if (opt.isPresent()) {
			return opt.get();
		}

		return null;
	}

	public List<TipoDocFisc> findAll() {
		return repo.findAll();
	}

	public TipoDocFisc save(TipoDocFisc tipo) {
		return repo.save(tipo);
	}
}