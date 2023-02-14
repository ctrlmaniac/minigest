package me.ctrlmaniac.minigest.services.fisco.f24;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import me.ctrlmaniac.minigest.entities.fisco.f24.F24;
import me.ctrlmaniac.minigest.entities.account.Account;
import me.ctrlmaniac.minigest.repositories.fisco.f24.F24Repo;

@Service
public class F24Service {

	@Autowired
	F24Repo repo;

	public F24 save(F24 object) {
		return repo.save(object);
	}

	public List<F24> findAll() {
		return repo.findAll();
	}

	public List<F24> findAllByUtente(Account account) {
		return repo.findAllByUtente(account);
	}
}
