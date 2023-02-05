package me.ctrlmaniac.minigest.controllers.rest;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import me.ctrlmaniac.minigest.dto.FormRegistrazioneDTO;
import me.ctrlmaniac.minigest.entitities.Account;
import me.ctrlmaniac.minigest.entitities.Negozio;
import me.ctrlmaniac.minigest.entitities.azienda.Azienda;
import me.ctrlmaniac.minigest.entitities.azienda.AziendaIndirizzo;
import me.ctrlmaniac.minigest.services.AccountService;
import me.ctrlmaniac.minigest.services.NegozioService;
import me.ctrlmaniac.minigest.services.azienda.AziendaIndirizzoService;
import me.ctrlmaniac.minigest.services.azienda.AziendaService;

@RestController
@RequestMapping("/api/registrati")
public class SignupController {

	@Autowired
	PasswordEncoder passwordEncoder;

	@Autowired
	AccountService accountService;

	@Autowired
	AziendaIndirizzoService aziendaIndirizzoService;

	@Autowired
	AziendaService aziendaService;

	@Autowired
	NegozioService negozioService;

	@Autowired
	AuthenticationManager authenticationManager;

	@PostMapping("")
	public ResponseEntity<String> register(@RequestBody FormRegistrazioneDTO form) {
		if (accountService.findByEmail(form.getAccount().getEmail()) != null) {
			return new ResponseEntity<>("email già registrata", HttpStatus.CONFLICT);
		} else {
			// Salva l'indirizzo
			AziendaIndirizzo sedeTmp = new AziendaIndirizzo();
			sedeTmp.setIndirizzo(form.getSede().getIndirizzo());
			sedeTmp.setCap(form.getSede().getCap());
			sedeTmp.setComune(form.getSede().getComune());
			sedeTmp.setNazione(form.getSede().getNazione());
			sedeTmp.setNumeroCivico(form.getSede().getNumeroCivico());
			sedeTmp.setProvincia(form.getSede().getProvincia());

			AziendaIndirizzo sede = aziendaIndirizzoService.save(sedeTmp);

			// Salva l'azienda
			Azienda aziendaTmp = new Azienda();
			aziendaTmp.setDenominazione(form.getAzienda().getDenominazione());
			aziendaTmp.setIdFiscaleIVAPaese(form.getAzienda().getIdFiscaleIVAPaese());
			aziendaTmp.setIdFiscaleIVACodice(form.getAzienda().getIdFiscaleIVACodice());
			aziendaTmp.setCodiceFiscale(form.getAzienda().getCodiceFiscale());
			aziendaTmp.setSede(sede);

			Azienda azienda = aziendaService.save(aziendaTmp);

			// Crea il negozio
			Negozio negozio = new Negozio();
			negozio.setAzienda(azienda);
			negozio.setNome(form.getNegozio().getNome());
			negozioService.save(negozio);

			// Crea l'utente
			String hashPwd = passwordEncoder.encode(form.getAccount().getPassword());

			Account accountTmp = new Account();
			accountTmp.setFname(form.getAccount().getFname());
			accountTmp.setLname(form.getAccount().getLname());
			accountTmp.setEmail(form.getAccount().getEmail());
			accountTmp.setPassword(hashPwd);

			List<Azienda> accountAziende = new ArrayList<>();
			accountAziende.add(azienda);

			accountTmp.setAziende(accountAziende);

			Account account = accountService.save(accountTmp);

			if (account.getId() != null) {
				return new ResponseEntity<>("Utente creato con successo", HttpStatus.CREATED);
			} else {
				return new ResponseEntity<>("Errore creazione utente", HttpStatus.BAD_REQUEST);
			}
		}
	}
}
