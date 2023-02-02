package me.ctrlmaniac.minigest.controllers.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import me.ctrlmaniac.minigest.dto.FatturaDTO;
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
	public ResponseEntity<Fattura> create(@RequestBody FatturaDTO ft) {
		Fattura fattura = fatturaService.save(ft);
		return new ResponseEntity<Fattura>(fattura, HttpStatus.CREATED);
	}

	@GetMapping("/{id}")
	public ResponseEntity<Fattura> getById(@PathVariable String id) {
		Fattura ft = fatturaService.get(id);

		return new ResponseEntity<>(ft, ft == null ? HttpStatus.NOT_FOUND : HttpStatus.OK);
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<String> deleteById(@PathVariable String id) {
		fatturaService.deleteById(id);
		return new ResponseEntity<>("Fattura cancellata con successo!", HttpStatus.OK);
	}

	@PutMapping("/{id}")
	public ResponseEntity<Fattura> update(@PathVariable String id, @RequestBody Fattura ft) {
		return new ResponseEntity<>(fatturaService.update(id, ft), HttpStatus.OK);
	}

	@GetMapping("/acquisto/{id}")
	public ResponseEntity<List<Fattura>> getAllByCommittente(@PathVariable String id,
			@RequestParam(name = "anno", required = false) String year,
			@RequestParam(name = "mese", required = false) String month,
			@RequestParam(name = "order", required = false) String order) {

		if (year != null && month != null) {
			if (order.equals("sdi")) {
				return new ResponseEntity<>(fatturaService.getAllByCommittenteByDataSDI(id, year, month),
						HttpStatus.OK);
			} else {
				return new ResponseEntity<>(fatturaService.getAllByCommittenteByData(id, year, month), HttpStatus.OK);
			}
		} else {
			return new ResponseEntity<>(fatturaService.getAllByCommittente(id), HttpStatus.OK);
		}
	}

	@GetMapping("/vendita/{id}")
	public ResponseEntity<List<Fattura>> getAllByCedente(@PathVariable String id,
			@RequestParam(name = "anno", required = false) String year,
			@RequestParam(name = "mese", required = false) String month,
			@RequestParam(name = "order", required = false) String order) {

		if (year != null && month != null) {
			if (order.equals("sdi")) {
				return new ResponseEntity<>(fatturaService.getAllByCedenteByDataSDI(id, year, month), HttpStatus.OK);
			} else {
				return new ResponseEntity<>(fatturaService.getAllByCedenteByData(id, year, month), HttpStatus.OK);
			}
		} else {
			return new ResponseEntity<>(fatturaService.getAllByCendente(id), HttpStatus.OK);
		}
	}
}
