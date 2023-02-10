package me.ctrlmaniac.minigest.controllers.rest.docfisc.chiusurafiscale;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import me.ctrlmaniac.minigest.entities.negozio.Negozio;
import me.ctrlmaniac.minigest.entities.docfisc.chiusurafiscale.ChiusuraFiscale;
import me.ctrlmaniac.minigest.services.docfisc.chiusurafiscale.ChiusuraFiscaleService;
import me.ctrlmaniac.minigest.services.negozio.NegozioService;

@RestController
@RequestMapping("/api/docfisc/chiusure-fiscali")
public class ChiusuraFiscaleRestController {

	@Autowired
	private ChiusuraFiscaleService service;

	@Autowired
	NegozioService negozioService;

	@GetMapping("")
	public ResponseEntity<?> findAll(@RequestParam(name = "negozio", required = true) String idNegozio) {
		Negozio negozio = negozioService.findById(idNegozio);

		if (negozio != null) {
			return new ResponseEntity<>(service.findAll(negozio), HttpStatus.OK);
		}

		return new ResponseEntity<>("negozio non trovato", HttpStatus.NOT_FOUND);
	}

	@GetMapping("/{id}")
	public ResponseEntity<?> get(@PathVariable String id) {
		ChiusuraFiscale chiusura = service.find(id);

		if (chiusura != null) {
			return new ResponseEntity<>(chiusura, HttpStatus.OK);
		}

		return new ResponseEntity<>("Chiusura Fiscale non trovata", HttpStatus.NOT_FOUND);
	}

	@PostMapping("")
	public ResponseEntity<?> post(@RequestBody ChiusuraFiscale payload) {
		ChiusuraFiscale chiusura = service.save(payload);

		if (chiusura != null) {
			return new ResponseEntity<>(chiusura, HttpStatus.CREATED);
		}

		return new ResponseEntity<>("Errore creazione chiusura fiscale", HttpStatus.BAD_REQUEST);
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<?> delete(@PathVariable String id) {
		ChiusuraFiscale chiusura = service.find(id);

		if (chiusura != null) {
			service.delete(chiusura);
			return new ResponseEntity<>("Chiusura fiscale eliminata", HttpStatus.OK);
		}

		return new ResponseEntity<>("Impossibile eliminare chiusura fiscale", HttpStatus.BAD_REQUEST);
	}

	@PutMapping("/{id}")
	public ResponseEntity<?> update(@PathVariable String id, @RequestBody ChiusuraFiscale payload) {
		ChiusuraFiscale chiusura = service.update(id, payload);

		if (chiusura != null) {
			return new ResponseEntity<>(chiusura, HttpStatus.OK);
		}

		return new ResponseEntity<>("Impossibile modificare chiusura fiscale", HttpStatus.NOT_FOUND);

	}
}
