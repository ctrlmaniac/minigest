package me.ctrlmaniac.minigest.services.docfisc;

import me.ctrlmaniac.minigest.entities.docfisc.TipoDocFisc;
import me.ctrlmaniac.minigest.repositories.docfisc.TipoDocFiscRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lombok.extern.slf4j.Slf4j;

import java.util.Optional;
import java.util.List;

@Service
@Slf4j
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

	public TipoDocFisc findById(String id) {
		Optional<TipoDocFisc> opt = repo.findById(id);

		if (opt.isPresent()) {
			return opt.get();
		}

		return null;
	}

	public List<TipoDocFisc> findAll() {
		return repo.findAllByOrderByCodiceAsc();
	}

	public TipoDocFisc save(TipoDocFisc tipo) {
		return repo.save(tipo);
	}

	public TipoDocFisc update(String id, TipoDocFisc payload) {
		Optional<TipoDocFisc> opt = repo.findById(id);

		if (opt.isPresent()) {
			TipoDocFisc tdf = opt.get();

			tdf.setCodice(payload.getCodice());
			tdf.setDescrizione(payload.getDescrizione());

			return repo.save(tdf);
		}

		return null;
	}

	public void delete(TipoDocFisc tdf) {
		try {
			repo.delete(tdf);
		} catch (Exception e) {
			log.error(e.getMessage());
		}
	}
}
