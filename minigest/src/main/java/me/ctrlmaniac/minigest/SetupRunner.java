package me.ctrlmaniac.minigest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

import lombok.extern.slf4j.Slf4j;
import me.ctrlmaniac.minigest.entities.account.Account;
import me.ctrlmaniac.minigest.entities.account.AccountRuolo;
import me.ctrlmaniac.minigest.entities.docfisc.TipoDocFisc;
import me.ctrlmaniac.minigest.enums.RuoloEnum;
import me.ctrlmaniac.minigest.services.account.AccountRuoloService;
import me.ctrlmaniac.minigest.services.account.AccountService;
import me.ctrlmaniac.minigest.services.docfisc.TipoDocFiscService;
import me.ctrlmaniac.minigest.utils.DataLoader;

@Slf4j
@Component
@Order(1)
public class SetupRunner implements CommandLineRunner {

	@Autowired
	private AccountRuoloService ruoloService;

	@Autowired
	private AccountService accountService;

	@Autowired
	private TipoDocFiscService tipoDocFiscService;

	@Autowired
	private DataLoader loader;

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
			AccountRuolo savedRole = ruoloService.findByNome(ruolo);

			if (savedRole == null) {
				ruoloService.save(new AccountRuolo(ruolo));
			}
		}

		// Crea un utente admin
		AccountRuolo ruoloAdmin = ruoloService.findByNome(RuoloEnum.ROLE_ADMIN);

		Account adminExists = accountService.findByEmail(adminEmail);

		if (adminExists == null) {
			Account admin = new Account(adminEmail, adminFName, adminLName, adminPassword, true, true, true, true,
					null);
			admin.addRuolo(ruoloAdmin);
			accountService.save(admin);
		}

		// Salva i tipi di documenti fiscali
		for (TipoDocFisc tipo : loader.loadTipoDocFisc("media/csv/tipidocfisc.csv")) {
			TipoDocFisc saved = tipoDocFiscService.findByCodice(tipo.getCodice());

			if (saved == null) {
				tipoDocFiscService.save(tipo);
			}
		}

		log.info("Setup completed!");
	}

}
