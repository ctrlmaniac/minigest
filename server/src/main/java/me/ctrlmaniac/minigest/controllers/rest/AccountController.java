package me.ctrlmaniac.minigest.controllers.rest;

import java.security.Principal;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.thymeleaf.context.Context;

import me.ctrlmaniac.minigest.dao.EmailDetails;
import me.ctrlmaniac.minigest.entitities.Negozio;
import me.ctrlmaniac.minigest.entitities.account.Account;
import me.ctrlmaniac.minigest.entitities.account.AccountRole;
import me.ctrlmaniac.minigest.entitities.account.PasswordReset;
import me.ctrlmaniac.minigest.entitities.azienda.Azienda;
import me.ctrlmaniac.minigest.entitities.azienda.AziendaIndirizzo;
import me.ctrlmaniac.minigest.enums.AccountRoleEnum;
import me.ctrlmaniac.minigest.payloads.CheckToken;
import me.ctrlmaniac.minigest.payloads.RegistrazionePaylaod;
import me.ctrlmaniac.minigest.payloads.RequestPasswordResetPayload;
import me.ctrlmaniac.minigest.payloads.ResetPasswordPayload;
import me.ctrlmaniac.minigest.services.NegozioService;
import me.ctrlmaniac.minigest.services.account.AccountService;
import me.ctrlmaniac.minigest.services.account.PasswordResetService;
import me.ctrlmaniac.minigest.services.azienda.AziendaIndirizzoService;
import me.ctrlmaniac.minigest.services.azienda.AziendaService;
import me.ctrlmaniac.minigest.services.email.EmailService;
import me.ctrlmaniac.minigest.repositories.account.AccountRoleRepo;

@RestController
@RequestMapping("/api/account")
public class AccountController {

	@Autowired
	private AccountService accountService;

	@Autowired
	private PasswordEncoder passwordEncoder;

	@Autowired
	private AziendaIndirizzoService aziendaIndirizzoService;

	@Autowired
	private AziendaService aziendaService;

	@Autowired
	private NegozioService negozioService;

	@Autowired
	private AccountRoleRepo accountRoleRepo;

	@Autowired
	private PasswordResetService passwordResetService;

	@Autowired
	private EmailService emailService;

	@Value("${host}")
	private String host;

	@GetMapping("/list")
	public ResponseEntity<List<Account>> findAll() {
		return new ResponseEntity<>(accountService.findAll(), HttpStatus.OK);
	}

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

	@PutMapping("")
	@PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
	public ResponseEntity<String> updateUser(Principal principal, @RequestBody Account payload) {
		if (principal != null) {
			Account user = accountService.findByEmail(principal.getName());

			if (user == null) {
				return new ResponseEntity<>("Utente non trovato", HttpStatus.NOT_FOUND);
			} else {
				user.setFname(payload.getFname());
				user.setLname(payload.getLname());
				user.setEmail(payload.getEmail());

				accountService.save(user);

				return new ResponseEntity<>("Account modificato con successo", HttpStatus.OK);
			}
		}

		return new ResponseEntity<String>("Utente non connesso", HttpStatus.NOT_FOUND);
	}

	@PostMapping("")
	public ResponseEntity<String> register(@RequestBody RegistrazionePaylaod form) {
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

	@PostMapping("/request-password-reset")
	public ResponseEntity<String> resetPassword(@RequestBody RequestPasswordResetPayload payload) {
		Account account = accountService.findByEmail(payload.getEmail());

		if (account == null) {
			return new ResponseEntity<>("Utente non trovato", HttpStatus.NOT_FOUND);
		} else {
			String token = UUID.randomUUID().toString();
			LocalDate expirationDate = LocalDate.now().plusDays(1);

			PasswordReset accountToken = passwordResetService.generateToken(account, token, expirationDate);

			if (accountToken != null) {
				EmailDetails details = new EmailDetails();
				details.setRecipient(account.getEmail());
				details.setSubject("Resetta la tua password");

				String link = this.host + "password-reset/?token=" + accountToken.getToken();

				Context context = new Context();
				context.setVariable("token", link);

				String status = emailService.sendHtmlEmail(details, "email/password-reset.html", context);

				System.out.println(status);

				return new ResponseEntity<>("Token password reset generato", HttpStatus.CREATED);
			} else {
				return new ResponseEntity<>("Impossibile generare token", HttpStatus.BAD_REQUEST);
			}
		}
	}

	@PostMapping("/token")
	public ResponseEntity<String> checkToken(@RequestBody CheckToken token) {
		LocalDate now = LocalDate.now();

		PasswordReset passwordReset = passwordResetService.findByToken(token.getToken());

		if (passwordReset != null) {
			if (passwordReset.getExpiryDate().isAfter(now)) {
				return new ResponseEntity<>("Token valido", HttpStatus.OK);
			} else {
				return new ResponseEntity<>("Token scaduto", HttpStatus.GONE);
			}
		} else {
			return new ResponseEntity<>("Token non trovato", HttpStatus.NOT_FOUND);
		}
	}

	@PostMapping("/password-reset")
	public ResponseEntity<String> resetPassword(@RequestBody ResetPasswordPayload payload) {
		LocalDate now = LocalDate.now();

		PasswordReset token = passwordResetService.findByToken(payload.getToken());

		if (token != null) {
			if (token.getExpiryDate().isAfter(now)) {
				Account account = token.getAccount();
				String hashPwd = passwordEncoder.encode(payload.getPassword());
				account.setPassword(hashPwd);

				accountService.save(account);

				return new ResponseEntity<>("Password modificata con successo", HttpStatus.OK);
			} else {
				return new ResponseEntity<>("Token scaduto", HttpStatus.GONE);
			}
		} else {
			return new ResponseEntity<>("Token non trovato", HttpStatus.NOT_FOUND);
		}
	}

	@GetMapping("/esiste")
	public ResponseEntity<Boolean> exists(@RequestParam(name = "email", required = true) String email) {
		return new ResponseEntity<>(accountService.exists(email), HttpStatus.OK);
	}

}
