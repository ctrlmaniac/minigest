package me.ctrlmaniac.minigest.controllers.rest.auth;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.security.web.context.SecurityContextRepository;
import org.thymeleaf.context.Context;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.extern.slf4j.Slf4j;
import me.ctrlmaniac.minigest.services.account.AccountService;
import me.ctrlmaniac.minigest.services.azienda.AziendaService;
import me.ctrlmaniac.minigest.services.email.EmailService;
import me.ctrlmaniac.minigest.entities.account.Account;
import me.ctrlmaniac.minigest.entities.azienda.Azienda;
import me.ctrlmaniac.minigest.payloads.auth.Login;
import me.ctrlmaniac.minigest.payloads.auth.Register;
import me.ctrlmaniac.minigest.models.EmailDetails;

@RestController
@RequestMapping("/api/auth")
@Slf4j
public class Auth {

	@Autowired
	private AuthenticationManager authManager;

	@Autowired
	private AccountService accountService;

	@Autowired
	private SecurityContextRepository securityContextRepository;

	@Autowired
	private AziendaService aziendaService;

	@Autowired
	private EmailService emailService;

	@Value("${admin.email}")
	private String adminEmail;

	@GetMapping("")
	public ResponseEntity<Boolean> exists(@RequestParam(name = "email", required = true) String email) {
		return ResponseEntity.ok(accountService.existsByEmail(email));
	}

	@PostMapping("/login")
	public ResponseEntity<?> login(@RequestBody Login payload, HttpServletRequest request,
			HttpServletResponse response) {
		SecurityContext context = SecurityContextHolder.createEmptyContext();

		try {
			UsernamePasswordAuthenticationToken token = new UsernamePasswordAuthenticationToken(payload.getEmail(),
					payload.getPassword());

			Authentication auth = authManager.authenticate(token);

			if (auth.isAuthenticated()) {
				context.setAuthentication(auth);
				SecurityContextHolder.setContext(context);

				securityContextRepository.saveContext(context, request, response);

				return ResponseEntity.ok("utente autenticato");
			} else {
				return ResponseEntity.status(401).body("credenziali non valide");
			}
		} catch (Exception e) {
			return ResponseEntity.status(401).body(e.getMessage());
		}
	}

	@PostMapping("/register")
	public ResponseEntity<String> register(@RequestBody Register payload) {

		// Registra l'account
		Account accountPayload = new Account(payload.getEmail(), payload.getNome(), payload.getNome(),
				payload.getPassword());

		if (payload.getAzienda() != null) {
			Set<Azienda> aziendeSet = new HashSet<>();
			aziendeSet.add(payload.getAzienda());

			accountPayload.setAziende(aziendeSet);
		}

		Account account = accountService.save(accountPayload);

		if (account.getId() != null) {

			if (payload.getAddMeTo() != null) {
				Azienda azienda = aziendaService.findByIdFiscaleIVAPaeseAndIdFiscaleIVACodice(
						payload.getAddMeTo().get("idFiscaleIVAPaese"), payload.getAddMeTo().get("idFiscaleIVACodice"));

				if (azienda != null) {
					EmailDetails details = new EmailDetails();
					details.setRecipient(adminEmail);
					details.setSubject("Aggiungi " + account.getNome() + " " + account.getCognome() + " ad un'azienda");

					Context context = new Context();
					context.setVariable("email", account.getEmail());
					context.setVariable("azienda", azienda);

					try {
						String status = emailService.sendHtmlEmail(details, "email/aggiungi-ad-azienda.html", context);
						log.info(status);
					} catch (Exception e) {
						log.error(e.getMessage());
					}

				}
			}

			return new ResponseEntity<>("Account creato con success",
					HttpStatus.CREATED);
		}

		return new ResponseEntity<>("Creazione account fallita", HttpStatus.BAD_REQUEST);

	}

}
