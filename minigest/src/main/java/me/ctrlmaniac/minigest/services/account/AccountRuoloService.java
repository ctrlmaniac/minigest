package me.ctrlmaniac.minigest.services.account;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import me.ctrlmaniac.minigest.entities.account.AccountRuolo;
import me.ctrlmaniac.minigest.enums.RuoloEnum;
import me.ctrlmaniac.minigest.repositories.account.AccountRuoloRepo;

@Service
public class AccountRuoloService {

	@Autowired
	private AccountRuoloRepo repo;

	public AccountRuolo save(AccountRuolo ruolo) {
		return repo.save(ruolo);
	}

	public List<AccountRuolo> findAll() {
		return repo.findAll();
	}

	public AccountRuolo findByNome(RuoloEnum ruolo) {
		Optional<AccountRuolo> opt = repo.findByAuthority(ruolo);

		if (opt.isPresent()) {
			return opt.get();
		}

		return null;
	}
}
