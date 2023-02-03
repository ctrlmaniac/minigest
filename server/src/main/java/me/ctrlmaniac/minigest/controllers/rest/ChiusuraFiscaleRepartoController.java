package me.ctrlmaniac.minigest.controllers.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import me.ctrlmaniac.minigest.entitities.docfisc.chiusurafiscale.ChiusuraFiscaleReparto;
import me.ctrlmaniac.minigest.services.docfisc.chiusurafiscale.ChiusuraFiscaleRepartoService;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/api/docfisc/chiusure-fiscali-reparti")
public class ChiusuraFiscaleRepartoController {

	@Autowired
	ChiusuraFiscaleRepartoService cfService;

	@GetMapping("")
	public ResponseEntity<List<ChiusuraFiscaleReparto>> getAll() {
		return new ResponseEntity<>(cfService.getAll(), HttpStatus.OK);
	}

	@GetMapping("/{id}")
	public ResponseEntity<ChiusuraFiscaleReparto> getById(@PathVariable String id) {
		ChiusuraFiscaleReparto cf = cfService.get(id);

		return new ResponseEntity<>(cf, cf == null ? HttpStatus.NOT_FOUND : HttpStatus.OK);
	}

	@PostMapping("")
	public ResponseEntity<ChiusuraFiscaleReparto> create(@RequestBody ChiusuraFiscaleReparto cf) {
		cfService.save(cf);
		return new ResponseEntity<ChiusuraFiscaleReparto>(cf, HttpStatus.CREATED);
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<String> deleteById(@PathVariable String id) {
		cfService.deleteById(id);
		return new ResponseEntity<>("Reparto Chiusura Fiscale cancellato con successo!", HttpStatus.OK);
	}

	@PutMapping("/{id}")
	public ResponseEntity<ChiusuraFiscaleReparto> update(@PathVariable String id,
			@RequestBody ChiusuraFiscaleReparto cf) {
		return new ResponseEntity<>(cfService.update(id, cf), HttpStatus.OK);
	}
}
