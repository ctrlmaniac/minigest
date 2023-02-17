package me.ctrlmaniac.minigest.repositories.azienda;

import me.ctrlmaniac.minigest.entities.azienda.Azienda;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface AziendaRepo extends JpaRepository<Azienda, String> {

	List<Azienda> findAllByOrderByDenominazioneAsc();

	@Query("SELECT a FROM Azienda a WHERE a.denominazione LIKE %:denominazione%")
	List<Azienda> searchByDenominazione(@Param("denominazione") String denominazione);

	boolean existsByIdFiscaleIVAPaeseAndIdFiscaleIVACodice(String paese, String codice);

	Optional<Azienda> findByIdFiscaleIVAPaeseAndIdFiscaleIVACodice(String paese, String codice);

	Optional<Azienda> findByIdFiscaleIVAPaeseAndIdFiscaleIVACodiceAndCodiceFiscale(String paese, String codice,
			String codiceFiscale);
}
