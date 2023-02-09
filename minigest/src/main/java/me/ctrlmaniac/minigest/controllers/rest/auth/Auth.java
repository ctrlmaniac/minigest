package me.ctrlmaniac.minigest.controllers.rest.auth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.context.HttpSessionSecurityContextRepository;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import me.ctrlmaniac.minigest.services.account.AccountService;
import me.ctrlmaniac.minigest.entities.account.Account;
import me.ctrlmaniac.minigest.payloads.auth.Login;

@RestController
@RequestMapping("/api/auth")
public class Auth {

	@Autowired
	private AuthenticationManager authManager;

	@Autowired
	private AccountService accountService;

	@GetMapping("")
	public ResponseEntity<Boolean> exists(@RequestParam(name = "email", required = true) String email) {
		return ResponseEntity.ok(accountService.existsByEmail(email));
	}

	@PostMapping("/login")
	public ResponseEntity<?> login(@RequestBody Login payload, HttpServletRequest request) {
		SecurityContext context = SecurityContextHolder.createEmptyContext();

		try {
			UsernamePasswordAuthenticationToken token = new UsernamePasswordAuthenticationToken(payload.getEmail(),
					payload.getPassword());

			Authentication auth = authManager.authenticate(token);

			if (auth.isAuthenticated()) {
				context.setAuthentication(auth);
				SecurityContextHolder.setContext(context);

				HttpSession session = request.getSession(true);
				session.setAttribute(HttpSessionSecurityContextRepository.SPRING_SECURITY_CONTEXT_KEY, context);

				return ResponseEntity.ok("utente autenticato");
			} else {
				return ResponseEntity.status(401).body("credenziali non valide");
			}
		} catch (Exception e) {
			return ResponseEntity.status(401).body(e.getMessage());
		}
	}

	@PostMapping("/register")
	public ResponseEntity<String> register(@RequestBody Account payload) {
		Account account = accountService.save(payload);

		if (account.getId() != null) {
			return new ResponseEntity<>("Account creato con success", HttpStatus.CREATED);
		}

		return new ResponseEntity<>("Creazione account fallita", HttpStatus.BAD_REQUEST);

	}

}
