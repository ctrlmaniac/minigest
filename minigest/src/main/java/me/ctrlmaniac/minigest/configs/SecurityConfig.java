package me.ctrlmaniac.minigest.configs;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.context.HttpSessionSecurityContextRepository;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.web.context.SecurityContextRepository;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

	@Bean
	SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
		http = http.csrf().disable();

		http = http.authorizeHttpRequests((requests) -> requests
				.requestMatchers("/api/auth/**").permitAll()
				.requestMatchers("/api/aziende/exists").permitAll()
				.requestMatchers("/api/account/principal", "/api/account/principal/**")
				.hasAnyAuthority("ROLE_ADMIN", "ROLE_USER")
				.requestMatchers("/api/account", "/api/account/**").hasAnyAuthority("ROLE_ADMIN")
				.requestMatchers("/api/account/ruoli", "/api/account/ruoli**").hasAnyAuthority("ROLE_ADMIN")
				.requestMatchers("/api", "/api/**").authenticated()
				.requestMatchers("/app", "/app/**").authenticated()
				.requestMatchers("/admin", "/admin/**").hasAnyAuthority("ROLE_ADMIN")
				.requestMatchers("/", "/**").permitAll()

		);

		http = http.formLogin((form) -> form.loginPage("/accedi").permitAll());

		http = http.logout((logout) -> logout.logoutUrl("/esci").logoutSuccessUrl("/").permitAll());

		http = http.securityContext((securityContext) -> securityContext
				.requireExplicitSave(true));

		return http.build();
	}

	@Bean
	PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}

	@Bean
	AuthenticationManager authenticationManager(
			AuthenticationConfiguration configuration) throws Exception {
		return configuration.getAuthenticationManager();
	}

	@Bean
	SecurityContextRepository securityContextRepository() {
		return new HttpSessionSecurityContextRepository();
	}
}
