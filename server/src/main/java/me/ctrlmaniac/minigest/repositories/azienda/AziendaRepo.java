package me.ctrlmaniac.minigest.repositories.azienda;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import me.ctrlmaniac.minigest.entitities.azienda.Azienda;

public interface AziendaRepo extends JpaRepository<Azienda, String> {
	List<Azienda> findAllByOrderByDenominazioneAsc();

	boolean existsByIdFiscaleIVAPaeseAndIdFiscaleIVACodice(String paese, String codice);
}
