package me.ctrlmaniac.minigest.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import me.ctrlmaniac.minigest.entitities.Negozio;

public interface NegozioRepo extends JpaRepository<Negozio, String> {

}
