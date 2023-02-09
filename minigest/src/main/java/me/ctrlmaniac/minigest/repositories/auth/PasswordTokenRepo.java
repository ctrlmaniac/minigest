package me.ctrlmaniac.minigest.repositories.auth;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import me.ctrlmaniac.minigest.entities.auth.PasswordToken;

public interface PasswordTokenRepo extends JpaRepository<PasswordToken, String> {
	Optional<PasswordToken> findByToken(String token);
}
