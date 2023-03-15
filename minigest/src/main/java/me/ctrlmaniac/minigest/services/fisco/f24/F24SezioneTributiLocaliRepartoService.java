package me.ctrlmaniac.minigest.services.fisco.f24;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import me.ctrlmaniac.minigest.entities.fisco.f24.F24SezioneTributiLocaliReparto;
import me.ctrlmaniac.minigest.repositories.fisco.f24.F24SezioneTributiLocaliRepartoRepo;

@Service
public class F24SezioneTributiLocaliRepartoService {

	@Autowired
	F24SezioneTributiLocaliRepartoRepo repo;

	public F24SezioneTributiLocaliReparto save(F24SezioneTributiLocaliReparto object) {
		return repo.save(object);
	}

	public void delete(F24SezioneTributiLocaliReparto object) {
		repo.delete(object);
	}

	public void deleteById(String id) {
		repo.deleteById(id);
	}
}
