package me.ctrlmaniac.minigest;

import me.ctrlmaniac.minigest.enums.RuoloEnum;
import me.ctrlmaniac.minigest.entities.account.Account;
import me.ctrlmaniac.minigest.entities.account.AccountRuolo;
import me.ctrlmaniac.minigest.entities.docfisc.TipoDocFisc;
import me.ctrlmaniac.minigest.services.account.AccountService;
import me.ctrlmaniac.minigest.services.account.AccountRuoloService;
import me.ctrlmaniac.minigest.services.docfisc.TipoDocFiscService;
import me.ctrlmaniac.minigest.utils.DataLoader;
import me.ctrlmaniac.minigest.entities.azienda.Azienda;
import me.ctrlmaniac.minigest.entities.azienda.AziendaIndirizzo;
import me.ctrlmaniac.minigest.entities.docfisc.chiusurafiscale.ChiusuraFiscale;
import me.ctrlmaniac.minigest.entities.docfisc.chiusurafiscale.ChiusuraFiscaleReparto;
import me.ctrlmaniac.minigest.entities.docfisc.fattura.Fattura;
import me.ctrlmaniac.minigest.entities.docfisc.fattura.FatturaReparto;
import me.ctrlmaniac.minigest.entities.negozio.Negozio;
import me.ctrlmaniac.minigest.services.azienda.AziendaIndirizzoService;
import me.ctrlmaniac.minigest.services.azienda.AziendaService;
import me.ctrlmaniac.minigest.services.docfisc.chiusurafiscale.ChiusuraFiscaleRepartoService;
import me.ctrlmaniac.minigest.services.docfisc.chiusurafiscale.ChiusuraFiscaleService;
import me.ctrlmaniac.minigest.services.docfisc.fattura.FatturaRepartoService;
import me.ctrlmaniac.minigest.services.negozio.NegozioService;
import me.ctrlmaniac.minigest.services.docfisc.fattura.FatturaService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import java.time.LocalDate;

@Slf4j
@Component
public class SetupRunner implements CommandLineRunner {

	@Autowired
	private DataLoader loader;

	@Autowired
	private TipoDocFiscService tipoDocFiscService;

	@Autowired
	private AccountRuoloService ruoloService;

	@Autowired
	private AccountService accountService;

	@Autowired
	private AziendaService aziendaService;

	@Autowired
	private AziendaIndirizzoService aziendaIndirizzoService;

	@Autowired
	private NegozioService negozioService;

	@Autowired
	private ChiusuraFiscaleService chiusuraFiscaleService;

	@Autowired
	private ChiusuraFiscaleRepartoService chiusuraFiscaleRepartoService;

	@Autowired
	private FatturaService fatturaService;

	@Autowired
	private FatturaRepartoService fatturaRepartoService;

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
		Account admin = new Account(adminEmail, adminFName, adminLName, adminPassword);
		admin.addRuolo(ruoloAdmin);
		accountService.save(admin);

		/**
		 * Carica dati dummy
		 */
		// Crea un rappresentante fiscale
		AziendaIndirizzo rappresentanteSede = new AziendaIndirizzo("Via Margheriti", "19", "25124", "Brescia", "BS",
				"IT");
		aziendaIndirizzoService.save(rappresentanteSede);

		Azienda rappresentate = new Azienda(null, "Davide Di Criscito", null, "IT", "12345678901", "DCRDVD90E23B157R",
				rappresentanteSede, null, null);
		aziendaService.save(rappresentate);

		// Crea un'azienda
		AziendaIndirizzo larapidaSede = new AziendaIndirizzo("Viale Alcide De Gasperi", "6", "25080",
				"Molinetto di Mazzano", "BS", "IT");
		aziendaIndirizzoService.save(larapidaSede);

		AziendaIndirizzo larapidaStabileOrganizzazione = new AziendaIndirizzo("Viale Alcide De Gasperi", "6", "25080",
				"Molinetto di Mazzano", "BS", "IT");
		aziendaIndirizzoService.save(larapidaStabileOrganizzazione);

		Azienda larapida = new Azienda(null, "La Rapida di Davide Di Criscito", null, "IT", "03792670980",
				"DCRDVD90E23B157R", larapidaSede, larapidaStabileOrganizzazione, rappresentate);
		larapida.addUtente(admin);
		aziendaService.save(larapida);

		// Crea una seconda azienda
		AziendaIndirizzo shopSede = new AziendaIndirizzo("Viale Italia", "1", "25124", "Brescia", "BS", "IT");
		aziendaIndirizzoService.save(shopSede);

		Azienda shop = new Azienda(null, "Shop", null, "IT", "09876543212", "09876543212", shopSede, null, null);
		aziendaService.save(shop);

		// Crea un negozio
		Negozio larapidaNegozio = new Negozio(larapida, "La Rapida Molinetto");
		negozioService.save(larapidaNegozio);

		// Crea una chiusura fiscale
		ChiusuraFiscale cf1 = new ChiusuraFiscale(larapidaNegozio, LocalDate.now(), 100, 20);
		chiusuraFiscaleService.save(cf1);

		ChiusuraFiscaleReparto cf1Reparto1 = new ChiusuraFiscaleReparto(cf1, 22, 50, 0, 0);
		chiusuraFiscaleRepartoService.save(cf1Reparto1);
		ChiusuraFiscaleReparto cf1Reparto2 = new ChiusuraFiscaleReparto(cf1, 10, 50, 0, 0);
		chiusuraFiscaleRepartoService.save(cf1Reparto2);

		// Crea una fattura
		TipoDocFisc TD01 = tipoDocFiscService.findByCodice("TD01");

		Fattura ft1 = new Fattura(larapida, shop, TD01, LocalDate.now(), LocalDate.now().plusWeeks(1), "12345", 122);
		fatturaService.save(ft1);

		FatturaReparto ft1Reparto1 = new FatturaReparto(ft1, 22, 100, 22);
		fatturaRepartoService.save(ft1Reparto1);
	}

}
