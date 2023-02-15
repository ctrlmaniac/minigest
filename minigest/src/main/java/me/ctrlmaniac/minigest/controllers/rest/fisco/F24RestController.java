package me.ctrlmaniac.minigest.controllers.rest.fisco;

import java.security.Principal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import me.ctrlmaniac.minigest.entities.account.Account;
import me.ctrlmaniac.minigest.entities.fisco.f24.F24;
import me.ctrlmaniac.minigest.entities.fisco.f24.F24SezioneAltriEnti;
import me.ctrlmaniac.minigest.entities.fisco.f24.F24SezioneErario;
import me.ctrlmaniac.minigest.entities.fisco.f24.F24SezioneErarioReparto;
import me.ctrlmaniac.minigest.entities.fisco.f24.F24SezioneInail;
import me.ctrlmaniac.minigest.entities.fisco.f24.F24SezioneInps;
import me.ctrlmaniac.minigest.entities.fisco.f24.F24SezioneRegioni;
import me.ctrlmaniac.minigest.entities.fisco.f24.F24SezioneTributiLocali;
import me.ctrlmaniac.minigest.entities.fisco.f24.F24SezioneTributiLocaliReparto;
import me.ctrlmaniac.minigest.services.account.AccountService;
import me.ctrlmaniac.minigest.services.fisco.f24.F24Service;
import me.ctrlmaniac.minigest.services.fisco.f24.F24SezioneAltriEntiService;
import me.ctrlmaniac.minigest.services.fisco.f24.F24SezioneErarioRepartoService;
import me.ctrlmaniac.minigest.services.fisco.f24.F24SezioneErarioService;
import me.ctrlmaniac.minigest.services.fisco.f24.F24SezioneInailService;
import me.ctrlmaniac.minigest.services.fisco.f24.F24SezioneInpsService;
import me.ctrlmaniac.minigest.services.fisco.f24.F24SezioneRegioniService;
import me.ctrlmaniac.minigest.services.fisco.f24.F24SezioneTributiLocaliRepartoService;
import me.ctrlmaniac.minigest.services.fisco.f24.F24SezioneTributiLocaliService;

@RestController
@RequestMapping("/api/fisco/f24")
public class F24RestController {

	@Autowired
	AccountService accountService;

	@Autowired
	F24Service service;

	@Autowired
	F24SezioneErarioService erarioService;

	@Autowired
	F24SezioneErarioRepartoService erarioRepartoService;

	@Autowired
	F24SezioneInpsService inpsService;

	@Autowired
	F24SezioneRegioniService regioniService;

	@Autowired
	F24SezioneTributiLocaliService localiService;

	@Autowired
	F24SezioneTributiLocaliRepartoService localiRepartoService;

	@Autowired
	F24SezioneInailService inailService;

	@Autowired
	F24SezioneAltriEntiService altriEntiService;

	@GetMapping("")
	public ResponseEntity<?> list(Principal principal, @RequestParam(name = "anno", required = false) String anno,
			@RequestParam(name = "mese", required = false) String mese) {
		if (principal != null) {
			Account account = accountService.findByEmail(principal.getName());

			if (account != null) {
				if (anno == null || mese == null) {
					return new ResponseEntity<>(service.findAllByUtente(account), HttpStatus.OK);
				} else {
					return new ResponseEntity<>(service.findAllByUtenteAndByDataScadenza(account, anno, mese),
							HttpStatus.OK);
				}
			}
		}
		return new ResponseEntity<>("Utente non connesso", HttpStatus.NOT_FOUND);
	}

	@GetMapping("/{id}")
	public ResponseEntity<?> get(@PathVariable String id) {
		F24 f24 = service.findById(id);

		if (f24 != null) {
			return new ResponseEntity<>(f24, HttpStatus.OK);
		}

		return new ResponseEntity<>("F24 non trovato", HttpStatus.NOT_FOUND);
	}

	@PostMapping("")
	public ResponseEntity<?> post(@RequestBody F24 payload) {
		F24 f24 = service.save(payload);

		if (f24.getId() != null) {

			// Salva sezione erario
			if (payload.getSezioneErario() != null) {
				F24SezioneErario sezioneErarioPayload = payload.getSezioneErario();
				sezioneErarioPayload.setF24(f24);
				F24SezioneErario sezioneErario = erarioService.save(sezioneErarioPayload);

				// Salva i reparti di sezione erario
				for (F24SezioneErarioReparto reparto : sezioneErarioPayload.getReparti()) {
					reparto.setSezioneErario(sezioneErario);
					erarioRepartoService.save(reparto);
				}
			}

			// Salva sezione inps
			for (F24SezioneInps sezione : payload.getSezioneInps()) {
				sezione.setF24(f24);
				inpsService.save(sezione);
			}

			// Salva sezione regioni
			for (F24SezioneRegioni sezione : payload.getSezioneRegioni()) {
				sezione.setF24(f24);
				regioniService.save(sezione);
			}

			// Sezione tributi locali
			if (payload.getSezioneTributiLocali() != null) {
				F24SezioneTributiLocali sezioneTributiLocaliPayload = payload.getSezioneTributiLocali();
				sezioneTributiLocaliPayload.setF24(f24);
				F24SezioneTributiLocali sezioneTributiLocali = localiService.save(sezioneTributiLocaliPayload);

				for (F24SezioneTributiLocaliReparto reparto : sezioneTributiLocaliPayload.getReparti()) {
					reparto.setSezioneTributiLocali(sezioneTributiLocali);
					localiRepartoService.save(reparto);
				}
			}

			// Sezione inail
			for (F24SezioneInail sezione : payload.getSezioneInail()) {
				sezione.setF24(f24);
				inailService.save(sezione);
			}

			// Sezione altri enti
			for (F24SezioneAltriEnti sezione : payload.getSezioneAltriEnti()) {
				sezione.setF24(f24);
				altriEntiService.save(sezione);
			}

			return new ResponseEntity<>(f24, HttpStatus.CREATED);
		}

		return new ResponseEntity<>("Impossibile creare F24", HttpStatus.BAD_REQUEST);
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<?> delete(@PathVariable String id) {
		F24 f24 = service.findById(id);

		if (f24 != null) {
			service.delete(f24);

			F24 isDeleted = service.findById(id);

			if (isDeleted == null) {
				return new ResponseEntity<>("F24 eliminato con successo", HttpStatus.OK);
			} else {
				return new ResponseEntity<>("Impossibile eliminare F24", HttpStatus.OK);
			}
		}

		return new ResponseEntity<>("F24 non trovato", HttpStatus.NOT_FOUND);
	}
}
