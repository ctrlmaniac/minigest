package me.ctrlmaniac.minigest.controllers.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import me.ctrlmaniac.minigest.entitities.docfisc.TipoDocFisc;
import me.ctrlmaniac.minigest.services.docfisc.TipoDocFiscService;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/api/docfisc/tipo")
public class TipoDocFiscController {

	@Autowired
	TipoDocFiscService tdfService;

	@GetMapping("")
	public ResponseEntity<List<TipoDocFisc>> getAll() {
		return new ResponseEntity<>(tdfService.getAll(), HttpStatus.OK);
	}

	@GetMapping("/{id}")
	public ResponseEntity<TipoDocFisc> getById(@PathVariable String id) {
		TipoDocFisc tdf = tdfService.get(id);

		return new ResponseEntity<>(tdf, tdf == null ? HttpStatus.NOT_FOUND : HttpStatus.OK);
	}

	@PostMapping("")
	public ResponseEntity<TipoDocFisc> create(@RequestBody TipoDocFisc tdf) {
		tdfService.save(tdf);
		return new ResponseEntity<TipoDocFisc>(tdf, HttpStatus.CREATED);
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<String> deleteById(@PathVariable String id) {
		tdfService.deleteById(id);
		return new ResponseEntity<>("Tipo Documento Fiscale cancellato con successo!", HttpStatus.OK);
	}

	@PutMapping("/{id}")
	public ResponseEntity<TipoDocFisc> update(@PathVariable String id, @RequestBody TipoDocFisc tdf) {
		return new ResponseEntity<>(tdfService.update(id, tdf), HttpStatus.OK);
	}
}
