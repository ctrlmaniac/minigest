package me.ctrlmaniac.minigest.controllers.rest;

import java.security.Principal;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import me.ctrlmaniac.minigest.dto.FormRegistrazioneDTO;
import me.ctrlmaniac.minigest.entitities.Negozio;
import me.ctrlmaniac.minigest.entitities.account.Account;
import me.ctrlmaniac.minigest.entitities.account.AccountRole;
import me.ctrlmaniac.minigest.entitities.azienda.Azienda;
import me.ctrlmaniac.minigest.entitities.azienda.AziendaIndirizzo;
import me.ctrlmaniac.minigest.enums.AccountRoleEnum;
import me.ctrlmaniac.minigest.services.NegozioService;
import me.ctrlmaniac.minigest.services.account.AccountService;
import me.ctrlmaniac.minigest.services.azienda.AziendaIndirizzoService;
import me.ctrlmaniac.minigest.services.azienda.AziendaService;
import me.ctrlmaniac.minigest.repositories.account.AccountRoleRepo;

@RestController
@RequestMapping("/api/account")
public class AccountController {

	@Autowired
	AccountService accountService;

	@Autowired
	PasswordEncoder passwordEncoder;

	@Autowired
	AziendaIndirizzoService aziendaIndirizzoService;

	@Autowired
	AziendaService aziendaService;

	@Autowired
	NegozioService negozioService;

	@Autowired
	AccountRoleRepo accountRoleRepo;

	@GetMapping("")
	public ResponseEntity<?> currentUser(Principal principal) {
		if (principal != null) {
			Account user = accountService.findByEmail(principal.getName());

			if (user != null) {
				return new ResponseEntity<Account>(user, HttpStatus.OK);
			} else {
				return new ResponseEntity<String>("Utente non connesso", HttpStatus.NOT_FOUND);
			}
		}

		return new ResponseEntity<String>("Utente non connesso", HttpStatus.NOT_FOUND);
	}

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
			Negozio negozioTmp = new Negozio();
			negozioTmp.setAzienda(azienda);
			negozioTmp.setNome(form.getNegozio().getNome());
			Negozio negozio = negozioService.save(negozioTmp);

			System.out.println(form.getAccount().getPassword());

			// Crea l'utente

			Optional<AccountRole> roleUser = accountRoleRepo.findByName(AccountRoleEnum.ROLE_USER);
			String email = form.getAccount().getEmail();
			String fname = form.getAccount().getFname();
			String lname = form.getAccount().getLname();
			String hashPwd = passwordEncoder.encode(form.getAccount().getPassword());

			Account accountTmp = new Account(email, fname, lname, hashPwd,
					roleUser.get(), null);

			List<Azienda> accountAziende = new ArrayList<>();
			accountAziende.add(azienda);

			accountTmp.setAziende(accountAziende);

			Account account = accountService.save(accountTmp);

			if (account.getId() != null) {
				return new ResponseEntity<>("Utente creato con successo",
						HttpStatus.CREATED);
			} else {
				negozioService.deleteById(negozio.getId());
				aziendaService.deleteById(azienda.getId());
				aziendaIndirizzoService.deleteById(sede.getId());
				return new ResponseEntity<>("Errore creazione utente",
						HttpStatus.BAD_REQUEST);
			}
		}
	}

}
