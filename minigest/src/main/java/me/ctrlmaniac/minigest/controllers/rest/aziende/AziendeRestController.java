package me.ctrlmaniac.minigest.controllers.rest.aziende;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;

import me.ctrlmaniac.minigest.entities.azienda.Azienda;
import me.ctrlmaniac.minigest.services.azienda.AziendaService;

@RestController
@RequestMapping("/api/aziende")
public class AziendeRestController {

	@Autowired
	AziendaService aziendaService;

	@GetMapping("")
	public ResponseEntity<List<Azienda>> findAll(
			@RequestParam(name = "denominazione", required = false) String denominazione) {

		if (denominazione != null) {
			return new ResponseEntity<>(aziendaService.searchByDenominazione(denominazione), HttpStatus.OK);
		}

		return new ResponseEntity<>(aziendaService.findAll(), HttpStatus.OK);
	}

	@GetMapping("/exists")
	public ResponseEntity<Boolean> exists(@RequestParam(name = "nazione", required = true) String nazione,
			@RequestParam(name = "codice", required = true) String codice) {
		return new ResponseEntity<Boolean>(aziendaService.exists(nazione, codice), HttpStatus.OK);
	}

}
