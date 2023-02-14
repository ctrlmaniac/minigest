package me.ctrlmaniac.minigest.services.fisco.f24;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import me.ctrlmaniac.minigest.entities.fisco.f24.F24SezioneErario;
import me.ctrlmaniac.minigest.repositories.fisco.f24.F24SezioneErarioRepo;

@Service
public class F24SezioneErarioService {

	@Autowired
	F24SezioneErarioRepo repo;

	public F24SezioneErario save(F24SezioneErario object) {
		return repo.save(object);
	}
}
