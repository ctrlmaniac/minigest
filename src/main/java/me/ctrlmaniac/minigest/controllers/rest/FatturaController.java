package me.ctrlmaniac.minigest.controllers.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import me.ctrlmaniac.minigest.entitities.docfisc.fattura.Fattura;
import me.ctrlmaniac.minigest.services.docfisc.fattura.FatturaService;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/api/docfisc/fatture")
public class FatturaController {

	@Autowired
	FatturaService fatturaService;

	@PostMapping("")
	public ResponseEntity<Fattura> create(@RequestBody Fattura cf) {
		fatturaService.save(cf);
		return new ResponseEntity<Fattura>(cf, HttpStatus.CREATED);
	}

	@GetMapping("/{id}")
	public ResponseEntity<Fattura> getById(@PathVariable String id) {
		Fattura cf = fatturaService.get(id);

		return new ResponseEntity<>(cf, cf == null ? HttpStatus.NOT_FOUND : HttpStatus.OK);
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<String> deleteById(@PathVariable String id) {
		fatturaService.deleteById(id);
		return new ResponseEntity<>("Fattura cancellata con successo!", HttpStatus.OK);
	}

	@PutMapping("/{id}")
	public ResponseEntity<Fattura> update(@PathVariable String id, @RequestBody Fattura cf) {
		return new ResponseEntity<>(fatturaService.update(id, cf), HttpStatus.OK);
	}

	@GetMapping("/acquisto/{id}")
	public ResponseEntity<List<Fattura>> getAllByCommittente(@PathVariable String idAzienda) {
		return new ResponseEntity<>(fatturaService.getAllByCommittente(idAzienda), HttpStatus.OK);
	}

	@GetMapping("/vendita/{id}")
	public ResponseEntity<List<Fattura>> getAllByCedente(@PathVariable String idAzienda) {
		return new ResponseEntity<>(fatturaService.getAllByCendente(idAzienda), HttpStatus.OK);
	}
}
