package me.ctrlmaniac.minigest.services.fisco.f24;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import me.ctrlmaniac.minigest.entities.fisco.f24.F24SezioneInps;
import me.ctrlmaniac.minigest.repositories.fisco.f24.F24SezioneInpsRepo;

@Service
public class F24SezioneInpsService {

	@Autowired
	F24SezioneInpsRepo repo;

	public F24SezioneInps save(F24SezioneInps object) {
		return repo.save(object);
	}

	public void delete(F24SezioneInps object) {
		repo.delete(object);
	}

	public void deleteById(String id) {
		repo.deleteById(id);
	}
}
