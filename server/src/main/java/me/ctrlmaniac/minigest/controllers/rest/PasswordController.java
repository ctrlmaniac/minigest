package me.ctrlmaniac.minigest.controllers.rest;

import java.time.LocalDate;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.thymeleaf.context.Context;

import me.ctrlmaniac.minigest.dao.EmailDetails;
import me.ctrlmaniac.minigest.entitities.account.Account;
import me.ctrlmaniac.minigest.entitities.account.PasswordReset;
import me.ctrlmaniac.minigest.payloads.CheckToken;
import me.ctrlmaniac.minigest.payloads.RequestPasswordResetPayload;
import me.ctrlmaniac.minigest.payloads.ResetPasswordPayload;
import me.ctrlmaniac.minigest.services.account.AccountService;
import me.ctrlmaniac.minigest.services.account.PasswordResetService;
import me.ctrlmaniac.minigest.services.email.EmailService;

@RestController
@RequestMapping("/api/password")
public class PasswordController {

	@Autowired
	private AccountService accountService;

	@Autowired
	private PasswordEncoder passwordEncoder;

	@Autowired
	private PasswordResetService passwordResetService;

	@Autowired
	private EmailService emailService;

	@Value("${host}")
	private String host;

	@PostMapping("/forgot")
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
