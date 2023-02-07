package me.ctrlmaniac.minigest;

import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import com.opencsv.CSVReader;

import lombok.extern.slf4j.Slf4j;
import me.ctrlmaniac.minigest.entitities.Negozio;
import me.ctrlmaniac.minigest.entitities.account.Account;
import me.ctrlmaniac.minigest.entitities.account.AccountRole;
import me.ctrlmaniac.minigest.entitities.azienda.Azienda;
import me.ctrlmaniac.minigest.entitities.azienda.AziendaIndirizzo;
import me.ctrlmaniac.minigest.entitities.docfisc.TipoDocFisc;
import me.ctrlmaniac.minigest.entitities.docfisc.chiusurafiscale.ChiusuraFiscale;
import me.ctrlmaniac.minigest.entitities.docfisc.chiusurafiscale.ChiusuraFiscaleReparto;
import me.ctrlmaniac.minigest.entitities.docfisc.fattura.Fattura;
import me.ctrlmaniac.minigest.entitities.docfisc.fattura.FatturaPagamento;
import me.ctrlmaniac.minigest.entitities.docfisc.fattura.FatturaReparto;
import me.ctrlmaniac.minigest.entitities.docfisc.fattura.FatturaScadenza;
import me.ctrlmaniac.minigest.enums.AccountRoleEnum;
import me.ctrlmaniac.minigest.payloads.ChiusuraFiscalePayload;
import me.ctrlmaniac.minigest.payloads.FatturaPaylaod;
import me.ctrlmaniac.minigest.repositories.account.AccountRoleRepo;
import me.ctrlmaniac.minigest.services.NegozioService;
import me.ctrlmaniac.minigest.services.account.AccountService;
import me.ctrlmaniac.minigest.services.azienda.AziendaIndirizzoService;
import me.ctrlmaniac.minigest.services.azienda.AziendaService;
import me.ctrlmaniac.minigest.services.docfisc.TipoDocFiscService;
import me.ctrlmaniac.minigest.services.docfisc.chiusurafiscale.ChiusuraFiscaleRepartoService;
import me.ctrlmaniac.minigest.services.docfisc.chiusurafiscale.ChiusuraFiscaleService;
import me.ctrlmaniac.minigest.services.docfisc.fattura.FatturaPagamentoService;
import me.ctrlmaniac.minigest.services.docfisc.fattura.FatturaRepartoService;
import me.ctrlmaniac.minigest.services.docfisc.fattura.FatturaScadenzaService;
import me.ctrlmaniac.minigest.services.docfisc.fattura.FatturaService;

@Component
@Slf4j
public class MinigestRunner implements CommandLineRunner {

	@Autowired
	AziendaService aziendaService;

	@Autowired
	AccountService accountService;

	@Autowired
	AccountRoleRepo accountRoleRepo;

	@Autowired
	PasswordEncoder passwordEncoder;

	@Autowired
	AziendaIndirizzoService aziendaIndirizzoService;

	@Autowired
	TipoDocFiscService tdFservice;

	@Autowired
	ChiusuraFiscaleService chiusuraFiscaleService;

	@Autowired
	ChiusuraFiscaleRepartoService cfRepartoService;

	@Autowired
	NegozioService negozioService;

	@Autowired
	FatturaService fatturaService;

	@Autowired
	FatturaRepartoService fatturaRepartoService;

	@Autowired
	FatturaScadenzaService fatturaScadenzaService;

	@Autowired
	FatturaPagamentoService fatturaPagamentoService;

	@Value("${admin.email}")
	private String adminEmail;

	@Value("${admin.pass}")
	private String adminPass;

	@Value("${admin.fname}")
	private String adminFName;

	@Value("${admin.lname}")
	private String adminLName;

