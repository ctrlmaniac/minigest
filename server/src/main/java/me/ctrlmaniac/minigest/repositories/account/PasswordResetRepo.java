package me.ctrlmaniac.minigest.repositories.account;

import org.springframework.data.jpa.repository.JpaRepository;

import me.ctrlmaniac.minigest.entitities.account.PasswordReset;

public interface PasswordResetRepo extends JpaRepository<PasswordReset, String> {

}
