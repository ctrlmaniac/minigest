package me.ctrlmaniac.minigest.repositories.account;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import me.ctrlmaniac.minigest.entitities.account.AccountRole;
import me.ctrlmaniac.minigest.enums.AccountRoleEnum;

public interface AccountRoleRepo extends JpaRepository<AccountRole, String> {
	Optional<AccountRole> findByName(AccountRoleEnum name);
}
