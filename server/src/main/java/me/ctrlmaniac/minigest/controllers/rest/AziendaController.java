package me.ctrlmaniac.minigest.controllers.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import me.ctrlmaniac.minigest.entitities.azienda.Azienda;
import me.ctrlmaniac.minigest.entitities.account.Account;
import me.ctrlmaniac.minigest.services.azienda.AziendaService;
import me.ctrlmaniac.minigest.services.account.AccountService;
import me.ctrlmaniac.minigest.payloads.AddAccountToAziendaPayload;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/api/aziende")
public class AziendaController {

	@Autowired
	AziendaService aziendaService;

	@Autowired
	AccountService accountService;

	@GetMapping("")
	public ResponseEntity<List<Azienda>> getAll(
			@RequestParam(name = "denominazione", required = false) String denominazione) {
		if (denominazione != null) {
			return new ResponseEntity<>(aziendaService.searchByDenominazione(denominazione), HttpStatus.OK);
		}

		return new ResponseEntity<>(aziendaService.getAll(), HttpStatus.OK);
	}

	@GetMapping("/{id}")
	public ResponseEntity<Azienda> getById(@PathVariable String id) {
		Azienda azienda = aziendaService.get(id);

		return new ResponseEntity<>(azienda, azienda == null ? HttpStatus.NOT_FOUND : HttpStatus.OK);
	}

	@PostMapping("")
	public ResponseEntity<Azienda> create(@RequestBody Azienda a) {
		aziendaService.save(a);
		return new ResponseEntity<Azienda>(a, HttpStatus.CREATED);
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<String> deleteById(@PathVariable String id) {
		aziendaService.deleteById(id);
		return new ResponseEntity<>("Azienda cancellata con successo!", HttpStatus.OK);
	}

	@PutMapping("/{id}")
	public ResponseEntity<Azienda> update(@PathVariable String id, @RequestBody Azienda a) {
		return new ResponseEntity<>(aziendaService.update(id, a), HttpStatus.OK);
	}

	@GetMapping("/esiste")
	public ResponseEntity<Boolean> exists(@RequestParam(name = "paese", required = true) String paese,
			@RequestParam(name = "codice", required = true) String codice) {
		return new ResponseEntity<>(aziendaService.exists(paese, codice), HttpStatus.OK);
	}

	@PostMapping("/add-user")
	public ResponseEntity<String> addAccountToAzienda(@RequestBody AddAccountToAziendaPayload payload) {
		Account account = accountService.findById(payload.getAccount().getId());

		if (account != null) {
			Azienda azienda = aziendaService.get(payload.getAzienda().getId());

			if (azienda != null) {
				account.addAzienda(azienda);

				return new ResponseEntity<>("Azienda aggiunta con successo", HttpStatus.CREATED);

			}

			return new ResponseEntity<>("Azienda non trovata", HttpStatus.NOT_FOUND);
		}

		return new ResponseEntity<>("Account non trovato", HttpStatus.NOT_FOUND);
	}
}
