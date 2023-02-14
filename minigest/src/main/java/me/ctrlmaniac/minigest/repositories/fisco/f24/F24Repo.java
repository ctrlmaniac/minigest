package me.ctrlmaniac.minigest.repositories.fisco.f24;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import me.ctrlmaniac.minigest.entities.fisco.f24.F24;
import me.ctrlmaniac.minigest.entities.account.Account;

public interface F24Repo extends JpaRepository<F24, String> {

	public List<F24> findAllByUtente(Account utente);

	@Query("SELECT f from F24 f WHERE f.utente=:utente AND YEAR(f.dataScadenza)=:anno AND MONTH(f.dataScadenza)=:mese ORDER BY f.dataScadenza")
	public List<F24> findAllByUtenteAndByDataScadenza(@Param("utente") Account utente, @Param("anno") String anno,
			@Param("mese") String mese);
}
