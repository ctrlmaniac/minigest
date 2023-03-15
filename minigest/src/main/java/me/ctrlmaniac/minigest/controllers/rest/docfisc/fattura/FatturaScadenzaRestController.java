package me.ctrlmaniac.minigest.controllers.rest.docfisc.fattura;

import java.security.Principal;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import me.ctrlmaniac.minigest.entities.account.Account;
import me.ctrlmaniac.minigest.entities.azienda.Azienda;
import me.ctrlmaniac.minigest.entities.docfisc.fattura.Fattura;
import me.ctrlmaniac.minigest.entities.docfisc.fattura.FatturaScadenza;
import me.ctrlmaniac.minigest.services.account.AccountService;
import me.ctrlmaniac.minigest.services.docfisc.fattura.FatturaScadenzaService;
import me.ctrlmaniac.minigest.services.docfisc.fattura.FatturaService;

@RestController
@RequestMapping("/api/docfisc/fatture/scadenze")
public class FatturaScadenzaRestController {
	@Autowired
	FatturaScadenzaService fatturaScadenzaService;

	@Autowired
	AccountService accountService;

	@Autowired
	FatturaService fatturaService;

	@GetMapping("")
	public ResponseEntity<?> getAll(Principal principal) {
		Account user = accountService.findByEmail(principal.getName());

		if (user == null) {
			return new ResponseEntity<String>("Utente non connesso", HttpStatus.NOT_FOUND);
		} else {
			Azienda azienda = user.getAzienda();

			if (azienda == null) {
				return new ResponseEntity<String>("Non ci sono aziende per questo account", HttpStatus.NOT_FOUND);
			} else {
				List<Fattura> fatture = new ArrayList<>();

				fatture.addAll(fatturaService.findAllByCommittente(azienda));

				if (fatture.size() == 0) {
					return new ResponseEntity<String>("Non ci sono fatture con scadenze", HttpStatus.NOT_FOUND);
				} else {
					List<FatturaScadenza> scadenzeAll = new ArrayList<>();
					List<FatturaScadenza> scadenze = new ArrayList<>();

					for (Fattura fattura : fatture) {
						scadenzeAll.addAll(fattura.getScadenze());
					}

					for (FatturaScadenza scadenza : scadenzeAll) {
						if (!scadenza.getPagato()) {
							scadenze.add(scadenza);
						}
					}

					return new ResponseEntity<>(scadenze, HttpStatus.OK);
				}
			}
		}
	}
}
