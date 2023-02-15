package me.ctrlmaniac.minigest;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;
import java.util.Random;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

import lombok.extern.slf4j.Slf4j;
import me.ctrlmaniac.minigest.entities.account.Account;
import me.ctrlmaniac.minigest.entities.azienda.Azienda;
import me.ctrlmaniac.minigest.entities.azienda.AziendaIndirizzo;
import me.ctrlmaniac.minigest.entities.docfisc.TipoDocFisc;
import me.ctrlmaniac.minigest.entities.docfisc.chiusurafiscale.ChiusuraFiscale;
import me.ctrlmaniac.minigest.entities.docfisc.chiusurafiscale.ChiusuraFiscaleReparto;
import me.ctrlmaniac.minigest.entities.docfisc.fattura.Fattura;
import me.ctrlmaniac.minigest.entities.docfisc.fattura.FatturaReparto;
import me.ctrlmaniac.minigest.entities.docfisc.fattura.FatturaScadenza;
import me.ctrlmaniac.minigest.entities.fisco.f24.F24;
import me.ctrlmaniac.minigest.entities.fisco.f24.F24SezioneAltriEnti;
import me.ctrlmaniac.minigest.entities.fisco.f24.F24SezioneErario;
import me.ctrlmaniac.minigest.entities.fisco.f24.F24SezioneErarioReparto;
import me.ctrlmaniac.minigest.entities.fisco.f24.F24SezioneInail;
import me.ctrlmaniac.minigest.entities.fisco.f24.F24SezioneInps;
import me.ctrlmaniac.minigest.entities.fisco.f24.F24SezioneRegioni;
import me.ctrlmaniac.minigest.entities.fisco.f24.F24SezioneTributiLocali;
import me.ctrlmaniac.minigest.entities.fisco.f24.F24SezioneTributiLocaliReparto;
import me.ctrlmaniac.minigest.entities.negozio.Negozio;
import me.ctrlmaniac.minigest.services.account.AccountRuoloService;
import me.ctrlmaniac.minigest.services.account.AccountService;
import me.ctrlmaniac.minigest.services.azienda.AziendaIndirizzoService;
import me.ctrlmaniac.minigest.services.azienda.AziendaService;
import me.ctrlmaniac.minigest.services.docfisc.TipoDocFiscService;
import me.ctrlmaniac.minigest.services.docfisc.chiusurafiscale.ChiusuraFiscaleRepartoService;
import me.ctrlmaniac.minigest.services.docfisc.chiusurafiscale.ChiusuraFiscaleService;
import me.ctrlmaniac.minigest.services.docfisc.fattura.FatturaRepartoService;
import me.ctrlmaniac.minigest.services.docfisc.fattura.FatturaScadenzaService;
import me.ctrlmaniac.minigest.services.docfisc.fattura.FatturaService;
import me.ctrlmaniac.minigest.services.fisco.f24.F24Service;
import me.ctrlmaniac.minigest.services.fisco.f24.F24SezioneErarioRepartoService;
import me.ctrlmaniac.minigest.services.fisco.f24.F24SezioneErarioService;
import me.ctrlmaniac.minigest.services.fisco.f24.F24SezioneInailService;
import me.ctrlmaniac.minigest.services.fisco.f24.F24SezioneInpsService;
import me.ctrlmaniac.minigest.services.fisco.f24.F24SezioneRegioniService;
import me.ctrlmaniac.minigest.services.fisco.f24.F24SezioneTributiLocaliRepartoService;
import me.ctrlmaniac.minigest.services.fisco.f24.F24SezioneTributiLocaliService;
import me.ctrlmaniac.minigest.services.fisco.f24.F24SezioneAltriEntiService;
import me.ctrlmaniac.minigest.services.negozio.NegozioService;

@Component
@Order(2)
@Slf4j
public class DummyRunner implements CommandLineRunner {

	@Autowired
	AccountService accountService;

	@Autowired
	AccountRuoloService accountRuoloService;

	@Autowired
	AziendaIndirizzoService aziendaIndirizzoService;

