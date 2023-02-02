package me.ctrlmaniac.minigest.controllers.rest;

import me.ctrlmaniac.minigest.entitities.docfisc.fattura.FatturaScadenza;
import me.ctrlmaniac.minigest.services.docfisc.fattura.FatturaScadenzaService;

import java.util.List;
import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/docfisc/fatture/scadenze")
public class FatturaScadenzaController {

	@Autowired
	FatturaScadenzaService fatturaScadenzaService;

	@GetMapping("")
	public ResponseEntity<List<FatturaScadenza>> getAll() {
		List<FatturaScadenza> scadenze = new ArrayList<>();

		for (FatturaScadenza s : fatturaScadenzaService.getAll()) {
			if (!s.getPagato()) {
				scadenze.add(s);
			}
		}

		return new ResponseEntity<>(scadenze, HttpStatus.OK);
	}

}