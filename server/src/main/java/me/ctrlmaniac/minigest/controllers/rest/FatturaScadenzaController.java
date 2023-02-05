package me.ctrlmaniac.minigest.controllers.rest;

import me.ctrlmaniac.minigest.entitities.Account;
import me.ctrlmaniac.minigest.entitities.azienda.Azienda;
import me.ctrlmaniac.minigest.entitities.docfisc.fattura.Fattura;
import me.ctrlmaniac.minigest.entitities.docfisc.fattura.FatturaScadenza;
import me.ctrlmaniac.minigest.services.AccountService;
import me.ctrlmaniac.minigest.services.docfisc.fattura.FatturaScadenzaService;
import me.ctrlmaniac.minigest.services.docfisc.fattura.FatturaService;

import java.util.List;
import java.security.Principal;
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
			List<Azienda> aziende = user.getAziende();

			if (aziende.size() == 0) {
				return new ResponseEntity<String>("Non ci sono aziende per questo account", HttpStatus.NOT_FOUND);
			} else {
				List<Fattura> fatture = new ArrayList<>();

				for (Azienda azienda : aziende) {
					fatture.addAll(fatturaService.getAllByCommittente(azienda.getId()));
				}

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
