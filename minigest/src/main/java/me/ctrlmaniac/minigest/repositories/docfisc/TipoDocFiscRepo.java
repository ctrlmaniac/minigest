package me.ctrlmaniac.minigest.repositories.docfisc;

import me.ctrlmaniac.minigest.entities.docfisc.TipoDocFisc;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

public interface TipoDocFiscRepo extends JpaRepository<TipoDocFisc, String> {
	Optional<TipoDocFisc> findByCodice(String codice);
}
