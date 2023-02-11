package me.ctrlmaniac.minigest.services.account;

import me.ctrlmaniac.minigest.entities.account.AccountRuolo;
import me.ctrlmaniac.minigest.repositories.account.AccountRuoloRepo;
import me.ctrlmaniac.minigest.enums.RuoloEnum;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.List;

@Service
public class AccountRuoloService {

	@Autowired
	private AccountRuoloRepo ruoloRepo;

	public AccountRuolo save(AccountRuolo ruolo) {
		return ruoloRepo.save(ruolo);
	}

	public List<AccountRuolo> findAll() {
		return ruoloRepo.findAll();
	}

	public AccountRuolo findByNome(RuoloEnum ruolo) {
		Optional<AccountRuolo> opt = ruoloRepo.findByAuthority(ruolo);

		if (opt.isPresent()) {
			return opt.get();
		}

		return null;
	}
}
