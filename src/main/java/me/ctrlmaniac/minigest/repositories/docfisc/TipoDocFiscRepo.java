package me.ctrlmaniac.minigest.repositories.docfisc;

import org.springframework.data.jpa.repository.JpaRepository;

import me.ctrlmaniac.minigest.entitities.docfisc.TipoDocFisc;

public interface TipoDocFiscRepo extends JpaRepository<TipoDocFisc, String> {

}
