package me.ctrlmaniac.minigest.repositories.docfisc.fattura;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import me.ctrlmaniac.minigest.entitities.docfisc.fattura.FatturaReparto;
import me.ctrlmaniac.minigest.entitities.docfisc.fattura.Fattura;

public interface FatturaRepartoRepo extends JpaRepository<FatturaReparto, String> {
	List<FatturaReparto> findAllByFattura(Fattura fattura);
}
