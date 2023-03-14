package me.ctrlmaniac.minigest.repos.account;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import me.ctrlmaniac.minigest.entities.account.AccountRuolo;
import me.ctrlmaniac.minigest.enums.RuoloEnum;

public interface AccountRuoloRepo extends JpaRepository<AccountRuolo, String> {
	Optional<AccountRuolo> findByAuthority(RuoloEnum nome);
}
