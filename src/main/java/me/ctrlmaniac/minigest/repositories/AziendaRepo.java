package me.ctrlmaniac.minigest.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import me.ctrlmaniac.minigest.entitities.Azienda;

public interface AziendaRepo extends JpaRepository<Azienda, String> {

}
