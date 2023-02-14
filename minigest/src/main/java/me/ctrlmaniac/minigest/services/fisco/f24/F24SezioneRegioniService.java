package me.ctrlmaniac.minigest.services.fisco.f24;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import me.ctrlmaniac.minigest.entities.fisco.f24.F24SezioneRegioni;
import me.ctrlmaniac.minigest.repositories.fisco.f24.F24SezioneRegioniRepo;

@Service
public class F24SezioneRegioniService {

	@Autowired
	F24SezioneRegioniRepo repo;

	public F24SezioneRegioni save(F24SezioneRegioni object) {
		return repo.save(object);
	}
}
