package me.ctrlmaniac.minigest.repositories.docfisc.fattura;

import org.springframework.data.jpa.repository.JpaRepository;

import me.ctrlmaniac.minigest.entitities.docfisc.fattura.FatturaReparto;

public interface FatturaRepartoRepo extends JpaRepository<FatturaReparto, String> {
}
