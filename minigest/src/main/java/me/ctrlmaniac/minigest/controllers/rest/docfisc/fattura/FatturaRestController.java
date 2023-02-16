package me.ctrlmaniac.minigest.controllers.rest.docfisc.fattura;

import java.util.List;

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
import me.ctrlmaniac.minigest.entities.docfisc.fattura.Fattura;
import me.ctrlmaniac.minigest.services.docfisc.fattura.FatturaService;
import me.ctrlmaniac.minigest.services.azienda.AziendaService;

@RestController
@RequestMapping("/api/docfisc/fatture")
public class FatturaRestController {

	@Autowired
	private FatturaService service;

	@Autowired
	private AziendaService aziendaService;

	@GetMapping("")
	public ResponseEntity<List<Fattura>> findAll() {
		return new ResponseEntity<>(service.findAll(), HttpStatus.OK);
	}

	@PostMapping("")
	public ResponseEntity<?> post(@RequestBody Fattura payload) {
		Fattura fattura = service.save(payload);

		if (fattura != null) {
			return new ResponseEntity<>(fattura, HttpStatus.CREATED);
		}

		return new ResponseEntity<>("Impossibile creare fattura", HttpStatus.NOT_FOUND);
	}

	@GetMapping("/{id}")
	public ResponseEntity<Fattura> findById(@PathVariable String id) {
		Fattura fattura = service.findById(id);

		return new ResponseEntity<>(fattura, fattura != null ? HttpStatus.OK : HttpStatus.NOT_FOUND);
	}

	@GetMapping("/last10")
	public ResponseEntity<?> getLast7(
			@RequestParam(name = "committente", required = true) String idCommittente) {

		Azienda azienda = aziendaService.findById(idCommittente);

		if (azienda != null) {
			return new ResponseEntity<>(service.findTop10ByCommittenteOrderByDataAsc(azienda), HttpStatus.OK);
		}

		return new ResponseEntity<>("Azienda non trovata", HttpStatus.NOT_FOUND);
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<String> delete(@PathVariable String id) {
		Fattura fattura = service.findById(id);

		if (fattura != null) {
			service.delete(fattura);

			return new ResponseEntity<>("Fattura eliminata con successo!", HttpStatus.OK);
		}

		return new ResponseEntity<>("impossibile trovare fattura", HttpStatus.NOT_FOUND);
	}

	@PutMapping("/{id}")
	public ResponseEntity<?> update(@PathVariable String id, @RequestBody Fattura payload) {
		Fattura fattura = service.update(id, payload);

		if (fattura != null) {
			return new ResponseEntity<>("Fattura modificata!", HttpStatus.OK);
		}

		return new ResponseEntity<>("Impossibile modificare fattura!", HttpStatus.NOT_FOUND);

	}

	@GetMapping("/vendita/{idAzienda}")
	public ResponseEntity<?> findAllByCedente(@PathVariable String idAzienda,
			@RequestParam(name = "anno", required = false) String anno,
			@RequestParam(name = "mese", required = false) String mese,
			@RequestParam(name = "sdi", required = true) boolean sdi) {

		Azienda azienda = aziendaService.findById(idAzienda);

		if (azienda != null) {
			if (sdi) {
				return new ResponseEntity<>(service.findAllByCedenteByDataSDI(azienda, anno, mese), HttpStatus.OK);
			} else {
				if (mese != null && anno != null) {
					return new ResponseEntity<>(service.findAllByCedenteByData(azienda, anno, mese), HttpStatus.OK);
				}

				return new ResponseEntity<>(service.findAllByCedente(azienda), HttpStatus.OK);
			}
		}

		return new ResponseEntity<>("azienda non trovata", HttpStatus.NOT_FOUND);
	}

	@GetMapping("/acquisto/{idAzienda}")
	public ResponseEntity<?> findAllByCommittente(@PathVariable String idAzienda,
			@RequestParam(name = "anno", required = false) String anno,
			@RequestParam(name = "mese", required = false) String mese,
			@RequestParam(name = "sdi", required = true) boolean sdi) {

		Azienda azienda = aziendaService.findById(idAzienda);

		if (azienda != null) {
			if (sdi) {
				return new ResponseEntity<>(service.findAllByCommittenteByDataSDI(azienda, anno, mese), HttpStatus.OK);
			} else {
				if (mese != null && anno != null) {
					return new ResponseEntity<>(service.findAllByCommittenteByData(azienda, anno, mese), HttpStatus.OK);
				}

				return new ResponseEntity<>(service.findAllByCommittente(azienda), HttpStatus.OK);
			}
		}

		return new ResponseEntity<>("azienda non trovata", HttpStatus.NOT_FOUND);
	}
}
