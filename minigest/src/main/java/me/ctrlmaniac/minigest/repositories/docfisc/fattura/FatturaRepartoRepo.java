package me.ctrlmaniac.minigest.repositories.docfisc.fattura;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import me.ctrlmaniac.minigest.entities.docfisc.fattura.Fattura;
import me.ctrlmaniac.minigest.entities.docfisc.fattura.FatturaReparto;

public interface FatturaRepartoRepo extends JpaRepository<FatturaReparto, String> {

	List<FatturaReparto> findAllByFattura(Fattura fattura);
}
