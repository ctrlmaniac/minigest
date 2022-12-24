package me.ctrlmaniac.minigest.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import me.ctrlmaniac.minigest.entitities.Account;

public interface AccountRepo extends JpaRepository<Account, String> {

    List<Account> findByEmail(String email);

}
