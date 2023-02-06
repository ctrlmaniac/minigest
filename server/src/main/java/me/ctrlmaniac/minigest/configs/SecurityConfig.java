package me.ctrlmaniac.minigest.configs;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

	@Bean
	SecurityFilterChain defaultSecurityFilterChain(HttpSecurity http) throws Exception {
		http.csrf().disable()
				.authorizeHttpRequests()
				.requestMatchers("/api/account").permitAll()
				.requestMatchers("/api/aziende/esiste").permitAll()
				.requestMatchers("/api", "/api/***").authenticated()
				.requestMatchers("/app", "/app/***").authenticated()
				.requestMatchers("/admin", "/admin/**").authenticated()
				.requestMatchers("/**").permitAll()
				.and().formLogin().loginPage("/accedi")
				.and().logout().logoutUrl("/esci").logoutSuccessUrl("/")
				.and().httpBasic();
		return http.build();
	}

	@Bean
	PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}
}
