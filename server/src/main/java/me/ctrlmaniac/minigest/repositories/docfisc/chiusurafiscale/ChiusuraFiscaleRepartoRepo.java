package me.ctrlmaniac.minigest.repositories.docfisc.chiusurafiscale;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import me.ctrlmaniac.minigest.entitities.docfisc.chiusurafiscale.ChiusuraFiscaleReparto;

public interface ChiusuraFiscaleRepartoRepo extends JpaRepository<ChiusuraFiscaleReparto, String> {

	@Modifying
	@Query("DELETE FROM ChiusuraFiscaleReparto c WHERE c.id=:id")
	void deleteById(@Param("id") String id);
}
