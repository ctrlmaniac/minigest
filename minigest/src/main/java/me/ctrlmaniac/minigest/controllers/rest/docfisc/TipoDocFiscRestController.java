package me.ctrlmaniac.minigest.controllers.rest.docfisc;

import org.springframework.http.HttpStatus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import me.ctrlmaniac.minigest.entities.docfisc.TipoDocFisc;
import me.ctrlmaniac.minigest.services.docfisc.TipoDocFiscService;

import java.util.List;

@RestController
@RequestMapping("/api/docfisc/tipo")
public class TipoDocFiscRestController {

	@Autowired
	private TipoDocFiscService service;

	@GetMapping("")
	public ResponseEntity<List<TipoDocFisc>> findAll() {
		return new ResponseEntity<>(service.findAll(), HttpStatus.OK);
	}

	@PostMapping("")
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	public ResponseEntity<?> save(@RequestBody TipoDocFisc payload) {
		TipoDocFisc tdf = service.save(payload);

		if (tdf != null) {
			return new ResponseEntity<>(tdf, HttpStatus.CREATED);
		}

		return new ResponseEntity<>("Impossibile creare tipo di doc. fisc.", HttpStatus.BAD_REQUEST);
	}

	@PutMapping("/{id}")
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	public ResponseEntity<?> update(@PathVariable String id, @RequestBody TipoDocFisc payload) {
		TipoDocFisc old = service.findById(id);

		if (old != null) {
			old.setCodice(payload.getCodice());
			old.setDescrizione(payload.getDescrizione());

			return new ResponseEntity<>(service.save(old), HttpStatus.OK);
		}

		return new ResponseEntity<>("Tipo Doc. Fisc. non trovato", HttpStatus.NOT_FOUND);
	}

	@DeleteMapping("/{id}")
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	public ResponseEntity<?> delete(@PathVariable String id) {
		TipoDocFisc tdf = service.findById(id);

		if (tdf != null) {
			service.delete(tdf);

			TipoDocFisc tdfDeleted = service.findById(id);

			if (tdfDeleted == null) {
				return new ResponseEntity<>("Tipo Doc. Fisc. eliminato", HttpStatus.OK);
			} else {
				return new ResponseEntity<>("Impossibile eliminare Tipo Doc. Fisc.", HttpStatus.CONFLICT);
			}

		}

		return new ResponseEntity<>("Tipo Doc. Fisc. non trovato", HttpStatus.NOT_FOUND);
	}

}
