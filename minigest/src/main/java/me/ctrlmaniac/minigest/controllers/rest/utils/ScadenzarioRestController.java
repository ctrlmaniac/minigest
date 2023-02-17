package me.ctrlmaniac.minigest.controllers.rest.utils;

import java.security.Principal;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import java.util.Collections;
import java.util.Comparator;

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
import me.ctrlmaniac.minigest.entities.fisco.f24.F24;
import me.ctrlmaniac.minigest.services.account.AccountService;
import me.ctrlmaniac.minigest.services.docfisc.fattura.FatturaScadenzaService;
import me.ctrlmaniac.minigest.services.docfisc.fattura.FatturaService;
import me.ctrlmaniac.minigest.services.fisco.f24.F24Service;
import me.ctrlmaniac.minigest.models.Scadenzario;

@RestController
@RequestMapping("/api/utils/scadenzario")
public class ScadenzarioRestController {

	@Autowired
	FatturaScadenzaService fatturaScadenzaService;

	@Autowired
	AccountService accountService;

	@Autowired
	FatturaService fatturaService;

	@Autowired
	F24Service f24Service;

	@GetMapping("")
	public ResponseEntity<?> getAll(Principal principal) {
		Account user = accountService.findByEmail(principal.getName());

		if (user != null) {
			Set<Azienda> aziende = user.getAziende();
			List<Fattura> fatture = new ArrayList<>();
			List<FatturaScadenza> scadenze = new ArrayList<>();
			List<F24> f24s = f24Service.findAllByUtente(user);
			List<Scadenzario> scadenzario = new ArrayList<>();

			if (aziende.size() > 0) {
				for (Azienda azienda : aziende) {
					fatture.addAll(fatturaService.findAllByCommittente(azienda));
				}

				for (Fattura fattura : fatture) {
					List<FatturaScadenza> scadenzeAll = new ArrayList<>();
					scadenzeAll.addAll(fattura.getScadenze());

					for (FatturaScadenza scadenza : scadenzeAll) {
						if (!scadenza.getPagato()) {
							scadenze.add(scadenza);
						}
					}
				}

				for (FatturaScadenza scadenza : scadenze) {
					Scadenzario scad = new Scadenzario(scadenza.getData(), scadenza.getImporto(), "fattura",
							scadenza.getFattura().getId());

					scadenzario.add(scad);
				}

				for (F24 f24 : f24s) {
					if (f24.getDataPagamento() == null) {
						Scadenzario scad = new Scadenzario(f24.getDataScadenza(), f24.getTotale(), "f24",
								f24.getId());

						scadenzario.add(scad);
					}
				}

				Collections.sort(scadenzario, new Comparator<Scadenzario>() {
					@Override
					public int compare(Scadenzario s1, Scadenzario s2) {
						return s2.getDataScadenza().compareTo(s1.getDataScadenza());
					}
				});

				return new ResponseEntity<>(scadenzario, HttpStatus.OK);
			}

			return new ResponseEntity<>("Non ci sono aziende per questo account", HttpStatus.NOT_FOUND);
		}

		return new ResponseEntity<>("Utente non trovato", HttpStatus.NOT_FOUND);
	}
}
