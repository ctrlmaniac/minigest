package me.ctrlmaniac.minigest.repositories.docfisc;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import me.ctrlmaniac.minigest.entitities.docfisc.TipoDocFisc;

public interface TipoDocFiscRepo extends JpaRepository<TipoDocFisc, String> {
	List<TipoDocFisc> findAllByOrderByCodiceAsc();

	TipoDocFisc findByCodice(String codice);
}
