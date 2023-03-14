package me.ctrlmaniac.minigest.repositories.account;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import me.ctrlmaniac.minigest.entities.account.Account;

public interface AccountRepo extends JpaRepository<Account, String> {
	Optional<Account> findByEmail(String email);

	boolean existsByEmail(String email);

	List<Account> findByEmailContainingIgnoreCase(String email);
}
