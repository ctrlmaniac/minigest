package me.ctrlmaniac.minigest.repositories.docfisc.fattura;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import me.ctrlmaniac.minigest.entities.azienda.Azienda;
import me.ctrlmaniac.minigest.entities.docfisc.fattura.Fattura;

public interface FatturaRepo extends JpaRepository<Fattura, String> {

	List<Fattura> findAllByCedenteOrderByDataAsc(Azienda azienda);

	List<Fattura> findAllByCommittenteOrderByDataAsc(Azienda azienda);

	@Query("SELECT f FROM Fattura f WHERE f.cedente=:azienda AND YEAR(f.data)=:year AND MONTH(f.data)=:month ORDER BY f.data ASC")
	List<Fattura> findAllByCedenteByYearByMonth(@Param("azienda") Azienda azienda, @Param("year") String year,
			@Param("month") String month);

	@Query("SELECT f FROM Fattura f WHERE f.committente=:azienda AND YEAR(f.data)=:year AND MONTH(f.data)=:month ORDER BY f.data ASC")
	List<Fattura> findAllByCommittenteByYearByMonth(@Param("azienda") Azienda azienda, @Param("year") String year,
			@Param("month") String month);

	@Query("SELECT f FROM Fattura f Where f.cedente=:azienda AND YEAR(f.dataSDI)=:year AND MONTH(f.dataSDI)=:month ORDER BY f.dataSDI ASC")
	List<Fattura> findAllByCedenteByDataSdiAsc(@Param("azienda") Azienda aziednda, @Param("year") String year,
			@Param("month") String month);

	@Query("SELECT f FROM Fattura f Where f.committente=:azienda AND YEAR(f.dataSDI)=:year AND MONTH(f.dataSDI)=:month ORDER BY f.dataSDI ASC")
	List<Fattura> findAllByCommittenteByDataSdiAsc(@Param("azienda") Azienda aziednda, @Param("year") String year,
			@Param("month") String month);

}
