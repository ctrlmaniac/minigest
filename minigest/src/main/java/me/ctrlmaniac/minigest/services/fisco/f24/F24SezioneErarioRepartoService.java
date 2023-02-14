package me.ctrlmaniac.minigest.services.fisco.f24;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import me.ctrlmaniac.minigest.entities.fisco.f24.F24SezioneErarioReparto;
import me.ctrlmaniac.minigest.repositories.fisco.f24.F24SezioneErarioRepartoRepo;

@Service
public class F24SezioneErarioRepartoService {

	@Autowired
	F24SezioneErarioRepartoRepo repo;

	public F24SezioneErarioReparto save(F24SezioneErarioReparto object) {
		return repo.save(object);
	}
}
