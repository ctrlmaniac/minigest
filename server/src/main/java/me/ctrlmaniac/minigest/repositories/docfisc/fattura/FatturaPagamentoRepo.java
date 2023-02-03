package me.ctrlmaniac.minigest.repositories.docfisc.fattura;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import me.ctrlmaniac.minigest.entitities.docfisc.fattura.Fattura;
import me.ctrlmaniac.minigest.entitities.docfisc.fattura.FatturaPagamento;

public interface FatturaPagamentoRepo extends JpaRepository<FatturaPagamento, String> {

	List<FatturaPagamento> findAllByFattura(Fattura fattura);

	@Modifying
	@Query("DELETE FROM FatturaPagamento p WHERE p.id=:id")
	void deleteById(@Param("id") String id);
}
