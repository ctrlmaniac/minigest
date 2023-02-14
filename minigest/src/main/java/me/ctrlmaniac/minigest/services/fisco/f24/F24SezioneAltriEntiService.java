package me.ctrlmaniac.minigest.services.fisco.f24;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import me.ctrlmaniac.minigest.entities.fisco.f24.F24SezioneAltriEnti;
import me.ctrlmaniac.minigest.repositories.fisco.f24.F24SezioneAltriEntiRepo;

@Service
public class F24SezioneAltriEntiService {

	@Autowired
	F24SezioneAltriEntiRepo repo;

	public F24SezioneAltriEnti save(F24SezioneAltriEnti object) {
		return repo.save(object);
	}
}
