package me.ctrlmaniac.minigest.repositories.azienda;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import me.ctrlmaniac.minigest.entitities.azienda.Azienda;

public interface AziendaRepo extends JpaRepository<Azienda, String> {
	List<Azienda> findAllByOrderByDenominazioneAsc();

	boolean existsByIdFiscaleIVAPaeseAndIdFiscaleIVACodice(String paese, String codice);

	@Query("SELECT a FROM Azienda a WHERE a.denominazione LIKE %:denominazione%")
	List<Azienda> searchByDenominazione(@Param("denominazione") String denominazione);
}
