package me.ctrlmaniac.minigest.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import me.ctrlmaniac.minigest.entitities.Account;

public interface AccountRepo extends JpaRepository<Account, String> {

	Account findByEmail(String email);

}
