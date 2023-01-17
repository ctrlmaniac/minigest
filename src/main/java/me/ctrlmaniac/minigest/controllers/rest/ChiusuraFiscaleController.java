package me.ctrlmaniac.minigest.controllers.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import me.ctrlmaniac.minigest.entitities.docfisc.chiusurafiscale.ChiusuraFiscale;
import me.ctrlmaniac.minigest.services.docfisc.chiusurafiscale.ChiusuraFiscaleService;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/api/docfisc/chiusure-fiscali")
public class ChiusuraFiscaleController {

	@Autowired
	ChiusuraFiscaleService cfService;

	@GetMapping("")
	public ResponseEntity<List<ChiusuraFiscale>> getAll() {
		return new ResponseEntity<>(cfService.getAll(), HttpStatus.OK);
	}

	@GetMapping("/{id}")
	public ResponseEntity<ChiusuraFiscale> getById(@PathVariable String id) {
		ChiusuraFiscale cf = cfService.get(id);

		return new ResponseEntity<>(cf, cf == null ? HttpStatus.NOT_FOUND : HttpStatus.OK);
	}

	@PostMapping("")
	public ResponseEntity<ChiusuraFiscale> create(@RequestBody ChiusuraFiscale cf) {
		cfService.save(cf);
		return new ResponseEntity<ChiusuraFiscale>(cf, HttpStatus.CREATED);
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<String> deleteById(@PathVariable String id) {
		cfService.deleteById(id);
		return new ResponseEntity<>("Chiusura Fiscale cancellata con successo!", HttpStatus.OK);
	}

	@PutMapping("{id}")
	public ResponseEntity<ChiusuraFiscale> update(@PathVariable String id, @RequestBody ChiusuraFiscale cf) {
		return new ResponseEntity<>(cfService.update(id, cf), HttpStatus.OK);
	}
}
