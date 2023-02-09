package me.ctrlmaniac.minigest.controllers.rest.docfisc.chiusurafiscale;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import me.ctrlmaniac.minigest.entities.negozio.Negozio;
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
}
