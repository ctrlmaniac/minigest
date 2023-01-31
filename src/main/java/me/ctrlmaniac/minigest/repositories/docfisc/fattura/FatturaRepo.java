package me.ctrlmaniac.minigest.repositories.docfisc.fattura;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import me.ctrlmaniac.minigest.entitities.azienda.Azienda;
import me.ctrlmaniac.minigest.entitities.docfisc.fattura.Fattura;

public interface FatturaRepo extends JpaRepository<Fattura, String> {

	List<Fattura> findByCedenteOrderByDataAsc(Azienda azienda);

	List<Fattura> findByCommittenteOrderByDataAsc(Azienda azienda);

}
