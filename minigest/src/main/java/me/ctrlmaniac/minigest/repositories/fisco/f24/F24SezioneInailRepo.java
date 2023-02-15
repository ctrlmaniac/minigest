package me.ctrlmaniac.minigest.repositories.fisco.f24;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import me.ctrlmaniac.minigest.entities.fisco.f24.F24SezioneInail;

public interface F24SezioneInailRepo extends JpaRepository<F24SezioneInail, String> {

	@Modifying
	@Query("DELETE FROM F24SezioneInail f WHERE f.id=:id")
	void deleteById(@Param("id") String id);

}
