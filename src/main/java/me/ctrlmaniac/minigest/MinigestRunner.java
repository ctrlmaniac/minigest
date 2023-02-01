package me.ctrlmaniac.minigest;

import java.io.FileReader;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import com.opencsv.CSVReader;

import lombok.extern.slf4j.Slf4j;
import me.ctrlmaniac.minigest.entitities.Account;
import me.ctrlmaniac.minigest.entitities.Negozio;
import me.ctrlmaniac.minigest.entitities.azienda.Azienda;
import me.ctrlmaniac.minigest.entitities.azienda.AziendaIndirizzo;
import me.ctrlmaniac.minigest.entitities.docfisc.TipoDocFisc;
import me.ctrlmaniac.minigest.entitities.docfisc.chiusurafiscale.ChiusuraFiscale;
import me.ctrlmaniac.minigest.entitities.docfisc.chiusurafiscale.ChiusuraFiscaleReparto;
import me.ctrlmaniac.minigest.entitities.docfisc.fattura.Fattura;
import me.ctrlmaniac.minigest.entitities.docfisc.fattura.FatturaReparto;
import me.ctrlmaniac.minigest.services.AccountService;
import me.ctrlmaniac.minigest.services.NegozioService;
import me.ctrlmaniac.minigest.services.azienda.AziendaIndirizzoService;
import me.ctrlmaniac.minigest.services.azienda.AziendaService;
import me.ctrlmaniac.minigest.services.docfisc.TipoDocFiscService;
import me.ctrlmaniac.minigest.services.docfisc.chiusurafiscale.ChiusuraFiscaleRepartoService;
import me.ctrlmaniac.minigest.services.docfisc.chiusurafiscale.ChiusuraFiscaleService;
import me.ctrlmaniac.minigest.services.docfisc.fattura.FatturaRepartoService;
import me.ctrlmaniac.minigest.services.docfisc.fattura.FatturaService;

@Component
@Slf4j
public class MinigestRunner implements CommandLineRunner {

	@Autowired
	AziendaService aziendaService;

	@Autowired
	AccountService accountService;

	@Autowired
	PasswordEncoder passwordEncoder;

	@Autowired
	AziendaIndirizzoService aziendaIndirizzoService;

	@Autowired
	TipoDocFiscService TDFService;

	@Autowired
	ChiusuraFiscaleService CFService;

	@Autowired
	ChiusuraFiscaleRepartoService CFRService;

	@Autowired
	NegozioService negozioService;

	@Autowired
	FatturaService fatturaService;

	@Autowired
	FatturaRepartoService fatturaRepartoService;

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
		Account davide = new Account(adminEmail, adminFName, adminLName, hashPwd, "ADMIN",
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
		ChiusuraFiscaleReparto cfr1 = new ChiusuraFiscaleReparto(22, 500, 0, 0);
		ChiusuraFiscaleReparto cfr2 = new ChiusuraFiscaleReparto(22, 500, 0, 0);

		CFRService.save(cfr1);
		CFRService.save(cfr2);

		List<ChiusuraFiscaleReparto> cfrs = new ArrayList<>();
		cfrs.add(cfr1);
		cfrs.add(cfr2);

		ChiusuraFiscale cf = new ChiusuraFiscale(larapidaNegozio, LocalDate.now(), 1000, 100, cfrs);

		CFService.save(cf);

		// Carica i tipi di documenti fiscali da CSV
		for (TipoDocFisc tdf : loadTipiDocFiscFromCsv("media/tipidocfisc.csv")) {
			TDFService.save(tdf);
		}

		TipoDocFisc TD01 = TDFService.getByCodice("TD01");

		// Crea Due Fatture
		FatturaReparto ftRepartoFt1 = new FatturaReparto(22, 819.67, 180.33);
		FatturaReparto ftRepartoFt2 = new FatturaReparto(22, 409.84, 90.16);
		fatturaRepartoService.save(ftRepartoFt1);
		fatturaRepartoService.save(ftRepartoFt2);

		List<FatturaReparto> ft1Reparti = new ArrayList<>();
		ft1Reparti.add(ftRepartoFt1);

		List<FatturaReparto> ft2Reparti = new ArrayList<>();
		ft1Reparti.add(ftRepartoFt2);

		Fattura ft1 = new Fattura(larapida, shop, TD01, LocalDate.now(), LocalDate.now().plusMonths(1), "12345",
				1000, ft1Reparti, null, null);
		Fattura ft2 = new Fattura(shop, larapida, TD01, LocalDate.now(), LocalDate.now().plusMonths(1), "54321",
				500, ft2Reparti, null, null);
		fatturaService.save(ft1);
		fatturaService.save(ft2);

		System.out.println("Application started at http://localhost:8080");
		log.info("Runner ends");
	}

	private List<TipoDocFisc> loadTipiDocFiscFromCsv(String filename) {
		List<TipoDocFisc> tipiDocFisc = new ArrayList<>();

		try {
			CSVReader csvReader = new CSVReader(new FileReader(filename));

			String[] values = null;

			while ((values = csvReader.readNext()) != null) {
				tipiDocFisc.add(new TipoDocFisc(values[0].trim(), values[1].trim()));
			}
		} catch (Exception e) {
			log.error(e.getMessage());
		}

		return tipiDocFisc;
	}

}
