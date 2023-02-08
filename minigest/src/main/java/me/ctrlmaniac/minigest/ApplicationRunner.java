package me.ctrlmaniac.minigest;

import me.ctrlmaniac.minigest.enums.RuoloEnum;
import me.ctrlmaniac.minigest.entities.account.Account;
import me.ctrlmaniac.minigest.entities.account.AccountRuolo;
import me.ctrlmaniac.minigest.entities.azienda.Azienda;
import me.ctrlmaniac.minigest.services.account.AccountService;
import me.ctrlmaniac.minigest.services.account.AccountRuoloService;
import me.ctrlmaniac.minigest.services.azienda.AziendaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

@Slf4j
@Component
public class ApplicationRunner implements CommandLineRunner {

	@Autowired
	private AccountRuoloService ruoloService;

	@Autowired
	private AccountService accountService;

	@Autowired
	private AziendaService aziendaService;

	@Value("${admin.email}")
	private String adminEmail;

	@Value("${admin.fname}")
	private String adminFName;

	@Value("${admin.lname}")
	private String adminLName;

	@Value("${admin.password}")
	private String adminPassword;

	@Override
	public void run(String... args) throws Exception {
		log.info("App running at: http://localhost:8080");

		// Salva i ruoli
		for (RuoloEnum ruolo : RuoloEnum.values()) {
			ruoloService.save(new AccountRuolo(ruolo));
		}

		// Crea un utente admin
		AccountRuolo ruoloAdmin = ruoloService.findByNome(RuoloEnum.ROLE_ADMIN);

		Account admin = new Account(adminEmail, adminFName, adminLName,
				adminPassword);
		admin.addRuolo(ruoloAdmin);
		accountService.save(admin);

		// Crea un'azienda
		Azienda larapida = new Azienda("La Rapida di Davide Di Criscito");
		larapida.addUtente(admin);
		aziendaService.save(larapida);

	}

}
