package me.ctrlmaniac.minigest.repositories.account;

import org.springframework.data.jpa.repository.JpaRepository;

import me.ctrlmaniac.minigest.entitities.account.Account;

public interface AccountRepo extends JpaRepository<Account, String> {

	Account findByEmail(String email);

}
