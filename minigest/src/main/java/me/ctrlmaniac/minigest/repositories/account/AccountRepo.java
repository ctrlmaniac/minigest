package me.ctrlmaniac.minigest.repositories.account;

import me.ctrlmaniac.minigest.entities.account.Account;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AccountRepo extends JpaRepository<Account, String> {
	Optional<Account> findByEmail(String email);
}
