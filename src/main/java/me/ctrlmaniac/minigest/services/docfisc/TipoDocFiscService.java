package me.ctrlmaniac.minigest.services.docfisc;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import me.ctrlmaniac.minigest.entitities.docfisc.TipoDocFisc;
import me.ctrlmaniac.minigest.repositories.docfisc.TipoDocFiscRepo;

@Service
public class TipoDocFiscService {

	@Autowired
	TipoDocFiscRepo tdfRepo;

	public TipoDocFisc get(String id) {
		Optional<TipoDocFisc> tdfOpt = tdfRepo.findById(id);

		if (tdfOpt.isPresent()) {
			return tdfOpt.get();
		}

		return null;
	}

	public TipoDocFisc save(TipoDocFisc cf) {
		return tdfRepo.save(cf);
	}

	public List<TipoDocFisc> getAll() {
		return tdfRepo.findAll();
	}

	public void deleteById(String id) {
		tdfRepo.deleteById(id);
	}

	public TipoDocFisc update(String id, TipoDocFisc newTDF) {
		Optional<TipoDocFisc> tdfOpt = tdfRepo.findById(id);

		if (tdfOpt.isPresent()) {
			TipoDocFisc oldTDF = tdfOpt.get();

			oldTDF.setCodice(newTDF.getCodice());
			oldTDF.setDescrizione(newTDF.getDescrizione());

			return tdfRepo.save(oldTDF);
		}

		return null;
	}

}
