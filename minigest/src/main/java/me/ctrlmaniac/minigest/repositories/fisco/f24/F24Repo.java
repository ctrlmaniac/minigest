package me.ctrlmaniac.minigest.repositories.fisco.f24;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import me.ctrlmaniac.minigest.entities.fisco.f24.F24;
import me.ctrlmaniac.minigest.entities.account.Account;

public interface F24Repo extends JpaRepository<F24, String> {

	public List<F24> findAllByUtente(Account utente);
}
