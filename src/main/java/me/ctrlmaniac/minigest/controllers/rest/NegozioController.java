package me.ctrlmaniac.minigest.controllers.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import me.ctrlmaniac.minigest.entitities.Negozio;
import me.ctrlmaniac.minigest.services.NegozioService;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/api/negozi")
public class NegozioController {

	@Autowired
	NegozioService negozioService;

	@GetMapping("")
	public ResponseEntity<List<Negozio>> getAll() {
		return new ResponseEntity<>(negozioService.getAll(), HttpStatus.OK);
	}

	@GetMapping("/{id}")
	public ResponseEntity<Negozio> getById(@PathVariable String id) {
		Negozio negozio = negozioService.get(id);

		return new ResponseEntity<>(negozio, negozio == null ? HttpStatus.NOT_FOUND : HttpStatus.OK);
	}

	@PostMapping("")
	public ResponseEntity<Negozio> create(@RequestBody Negozio a) {
		negozioService.save(a);
		return new ResponseEntity<Negozio>(a, HttpStatus.CREATED);
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<String> deleteById(@PathVariable String id) {
		negozioService.deleteById(id);
		return new ResponseEntity<>("Negozio cancellato con successo!", HttpStatus.OK);
	}

	@PutMapping("/{id}")
	public ResponseEntity<Negozio> update(@PathVariable String id, @RequestBody Negozio a) {
		return new ResponseEntity<>(negozioService.update(id, a), HttpStatus.OK);
	}
}
