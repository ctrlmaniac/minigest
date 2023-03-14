package me.ctrlmaniac.minigest.controllers.rest.azienda;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import me.ctrlmaniac.minigest.entities.azienda.Azienda;
import me.ctrlmaniac.minigest.entities.account.Account;
import me.ctrlmaniac.minigest.services.azienda.AziendaService;
import me.ctrlmaniac.minigest.services.account.AccountService;

@RestController
@RequestMapping("/api/aziende")
public class AziendaRestController {

	@Autowired
	AziendaService aziendaService;

	@Autowired
	AccountService accountService;

	@GetMapping("/exists")
	public ResponseEntity<Boolean> exists(@RequestParam(name = "nazione", required = true) String nazione,
			@RequestParam(name = "codice", required = true) String codice) {
		return new ResponseEntity<Boolean>(aziendaService.exists(nazione, codice), HttpStatus.OK);
	}

	@GetMapping("")
	public ResponseEntity<List<Azienda>> findAll(
			@RequestParam(name = "denominazione", required = false) String denominazione) {

		if (denominazione != null) {
			return new ResponseEntity<>(aziendaService.searchByDenominazione(denominazione), HttpStatus.OK);
		}

		return new ResponseEntity<>(aziendaService.findAll(), HttpStatus.OK);
	}

	@PostMapping("")
	public ResponseEntity<?> create(@RequestBody Azienda payload) {
		Azienda azienda = aziendaService.save(payload);

		for (Account account : payload.getUtenti()) {
			account.setAzienda(azienda);
			accountService.update(account.getId(), account);
		}

		if (azienda != null) {
			return new ResponseEntity<>(azienda, HttpStatus.CREATED);
		}

		return new ResponseEntity<>("Errore durante la creazione dell'azienda", HttpStatus.BAD_REQUEST);
	}

	@PutMapping("/{id}")
	public ResponseEntity<String> create(@PathVariable String id, @RequestBody Azienda payload) {
		Azienda updated = aziendaService.update(id, payload);

		if (updated != null) {
			return new ResponseEntity<>("Azienda modificata con successo!", HttpStatus.CREATED);
		}

		return new ResponseEntity<>("Errore durante la modifica dell'azienda", HttpStatus.BAD_REQUEST);

	}

	@GetMapping("/{id}")
	public ResponseEntity<?> findById(@PathVariable String id) {
		Azienda azienda = aziendaService.findById(id);

		if (azienda != null) {
			return new ResponseEntity<>(azienda, HttpStatus.OK);
		}

		return new ResponseEntity<>("Azienda non trovata", HttpStatus.NOT_FOUND);
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<String> deleteById(@PathVariable String id) {
		Azienda azienda = aziendaService.findById(id);

		if (azienda != null) {
			aziendaService.deleteById(id);

			return new ResponseEntity<>("Azienda eliminata", HttpStatus.OK);
		}

		return new ResponseEntity<>("Impossibile eliminare azienda", HttpStatus.OK);
	}
}
