package me.ctrlmaniac.minigest.repositories.negozio;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import me.ctrlmaniac.minigest.entities.azienda.Azienda;
import me.ctrlmaniac.minigest.entities.negozio.Negozio;

public interface NegozioRepo extends JpaRepository<Negozio, String> {
	List<Negozio> findAllByAzienda(Azienda azienda);
}
