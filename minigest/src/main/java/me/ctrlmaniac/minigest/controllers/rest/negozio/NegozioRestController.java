package me.ctrlmaniac.minigest.controllers.rest.negozio;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import me.ctrlmaniac.minigest.entities.azienda.Azienda;
import me.ctrlmaniac.minigest.services.azienda.AziendaService;
import me.ctrlmaniac.minigest.services.negozio.NegozioService;

@RestController
@RequestMapping("/api/negozi")
public class NegozioRestController {

	@Autowired
	private NegozioService negozioService;

	@Autowired
	private AziendaService aziendaService;

	@GetMapping("")
	public ResponseEntity<?> findAll(@RequestParam(name = "azienda", required = false) String idAzienda) {
		if (idAzienda != null) {
			Azienda azienda = aziendaService.findById(idAzienda);

			if (azienda != null) {
				return new ResponseEntity<>(negozioService.findAllByAzienda(azienda), HttpStatus.OK);
			}

			return new ResponseEntity<>("Azienda non trovata", HttpStatus.NOT_FOUND);
		}

		return new ResponseEntity<>(negozioService.findAll(), HttpStatus.OK);
	}
}
