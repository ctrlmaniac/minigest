package me.ctrlmaniac.minigest.configs;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;

@Configuration
public class SecurityConfig {

	@Bean
	SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
		http.csrf().disable()
				.authorizeHttpRequests((requests) -> requests
						.requestMatchers("/api/account/register", "/api/account/register/**").permitAll()
						.requestMatchers("/api/account/login").permitAll()
						.requestMatchers("/api/aziende/exists").permitAll()
						.requestMatchers("/api", "/api/**").authenticated()
						.requestMatchers("/app", "/app/**").authenticated()
						.requestMatchers("/", "/**").permitAll()

				)
				.formLogin((form) -> form.loginPage("/accedi").permitAll())
				.logout((logout) -> logout.logoutUrl("/esci").permitAll());

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
}
