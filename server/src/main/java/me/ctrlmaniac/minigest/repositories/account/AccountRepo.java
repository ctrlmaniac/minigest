package me.ctrlmaniac.minigest.repositories.account;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import me.ctrlmaniac.minigest.entitities.account.Account;

public interface AccountRepo extends JpaRepository<Account, String> {

	Account findByEmail(String email);

	Optional<Account> findById(String id);

	boolean existsByEmail(String email);

	@Query("SELECT a FROM Account a WHERE a.email LIKE :email%")
	List<Account> searchByEmail(@Param("email") String email);

}