	@Override
	public void run(String... args) throws Exception {
		log.info("Runner start");

		// Salva i ruoli
		for (AccountRoleEnum role : AccountRoleEnum.values()) {
			AccountRole accountRole = new AccountRole();
			accountRole.setName(role);
			accountRoleRepo.save(accountRole);
		}

		// Crea un'azienda
		AziendaIndirizzo larapidaSede = new AziendaIndirizzo("Viale Alcide De Gasperi", "6", "25080",
				"Molinetto di Mazzano", "BS", "IT");
		aziendaIndirizzoService.save(larapidaSede);

		Azienda larapida = new Azienda(null, "La Rapida di Davide Di Criscito", null, "IT",
				"03792670980", "DCRDVD90E23B157R", larapidaSede, null, null);
		aziendaService.save(larapida);

		// Crea una seconda azienda
		AziendaIndirizzo shopSede = new AziendaIndirizzo("Viale Italia", "1", "25100", "Brescia", "BS", "IT");
		aziendaIndirizzoService.save(shopSede);

		Azienda shop = new Azienda(null, "Shop", null, "IT", "12345678910", "12345678910", shopSede, null,
				null);
		aziendaService.save(shop);

		// Crea un utente
		String hashPwd = passwordEncoder.encode(adminPass);
		Optional<AccountRole> adminRole = accountRoleRepo.findByName(AccountRoleEnum.ADMIN);

		Account davide = new Account(adminEmail, adminFName, adminLName, hashPwd, adminRole.get(),
				null);

		// Crea una lista di aziende che appartengono a Davide
		List<Azienda> davideAziende = new ArrayList<>();
		davideAziende.add(larapida);
		davideAziende.add(shop);
		davide.setAziende(davideAziende);

		// Salva l'account
		accountService.save(davide);

		// Crea un negozio
		Negozio larapidaNegozio = new Negozio(larapida, "La Rapida Molinetto");
		negozioService.save(larapidaNegozio);

		// Crea un secondo negozio
		Negozio shopNegozio = new Negozio(shop, "Negozio Shop");
		negozioService.save(shopNegozio);

		// Crea una Chiusura Fiscale
		ChiusuraFiscalePayload cfDTO = new ChiusuraFiscalePayload(larapidaNegozio, LocalDate.now(), 1000, 50, null);
		ChiusuraFiscale cf = chiusuraFiscaleService.save(cfDTO);

		ChiusuraFiscaleReparto cfReparto1 = new ChiusuraFiscaleReparto(cf, 22, 500, 0, 0);
		cfRepartoService.save(cfReparto1);

		ChiusuraFiscaleReparto cfReparto2 = new ChiusuraFiscaleReparto(cf, 10, 500, 0, 0);
		cfRepartoService.save(cfReparto2);

		// Carica i tipi di documenti fiscali da CSV
		for (TipoDocFisc tdf : loadTipiDocFiscFromCsv()) {
			tdFservice.save(tdf);
		}

		TipoDocFisc TD01 = tdFservice.getByCodice("TD01");

		// Crea una fattura
		FatturaPaylaod ft1DTO = new FatturaPaylaod(larapida, shop, TD01, LocalDate.now(), LocalDate.now().plusMonths(1),
				"12345",
				500, null, null, null);
		Fattura ft1 = fatturaService.save(ft1DTO);

		FatturaReparto ftRepartoFt1 = new FatturaReparto(ft1, 22, 409.84, 90.16);
		fatturaRepartoService.save(ftRepartoFt1);

		FatturaScadenza ftScadenzaFt1 = new FatturaScadenza(ft1, LocalDate.now(), 500);
		fatturaScadenzaService.save(ftScadenzaFt1);

		FatturaPagamento ftPagamentoFt1 = new FatturaPagamento(ft1, LocalDate.now(), 500);
		fatturaPagamentoService.save(ftPagamentoFt1);

		// Crea una seconda fattura
		FatturaPaylaod ft2DTO = new FatturaPaylaod(shop, larapida, TD01, LocalDate.now(), LocalDate.now().plusMonths(1),
				"54321",
				1000, null, null, null);
		Fattura ft2 = fatturaService.save(ft2DTO);

		FatturaReparto ftRepartoFt2 = new FatturaReparto(ft2, 22, 819.67, 180.33);
		fatturaRepartoService.save(ftRepartoFt2);

		FatturaScadenza ftScadenzaFt2 = new FatturaScadenza(ft2, LocalDate.now(), 500);
		fatturaScadenzaService.save(ftScadenzaFt2);

		FatturaScadenza ftScadenza2Ft2 = new FatturaScadenza(ft2, LocalDate.now().plusWeeks(1), 500);
		fatturaScadenzaService.save(ftScadenza2Ft2);

		FatturaPagamento ftPagamentoFt2 = new FatturaPagamento(ft2, LocalDate.now(), 500);
		fatturaPagamentoService.save(ftPagamentoFt2);

		log.info("Application started at http://localhost:8080");
		log.info("Runner ends");
	}

	private List<TipoDocFisc> loadTipiDocFiscFromCsv() {
		List<TipoDocFisc> tipiDocFisc = new ArrayList<>();

		InputStream in = getClass().getClassLoader().getResourceAsStream("media/csv/tipidocfisc.csv");

		try {
			CSVReader reader = new CSVReader(new InputStreamReader(in));

			String[] values = null;

			while ((values = reader.readNext()) != null) {
				tipiDocFisc.add(new TipoDocFisc(values[0].trim(), values[1].trim()));
			}
		} catch (IOException e) {
			log.error(e.getMessage());
		}

		return tipiDocFisc;
	}

}
