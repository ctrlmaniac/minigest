package me.ctrlmaniac.minigest.repositories.fisco.f24;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import me.ctrlmaniac.minigest.entities.fisco.f24.F24SezioneErario;

public interface F24SezioneErarioRepo extends JpaRepository<F24SezioneErario, String> {

	@Modifying
	@Query("DELETE FROM F24SezioneErario f WHERE f.id=:id")
	void deleteById(@Param("id") String id);
}