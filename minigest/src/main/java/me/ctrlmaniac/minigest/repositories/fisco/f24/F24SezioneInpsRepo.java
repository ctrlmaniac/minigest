package me.ctrlmaniac.minigest.repositories.fisco.f24;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import me.ctrlmaniac.minigest.entities.fisco.f24.F24SezioneInps;

public interface F24SezioneInpsRepo extends JpaRepository<F24SezioneInps, String> {

	@Modifying
	@Query("DELETE FROM F24SezioneInps f WHERE f.id=:id")
	void deleteById(@Param("id") String id);

}
