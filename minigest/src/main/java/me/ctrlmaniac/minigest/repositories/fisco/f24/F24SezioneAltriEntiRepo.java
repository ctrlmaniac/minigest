package me.ctrlmaniac.minigest.repositories.fisco.f24;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import me.ctrlmaniac.minigest.entities.fisco.f24.F24SezioneAltriEnti;

public interface F24SezioneAltriEntiRepo extends JpaRepository<F24SezioneAltriEnti, String> {

	@Modifying
	@Query("DELETE FROM F24SezioneAltriEnti f WHERE f.id=:id")
	void deleteById(@Param("id") String id);

}
