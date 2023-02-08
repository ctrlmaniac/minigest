package me.ctrlmaniac.minigest.repositories.azienda;

import me.ctrlmaniac.minigest.entities.azienda.Azienda;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AziendaRepo extends JpaRepository<Azienda, String> {
}
