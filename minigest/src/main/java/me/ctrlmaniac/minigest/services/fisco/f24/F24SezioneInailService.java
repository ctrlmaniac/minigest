package me.ctrlmaniac.minigest.services.fisco.f24;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import me.ctrlmaniac.minigest.entities.fisco.f24.F24SezioneInail;
import me.ctrlmaniac.minigest.repositories.fisco.f24.F24SezioneInailRepo;

@Service
public class F24SezioneInailService {

	@Autowired
	F24SezioneInailRepo repo;

	public F24SezioneInail save(F24SezioneInail object) {
		return repo.save(object);
	}

	public void delete(F24SezioneInail object) {
		repo.delete(object);
	}

	public void deleteById(String id) {
		repo.deleteById(id);
	}
}
