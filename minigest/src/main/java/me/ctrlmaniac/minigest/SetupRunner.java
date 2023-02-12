package me.ctrlmaniac.minigest;

import me.ctrlmaniac.minigest.enums.RuoloEnum;
import me.ctrlmaniac.minigest.entities.account.Account;
import me.ctrlmaniac.minigest.entities.account.AccountRuolo;
import me.ctrlmaniac.minigest.entities.docfisc.TipoDocFisc;
import me.ctrlmaniac.minigest.services.account.AccountService;
import me.ctrlmaniac.minigest.services.account.AccountRuoloService;
import me.ctrlmaniac.minigest.services.docfisc.TipoDocFiscService;
import me.ctrlmaniac.minigest.utils.DataLoader;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.annotation.Order;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

@Slf4j
@Component
@Order(1)
public class SetupRunner implements CommandLineRunner {

	@Autowired
	private DataLoader loader;

	@Autowired
	private TipoDocFiscService tipoDocFiscService;

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
		log.info("Excecuting setup");

		// Salva i TipoDocFisc
		for (TipoDocFisc tipo : loader.loadTipoDocFisc("media/csv/tipidocfisc.csv")) {
			tipoDocFiscService.save(tipo);
		}

		// Salva i ruoli
		for (RuoloEnum ruolo : RuoloEnum.values()) {
			ruoloService.save(new AccountRuolo(ruolo));
		}

		// Crea un utente admin
		AccountRuolo ruoloAdmin = ruoloService.findByNome(RuoloEnum.ROLE_ADMIN);

		Account admin = new Account(adminEmail, adminFName, adminLName, adminPassword, true, true, true, true);
		admin.addRuolo(ruoloAdmin);
		accountService.save(admin);
	}

}