	@Autowired
	AziendaService aziendaService;

	@Autowired
	NegozioService negozioService;

	@Autowired
	ChiusuraFiscaleService chiusuraFiscaleService;

	@Autowired
	ChiusuraFiscaleRepartoService chiusuraFiscaleRepartoService;

	@Autowired
	TipoDocFiscService tipoDocFiscService;

	@Autowired
	FatturaService fatturaService;

	@Autowired
	FatturaRepartoService fatturaRepartoService;

	@Autowired
	FatturaScadenzaService fatturaScadenzaService;

	@Autowired
	F24Service f24Service;

	@Autowired
	F24SezioneErarioService f24SezioneErarioService;

	@Autowired
	F24SezioneErarioRepartoService f24SezioneErarioRepartoService;

	@Autowired
	F24SezioneInpsService f24SezioneInpsService;

	@Autowired
	F24SezioneRegioniService f24SezioneRegioniService;

	@Autowired
	F24SezioneTributiLocaliService f24SezioneTributiLocaliService;

	@Autowired
	F24SezioneTributiLocaliRepartoService f24SezioneTributiLocaliRepartoService;

	@Autowired
	F24SezioneInailService f24SezioneInailService;

	@Autowired
	F24SezioneAltriEntiService f24SezioneAltriEntiService;

	@Value("${admin.email}")
	private String adminEmail;

