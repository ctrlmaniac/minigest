package me.ctrlmaniac.minigest.repositories.docfisc.fattura;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import me.ctrlmaniac.minigest.entities.docfisc.fattura.Fattura;
import me.ctrlmaniac.minigest.entities.docfisc.fattura.FatturaScadenza;

public interface FatturaScadenzaRepo extends JpaRepository<FatturaScadenza, String> {

	@Query("SELECT s FROM FatturaScadenza s ORDER BY s.data ASC, s.importo ASC")
	List<FatturaScadenza> findAllOrderByDataAsc();

	List<FatturaScadenza> findAllByFattura(Fattura fattura);

	@Modifying
	@Query("DELETE FROM FatturaScadenza o WHERE o.id=:id")
	void deleteById(@Param("id") String id);

}
