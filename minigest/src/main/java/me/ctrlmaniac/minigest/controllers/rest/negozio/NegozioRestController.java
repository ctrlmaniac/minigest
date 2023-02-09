package me.ctrlmaniac.minigest.controllers.rest.negozio;

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

import me.ctrlmaniac.minigest.entities.azienda.Azienda;
import me.ctrlmaniac.minigest.entities.negozio.Negozio;
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

	@PostMapping("")
	public ResponseEntity<?> save(@RequestBody Negozio payload) {
		Negozio negozio = negozioService.save(payload);

		if (negozio.getId() != null) {
			return new ResponseEntity<>(negozio, HttpStatus.OK);
		}

		return new ResponseEntity<>("Impossibile creare negozio", HttpStatus.BAD_REQUEST);

	}

	@PutMapping("/{id}")
	public ResponseEntity<?> update(@PathVariable String id, @RequestBody Negozio payload) {
		Negozio negozio = negozioService.update(id, payload);

		if (negozio.getId() != null) {
			return new ResponseEntity<>(negozio, HttpStatus.OK);
		}

		return new ResponseEntity<>("Impossibile modificare negozio", HttpStatus.BAD_REQUEST);

	}

	@DeleteMapping("/{id}")
	public ResponseEntity<?> delete(@PathVariable String id) {
		Negozio negozio = negozioService.findById(id);

		if (negozio != null) {
			negozioService.delete(negozio);

			return new ResponseEntity<>("Negozio cancellato con successo", HttpStatus.OK);
		}

		return new ResponseEntity<>("Impossibile cancellare negozio", HttpStatus.NOT_FOUND);

	}
}
