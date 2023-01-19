package me.ctrlmaniac.minigest;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import me.ctrlmaniac.minigest.entitities.Account;
import me.ctrlmaniac.minigest.entitities.Negozio;
import me.ctrlmaniac.minigest.entitities.azienda.Azienda;
import me.ctrlmaniac.minigest.entitities.azienda.AziendaIndirizzo;
import me.ctrlmaniac.minigest.entitities.docfisc.TipoDocFisc;
import me.ctrlmaniac.minigest.entitities.docfisc.chiusurafiscale.ChiusuraFiscale;
import me.ctrlmaniac.minigest.entitities.docfisc.chiusurafiscale.ChiusuraFiscaleReparto;
import me.ctrlmaniac.minigest.services.AccountService;
import me.ctrlmaniac.minigest.services.azienda.AziendaIndirizzoService;
import me.ctrlmaniac.minigest.services.azienda.AziendaService;
import me.ctrlmaniac.minigest.services.docfisc.TipoDocFiscService;
import me.ctrlmaniac.minigest.services.docfisc.chiusurafiscale.ChiusuraFiscaleRepartoService;
import me.ctrlmaniac.minigest.services.docfisc.chiusurafiscale.ChiusuraFiscaleService;

@Component
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

	@Override
	public void run(String... args) throws Exception {
		// Crea un'azienda
		AziendaIndirizzo larapidaSede = new AziendaIndirizzo("Viale Alcide De Gasperi", "6", "25080",
				"Molinetto di Mazzano", "BS", "IT");
		aziendaIndirizzoService.save(larapidaSede);

		Azienda larapida = new Azienda("La Rapida di Davide Di Criscito", null, null, null, null, "IT",
				"03792670980", "DCRDVD90E23B157R", larapidaSede, null, null, null);
		aziendaService.save(larapida);

		// Crea una seconda azienda
		AziendaIndirizzo shopSede = new AziendaIndirizzo("Viale Italia", "1", "25100", "Brescia", "BS", "IT");
		aziendaIndirizzoService.save(shopSede);

		Azienda shop = new Azienda("Shop", null, null, null, null, "IT", "12345678910", "12345678910", shopSede, null,
				null, null);
		aziendaService.save(shop);

		// Crea un utente
		String hashPwd = passwordEncoder.encode("12345");
		Account davide = new Account("davide.dicriscito@gmail.com", "Davide", "Di Criscito", hashPwd, "ADMIN",
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

		// Crea i Tipi di documenti fiscali
		TipoDocFisc TD01 = new TipoDocFisc("TD01", "fattura");
		TipoDocFisc TD02 = new TipoDocFisc("TD02", "acconto/anticipo su fattura");
		TipoDocFisc TD03 = new TipoDocFisc("TD03", "acconto/anticipo su parcella");
		TipoDocFisc TD04 = new TipoDocFisc("TD04", "nota di credito");
		TipoDocFisc TD05 = new TipoDocFisc("TD05", "nota di debito");
		TipoDocFisc TD06 = new TipoDocFisc("TD06", "parcella");
		TipoDocFisc TD16 = new TipoDocFisc("TD16", "integrazione fattura reverse charge interno");
		TipoDocFisc TD17 = new TipoDocFisc("TD17", "integrazione/autofattura per acquisto servizi dall'estero");
		TipoDocFisc TD18 = new TipoDocFisc("TD18", "integrazione per acquisto di beni intracomunitari");
		TipoDocFisc TD19 = new TipoDocFisc("TD19",
				"integrazione/autofattura per acquisto di beni ex art.17 c.2 DPR 633/72");
		TipoDocFisc TD20 = new TipoDocFisc("TD20",
				"autofattura per regolarizzazione e integrazione delle fatture (ex art.6 c.8 e 9-bis d.lgs. 471/97  o  art.46 c.5 D.L. 331/93)");
		TipoDocFisc TD21 = new TipoDocFisc("TD21", "autofattura per splafonamento");
		TipoDocFisc TD22 = new TipoDocFisc("TD22", "estrazione beni da Deposito IVA");
		TipoDocFisc TD23 = new TipoDocFisc("TD23", "estrazione beni da Deposito IVA con versamento dell'IVA");
		TipoDocFisc TD24 = new TipoDocFisc("TD24",
				"fattura differita di cui all'art. 21, comma 4, terzo periodo lett. a) DPR 633/72");
		TipoDocFisc TD25 = new TipoDocFisc("TD25",
				"fattura differita di cui all'art. 21, comma 4, terzo periodo lett. b) DPR 633/72");
		TipoDocFisc TD26 = new TipoDocFisc("TD26",
				"cessione di beni ammortizzabili e per passaggi interni (ex art.36 DPR 633/72)");
		TipoDocFisc TD27 = new TipoDocFisc("TD27", "fattura per autoconsumo o per cessioni gratuite senza rivalsa");
		TipoDocFisc TD28 = new TipoDocFisc("TD28", "acquisti da San Marino con IVA (fattura cartacea)");

		TDFService.save(TD01);
		TDFService.save(TD02);
		TDFService.save(TD03);
		TDFService.save(TD04);
		TDFService.save(TD05);
		TDFService.save(TD06);
		TDFService.save(TD16);
		TDFService.save(TD17);
		TDFService.save(TD18);
		TDFService.save(TD19);
		TDFService.save(TD20);
		TDFService.save(TD21);
		TDFService.save(TD22);
		TDFService.save(TD23);
		TDFService.save(TD24);
		TDFService.save(TD25);
		TDFService.save(TD26);
		TDFService.save(TD27);
		TDFService.save(TD28);

		System.out.println("Application started at http://localhost:8080");
	}

}
