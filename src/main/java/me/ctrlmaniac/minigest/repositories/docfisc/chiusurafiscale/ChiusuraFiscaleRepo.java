package me.ctrlmaniac.minigest.repositories.docfisc.chiusurafiscale;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import me.ctrlmaniac.minigest.entitities.Negozio;
import me.ctrlmaniac.minigest.entitities.docfisc.chiusurafiscale.ChiusuraFiscale;

public interface ChiusuraFiscaleRepo extends JpaRepository<ChiusuraFiscale, String> {
	List<ChiusuraFiscale> findAllByNegozio(Negozio negozio);
}
