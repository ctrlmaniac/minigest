package me.ctrlmaniac.minigest.repositories.docfisc.fattura;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import me.ctrlmaniac.minigest.entitities.azienda.Azienda;
import me.ctrlmaniac.minigest.entitities.docfisc.fattura.Fattura;

public interface FatturaRepo extends JpaRepository<Fattura, String> {

	List<Fattura> findAllByCedenteOrderByDataAsc(Azienda azienda);

	List<Fattura> findAllByCommittenteOrderByDataAsc(Azienda azienda);

	@Query("SELECT f FROM Fattura f WHERE f.cedente=:azienda AND YEAR(f.data)=:year AND MONTH(f.data)=:month ORDER BY DATA ASC")
	List<Fattura> findAllByCedenteByData(@Param("azienda") Azienda azienda, @Param("year") String year,
			@Param("month") String month);

	@Query("SELECT f FROM Fattura f WHERE f.committente=:azienda AND YEAR(f.data)=:year AND MONTH(f.data)=:month ORDER BY DATA ASC")
	List<Fattura> findAllByCommittenteByData(@Param("azienda") Azienda azienda, @Param("year") String year,
			@Param("month") String month);

}
