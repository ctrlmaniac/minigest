package me.ctrlmaniac.minigest.configs;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.context.HttpSessionSecurityContextRepository;
import org.springframework.security.web.context.SecurityContextRepository;

@Configuration
@EnableWebSecurity
public class SpringSecurityConfig {

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

	@Bean
	SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
		http = http.csrf().disable();

		http = http.authorizeHttpRequests((requests) -> requests
				.requestMatchers("/api/auth", "/api/auth/**").permitAll()
				.requestMatchers("/assets/", "/assets/**").permitAll()
				.requestMatchers("/accedi").permitAll()
				.requestMatchers("/esci").permitAll()
				.anyRequest().authenticated());

		http = http.formLogin((form) -> form.loginPage("/accedi"));

		http = http.logout((logout) -> logout.logoutUrl("/esci").logoutSuccessUrl("/"));

		http = http.securityContext((securityContext) -> securityContext
				.requireExplicitSave(true));

		return http.build();
	}

}