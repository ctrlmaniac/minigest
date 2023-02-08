package me.ctrlmaniac.minigest.controllers.rest.account;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import me.ctrlmaniac.minigest.payloads.LoginPayload;

@RestController
@RequestMapping("/api/account/login")
public class LoginRestController {

	@Autowired
	private AuthenticationManager authenticationManager;

	@PostMapping("")
	public ResponseEntity<String> login(@RequestBody LoginPayload payload) {
		try {
			Authentication auth = authenticationManager
					.authenticate(new UsernamePasswordAuthenticationToken(payload.getEmail(), payload.getPassword()));

			SecurityContextHolder.getContext().setAuthentication(auth);
			return new ResponseEntity<>("Utente autenticato", HttpStatus.OK);
		} catch (Exception e) {
			SecurityContextHolder.getContext().setAuthentication(null);
			return new ResponseEntity<>(e.getMessage(), HttpStatus.UNAUTHORIZED);
		}
	}
}
