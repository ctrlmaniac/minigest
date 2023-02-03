package me.ctrlmaniac.minigest.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import me.ctrlmaniac.minigest.entitities.Negozio;
import me.ctrlmaniac.minigest.entitities.azienda.Azienda;

public interface NegozioRepo extends JpaRepository<Negozio, String> {
	List<Negozio> findAllByAzienda(Azienda azienda);
}
