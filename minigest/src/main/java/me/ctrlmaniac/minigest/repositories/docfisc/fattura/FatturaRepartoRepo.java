package me.ctrlmaniac.minigest.repositories.docfisc.fattura;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import me.ctrlmaniac.minigest.entities.docfisc.fattura.Fattura;
import me.ctrlmaniac.minigest.entities.docfisc.fattura.FatturaReparto;

public interface FatturaRepartoRepo extends JpaRepository<FatturaReparto, String> {

	List<FatturaReparto> findAllByFattura(Fattura fattura);

	@Modifying
	@Query("DELETE FROM FatturaReparto o WHERE o.id=:id")
	void deleteById(@Param("id") String id);
}
