package me.ctrlmaniac.minigest.repositories.docfisc.fattura;

import org.springframework.data.jpa.repository.JpaRepository;

import me.ctrlmaniac.minigest.entitities.docfisc.fattura.FatturaPagamento;

public interface FatturaPagamentoRepo extends JpaRepository<FatturaPagamento, String> {

}
