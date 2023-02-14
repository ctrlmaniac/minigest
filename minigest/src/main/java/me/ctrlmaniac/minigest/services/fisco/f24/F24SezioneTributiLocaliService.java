package me.ctrlmaniac.minigest.services.fisco.f24;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import me.ctrlmaniac.minigest.entities.fisco.f24.F24SezioneTributiLocali;
import me.ctrlmaniac.minigest.repositories.fisco.f24.F24SezioneTributiLocaliRepo;

@Service
public class F24SezioneTributiLocaliService {

	@Autowired
	F24SezioneTributiLocaliRepo repo;

	public F24SezioneTributiLocali save(F24SezioneTributiLocali object) {
		return repo.save(object);
	}
}