	@Override
	public void run(String... args) throws Exception {
		log.info("Excecuting dummy");
		Account admin = accountService.findByEmail(adminEmail);

		// Crea un secondo utente
		Account account = new Account("mario@email.com", "Mario", "Rossi", "12345", true, true, true, true);
		accountService.save(account);

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
		shop.addUtente(admin);
		aziendaService.save(shop);

		// Crea un negozio
		Negozio larapidaNegozio = new Negozio(larapida, "La Rapida Molinetto");
		negozioService.save(larapidaNegozio);

		// Crea una fattura
		TipoDocFisc TD01 = tipoDocFiscService.findByCodice("TD01");

		Fattura ft1 = new Fattura(larapida, shop, TD01, LocalDate.now().minusWeeks(2),
				LocalDate.now().minusWeeks(1), "12345", 122);
		fatturaService.save(ft1);

		FatturaReparto ft1Reparto1 = new FatturaReparto(ft1, 22, 100, 22);
		fatturaRepartoService.save(ft1Reparto1);

		FatturaScadenza ft1Scadenza1 = new FatturaScadenza(ft1, ft1.getDataSDI(), 122);
		fatturaScadenzaService.save(ft1Scadenza1);

		// Crea una seconda fattura
		Fattura ft2 = new Fattura(larapida, shop, TD01, LocalDate.now().minusDays(2),
				LocalDate.now().plusWeeks(1), "12345", 122);
		fatturaService.save(ft2);

		FatturaReparto ft1Reparto2 = new FatturaReparto(ft2, 22, 100, 22);
		fatturaRepartoService.save(ft1Reparto2);

		/**
		 * Crea delle chiusure fiscali
		 */
		Calendar calendar = Calendar.getInstance();
		calendar.set(LocalDate.now().getYear(), LocalDate.now().getMonthValue() - 1, 1);
		int lastDayOfMonth = calendar.getActualMaximum(Calendar.DATE);
		LocalDate lastDateOfMonth = LocalDate.of(LocalDate.now().getYear(),
				LocalDate.now().getMonthValue(),
				lastDayOfMonth);

		List<LocalDate> dateList = LocalDate.of(LocalDate.now().getYear(),
				LocalDate.now().getMonthValue(), 1)
				.datesUntil(lastDateOfMonth).collect(Collectors.toList());

		dateList.add(lastDateOfMonth);

		List<Double> aliquote = new ArrayList<>();
		aliquote.add(4.00);
		aliquote.add(10.00);
		aliquote.add(22.00);

		for (LocalDate giorno : dateList) {
			Random r = new Random();
			double totale = 100 + (500 - 100) * r.nextDouble();
			int ndf = r.nextInt(51 - 10) + 10;

			BigDecimal tot = new BigDecimal(totale);
			tot = tot.setScale(2, RoundingMode.HALF_UP);

			List<Double> aliquoteIVA = new ArrayList<>();
			while (aliquoteIVA.size() < 2) {
				aliquoteIVA.add(aliquote.get(r.nextInt(aliquote.size())));
			}

			ChiusuraFiscale chiusura = new ChiusuraFiscale(larapidaNegozio, giorno, tot.doubleValue(), ndf);
			chiusuraFiscaleService.save(chiusura);

			double totaleReparto1 = totale / 2;
			BigDecimal totReparto1 = new BigDecimal(totaleReparto1);
			totReparto1 = totReparto1.setScale(2, RoundingMode.HALF_UP);

			double totaleReparto2 = totale - totaleReparto1;

			ChiusuraFiscaleReparto reparto1 = new ChiusuraFiscaleReparto(chiusura, aliquoteIVA.get(0),
					totReparto1.doubleValue(),
					0,
					0);
			chiusuraFiscaleRepartoService.save(reparto1);

			ChiusuraFiscaleReparto reparto2 = new ChiusuraFiscaleReparto(chiusura, aliquoteIVA.get(1),
					totale - totaleReparto2,
					0,
					0);
			chiusuraFiscaleRepartoService.save(reparto2);
		}

		/**
		 * CREA UN F24
		 */

		F24 f24 = new F24(admin, LocalDate.now());
		f24Service.save(f24);

		// Sezione erario
		F24SezioneErario f24SezioneErario = new F24SezioneErario(f24, null, null, null);
		f24SezioneErarioService.save(f24SezioneErario);

		F24SezioneErarioReparto f24SezioneErarioReparto = new F24SezioneErarioReparto(f24SezioneErario, "6031",
				null, String.valueOf(LocalDate.now().getYear()), 2500.00, 600.00);
		f24SezioneErarioRepartoService.save(f24SezioneErarioReparto);

		// Sezione INPS
		F24SezioneInps f24SezioneInps = new F24SezioneInps(f24, "4955", "PXXR", "1234567890", "01",
				String.valueOf(LocalDate.now().getYear()), "12", String.valueOf(LocalDate.now().getYear()), 900.00,
				0.00);
		f24SezioneInpsService.save(f24SezioneInps);

		// Sezione Regioni
		F24SezioneRegioni f24SezioneRegioni = new F24SezioneRegioni(f24, "08", "3801", "0101",
				String.valueOf(LocalDate.now().getYear()), 180.0, 0.0);
		f24SezioneRegioniService.save(f24SezioneRegioni);

		// Sezione IMU e Altri Tributi Locali
		F24SezioneTributiLocali f24SezioneTributiLocali = new F24SezioneTributiLocali(f24, 0.0, null);
		f24SezioneTributiLocaliService.save(f24SezioneTributiLocali);

		F24SezioneTributiLocaliReparto f24SezioneTributiLocaliReparto = new F24SezioneTributiLocaliReparto(
				f24SezioneTributiLocali, "99", false, false, false, false, 0, "3844", "0101",
				String.valueOf(LocalDate.now().getYear()), 84.0, 0);
		f24SezioneTributiLocaliRepartoService.save(f24SezioneTributiLocaliReparto);

		// Sezione INAIL
		F24SezioneInail f24SezioneInail = new F24SezioneInail(f24, "N11-36", "123456789", "15", "12345", "P15", 350.0,
				0.0);
		f24SezioneInailService.save(f24SezioneInail);

		// Sezione Altri Enti
		F24SezioneAltriEnti f24SezioneAltriEnti = new F24SezioneAltriEnti(f24, "0011", null, "E085", null, "01",
				String.valueOf(LocalDate.now().getYear()), "12", String.valueOf(LocalDate.now().getYear()), 1150.0,
				0.0);
		f24SezioneAltriEntiService.save(f24SezioneAltriEnti);

	}

}
