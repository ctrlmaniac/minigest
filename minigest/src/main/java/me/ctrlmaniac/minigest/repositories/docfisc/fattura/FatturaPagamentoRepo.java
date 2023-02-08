package me.ctrlmaniac.minigest.repositories.docfisc.fattura;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import me.ctrlmaniac.minigest.entities.docfisc.fattura.FatturaPagamento;
import me.ctrlmaniac.minigest.entities.docfisc.fattura.Fattura;

public interface FatturaPagamentoRepo extends JpaRepository<FatturaPagamento, String> {

	List<FatturaPagamento> findAllByFattura(Fattura fattura);
}
