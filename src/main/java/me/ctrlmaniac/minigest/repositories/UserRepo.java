package me.ctrlmaniac.minigest.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import me.ctrlmaniac.minigest.entitities.User;

public interface UserRepo extends JpaRepository<User, String> {
}
