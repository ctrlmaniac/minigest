package me.ctrlmaniac.minigest.controllers.rest.auth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.security.web.context.SecurityContextRepository;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import me.ctrlmaniac.minigest.payloads.auth.Login;

@RestController
@RequestMapping("/api/auth")
public class AuthRestController {

	@Autowired
	AuthenticationManager authManager;

	@Autowired
	SecurityContextRepository securityContextRepository;

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
}
