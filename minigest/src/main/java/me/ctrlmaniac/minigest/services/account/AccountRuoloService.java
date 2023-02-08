package me.ctrlmaniac.minigest.services.account;

import me.ctrlmaniac.minigest.entities.account.AccountRuolo;
import me.ctrlmaniac.minigest.enums.RuoloEnum;
import me.ctrlmaniac.minigest.repositories.account.AccountRuoloRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AccountRuoloService {

	@Autowired
	private AccountRuoloRepo ruoloRepo;

	public AccountRuolo save(AccountRuolo ruolo) {
		return ruoloRepo.save(ruolo);
	}

	public AccountRuolo findByNome(RuoloEnum ruolo) {
		Optional<AccountRuolo> opt = ruoloRepo.findByNome(ruolo);

		if (opt.isPresent()) {
			return opt.get();
		}

		return null;
	}
}
