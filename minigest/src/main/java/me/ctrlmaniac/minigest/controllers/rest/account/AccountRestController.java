package me.ctrlmaniac.minigest.controllers.rest.account;

import java.security.Principal;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.thymeleaf.context.Context;

import lombok.extern.slf4j.Slf4j;

import org.springframework.web.bind.annotation.RequestParam;

import me.ctrlmaniac.minigest.entities.account.Account;
import me.ctrlmaniac.minigest.entities.account.AccountRuolo;
import me.ctrlmaniac.minigest.enums.RuoloEnum;
import me.ctrlmaniac.minigest.models.EmailDetails;
import me.ctrlmaniac.minigest.payloads.account.Update;
import me.ctrlmaniac.minigest.payloads.account.Register;
import me.ctrlmaniac.minigest.services.account.AccountRuoloService;
import me.ctrlmaniac.minigest.services.account.AccountService;
import me.ctrlmaniac.minigest.services.email.EmailService;

@Slf4j
@RestController
@RequestMapping("/api/account")
public class AccountRestController {

	@Autowired
	AccountService accountService;

	@Autowired
	AccountRuoloService ruoloService;

	@Autowired
	EmailService emailService;

	@GetMapping("")
	public ResponseEntity<?> findAll(Principal principal,
			@RequestParam(name = "email", required = false) String email) {

		if (principal != null) {
			Account user = accountService.findByEmail(principal.getName());

			if (user != null) {
				AccountRuolo ruoloAdmin = ruoloService.findByNome(RuoloEnum.ROLE_ADMIN);
				boolean isAdmin = user.getAuthorities().contains(ruoloAdmin);

				if (isAdmin) {
					if (email != null) {
						return new ResponseEntity<>(accountService.findByEmailContainingIgnoreCase(email),
								HttpStatus.OK);
					}

					return new ResponseEntity<>(accountService.findAll(), HttpStatus.OK);
				}

				return new ResponseEntity<>("Non hai i permessi necessari", HttpStatus.BAD_REQUEST);
			}

			return new ResponseEntity<>("Account non trovato", HttpStatus.NOT_FOUND);
		}

		return new ResponseEntity<>("Account non connesso", HttpStatus.NOT_FOUND);
	}

	@GetMapping("/{id}")
	public ResponseEntity<?> get(@PathVariable String id) {
		Account account = accountService.findById(id);

		return new ResponseEntity<>(account, account != null ? HttpStatus.OK : HttpStatus.NOT_FOUND);
	}

	@PutMapping("/{id}")
	public ResponseEntity<?> update(@PathVariable String id, @RequestBody Update payload) {
		Account account = accountService.findById(id);

		if (account != null) {
			account.setAccountNonExpired(payload.isAccountNonExpired());
			account.setAccountNonLocked(payload.isAccountNonLocked());
			account.setCredentialsNonExpired(payload.isCredentialsNonExpired());
			account.setEnabled(payload.isEnabled());

			account.setAuthorities(payload.getAuthorities());

			account.setAzienda(payload.getAzienda());

			Account saved = accountService.save(account);

			return new ResponseEntity<>(saved, HttpStatus.OK);
		}

		return new ResponseEntity<>("Account non trovato", HttpStatus.NOT_FOUND);
	}

	@PostMapping("")
	public ResponseEntity<?> create(@RequestBody Register payload) {
		String password = UUID.randomUUID().toString();

		Account account = new Account(payload.getEmail(), payload.getNome(), payload.getCognome(), password, true, true,
				true, true, payload.getAzienda());

		accountService.save(account);

		EmailDetails details = new EmailDetails();
		details.setRecipient(payload.getEmail());
		details.setSubject("Registrazione account minigest");

		Context context = new Context();
		context.setVariable("password", password);

		String status = emailService.sendHtmlEmail(details, "email/registrazione.html", context);

		log.info(status);

		return new ResponseEntity<>("Account registrato con successo!", HttpStatus.OK);
	}
}
