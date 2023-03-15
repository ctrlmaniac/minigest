package me.ctrlmaniac.minigest.repositories.docfisc.fattura;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import me.ctrlmaniac.minigest.entities.docfisc.fattura.FatturaPagamento;
import me.ctrlmaniac.minigest.entities.docfisc.fattura.Fattura;
import org.springframework.data.repository.query.Param;

public interface FatturaPagamentoRepo extends JpaRepository<FatturaPagamento, String> {

	List<FatturaPagamento> findAllByFattura(Fattura fattura);

	@Modifying
	@Query("DELETE FROM FatturaPagamento o WHERE o.id=:id")
	void deleteById(@Param("id") String id);
}
