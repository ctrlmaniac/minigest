package me.ctrlmaniac.minigest.controllers.rest.auth;

import java.time.LocalDate;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.thymeleaf.context.Context;

import lombok.extern.slf4j.Slf4j;
import me.ctrlmaniac.minigest.entities.account.Account;
import me.ctrlmaniac.minigest.entities.auth.PasswordToken;
import me.ctrlmaniac.minigest.models.EmailDetails;
import me.ctrlmaniac.minigest.payloads.auth.PasswordReset;
import me.ctrlmaniac.minigest.payloads.auth.TokenCheck;
import me.ctrlmaniac.minigest.payloads.auth.TokenRequest;
import me.ctrlmaniac.minigest.services.account.AccountService;
import me.ctrlmaniac.minigest.services.auth.PasswordTokenService;
import me.ctrlmaniac.minigest.services.email.EmailService;

@Slf4j
@RestController
@RequestMapping("/api/auth/password")
public class Password {

	@Autowired
	private AccountService accountService;

	@Autowired
	private PasswordTokenService tokenService;

	@Autowired
	private EmailService emailService;

	@Value("${host}")
	private String host;

	@PostMapping("/forgot")
	public ResponseEntity<String> generateToken(@RequestBody TokenRequest payload) {
		Account account = accountService.findByEmail(payload.getEmail());

		if (account != null) {
			String token = UUID.randomUUID().toString();
			PasswordToken accountToken = tokenService.generateToken(account, token);

			if (accountToken != null) {
				EmailDetails details = new EmailDetails();
				details.setRecipient(account.getEmail());
				details.setSubject("Resetta la tua password");

				String link = this.host + "/account/password/reset?token=" + accountToken.getToken();

				Context context = new Context();
				context.setVariable("token", link);

				String status = emailService.sendHtmlEmail(details, "email/password-reset.html", context);

				log.info(status);

				return new ResponseEntity<>("Token password reset generato", HttpStatus.CREATED);
			}

			return new ResponseEntity<>("Impossibile generare token", HttpStatus.BAD_REQUEST);
		}

		return new ResponseEntity<>("Account non trovato", HttpStatus.NOT_FOUND);
	}

	@PostMapping("/token")
	public ResponseEntity<String> checkToken(@RequestBody TokenCheck payload) {
		LocalDate now = LocalDate.now();

		PasswordToken token = tokenService.findByToken(payload.getToken());

		if (token != null) {
			if (token.getExpiryDate().isAfter(now)) {
				return new ResponseEntity<>("Token valido", HttpStatus.OK);
			}

			return new ResponseEntity<>("Token scaduto", HttpStatus.GONE);
		}

		return new ResponseEntity<>("Token mancante", HttpStatus.NOT_FOUND);
	}

	@PostMapping("/reset")
	public ResponseEntity<String> resetPassword(@RequestBody PasswordReset payload) {
		LocalDate now = LocalDate.now();

		PasswordToken token = tokenService.findByToken(payload.getToken());

		if (token != null) {
			if (token.getExpiryDate().isAfter(now)) {
				Account account = token.getAccount();
				account.setPassword(payload.getPassword());

				accountService.save(account);

				return new ResponseEntity<>("Password modificata con successo", HttpStatus.OK);
			}

			return new ResponseEntity<>("Token scaduto", HttpStatus.GONE);
		}

		return new ResponseEntity<>("Token mancante", HttpStatus.NOT_FOUND);
	}
}
