package me.ctrlmaniac.minigest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

import lombok.extern.slf4j.Slf4j;
import me.ctrlmaniac.minigest.entities.account.Account;
import me.ctrlmaniac.minigest.entities.account.AccountRuolo;
import me.ctrlmaniac.minigest.enums.RuoloEnum;
import me.ctrlmaniac.minigest.services.account.AccountRuoloService;
import me.ctrlmaniac.minigest.services.account.AccountService;

@Slf4j
@Component
@Order(1)
public class SetupRunner implements CommandLineRunner {

	@Autowired
	private AccountRuoloService ruoloService;

	@Autowired
	private AccountService accountService;

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
		log.info("Excecuting setup...");

		// Salva i ruoli
		for (RuoloEnum ruolo : RuoloEnum.values()) {
			ruoloService.save(new AccountRuolo(ruolo));
		}

		// Crea un utente admin
		AccountRuolo ruoloAdmin = ruoloService.findByNome(RuoloEnum.ROLE_ADMIN);

		Account admin = new Account(adminEmail, adminFName, adminLName, adminPassword, true, true, true, true, null);
		admin.addRuolo(ruoloAdmin);
		accountService.save(admin);
	}

}
