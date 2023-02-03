package me.ctrlmaniac.minigest.repositories.docfisc.fattura;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import me.ctrlmaniac.minigest.entitities.docfisc.fattura.FatturaReparto;
import me.ctrlmaniac.minigest.entitities.docfisc.fattura.Fattura;

public interface FatturaRepartoRepo extends JpaRepository<FatturaReparto, String> {

	List<FatturaReparto> findAllByFattura(Fattura fattura);

	@Modifying
	@Query("DELETE FROM FatturaReparto r WHERE r.id=:id")
	void deleteById(@Param("id") String id);
}
