package me.ctrlmaniac.minigest.repositories.account;

import me.ctrlmaniac.minigest.entities.account.AccountRuolo;
import me.ctrlmaniac.minigest.enums.RuoloEnum;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

public interface AccountRuoloRepo extends JpaRepository<AccountRuolo, String> {
	Optional<AccountRuolo> findByNome(RuoloEnum nome);
}
