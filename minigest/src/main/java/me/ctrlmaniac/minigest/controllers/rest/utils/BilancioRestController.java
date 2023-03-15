package me.ctrlmaniac.minigest.controllers.rest.utils;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.security.Principal;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import java.util.HashSet;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestParam;

import me.ctrlmaniac.minigest.services.account.AccountService;
import me.ctrlmaniac.minigest.services.docfisc.fattura.FatturaService;
import me.ctrlmaniac.minigest.services.docfisc.chiusurafiscale.ChiusuraFiscaleService;
import me.ctrlmaniac.minigest.entities.account.Account;
import me.ctrlmaniac.minigest.entities.azienda.Azienda;
import me.ctrlmaniac.minigest.entities.negozio.Negozio;
import me.ctrlmaniac.minigest.models.bilancio.Bilancio;
import me.ctrlmaniac.minigest.models.bilancio.BilancioMode;
import me.ctrlmaniac.minigest.models.bilancio.Reparto;
import me.ctrlmaniac.minigest.entities.docfisc.fattura.Fattura;
import me.ctrlmaniac.minigest.entities.docfisc.fattura.FatturaReparto;
import me.ctrlmaniac.minigest.entities.docfisc.chiusurafiscale.ChiusuraFiscale;
import me.ctrlmaniac.minigest.entities.docfisc.chiusurafiscale.ChiusuraFiscaleReparto;

@RestController
@RequestMapping("/api/utils/bilancio")
public class BilancioRestController {

	@Autowired
	AccountService accountService;

	@Autowired
	FatturaService fatturaService;

	@Autowired
	ChiusuraFiscaleService chiusuraService;

	@GetMapping("")
	public ResponseEntity<?> get(Principal principal, @RequestParam(name = "anno", required = false) String anno,
			@RequestParam(name = "mese", required = false) String mese) {
		anno = anno == null ? String.valueOf(LocalDate.now().getYear()) : anno;
		mese = mese == null ? String.valueOf(LocalDate.now().getMonthValue()) : mese;

		if (principal != null) {
			Account account = accountService.findByEmail(principal.getName());

			if (account != null) {
				Azienda azienda = account.getAzienda();
				List<Fattura> fattureAcquisto = new ArrayList<>();
				List<Fattura> fattureVendita = new ArrayList<>();
				List<ChiusuraFiscale> chiusure = new ArrayList<>();
				Bilancio bilancio = new Bilancio();

				// popola le liste
				fattureAcquisto.addAll(fatturaService.findAllByCommittenteByData(azienda, anno, mese));
				fattureVendita.addAll(fatturaService.findAllByCedenteByData(azienda, anno, mese));

				for (Negozio negozio : azienda.getNegozi()) {
					chiusure.addAll(chiusuraService.findAllByNegozioAndByData(negozio, anno, mese));
				}

				/**
				 * USCITE
				 */
				double totaleUscite = 0.0;
				double totaleUsciteImponibile = 0.0;
				double totaleUsciteImposta = 0.0;
				Set<Double> usciteAliquote = new HashSet<>();
				Set<Reparto> bilancioUsciteReparti = new HashSet<>();
				BilancioMode bilancioUscite = new BilancioMode();

				for (Fattura fattura : fattureAcquisto) {
					totaleUscite += fattura.getTotale();
					totaleUsciteImponibile += fattura.getImponibile();
					totaleUsciteImposta += fattura.getImposta();

					usciteAliquote.addAll(fattura.getAliquoteIVA());
				}

				BigDecimal bdTotaleUscite = new BigDecimal(totaleUscite);
				bdTotaleUscite = bdTotaleUscite.setScale(2, RoundingMode.HALF_EVEN);

				BigDecimal bdTotaleUsciteImponibile = new BigDecimal(totaleUsciteImponibile);
				bdTotaleUsciteImponibile = bdTotaleUsciteImponibile.setScale(2, RoundingMode.HALF_EVEN);

				BigDecimal bdTotaleUsciteImposta = new BigDecimal(totaleUsciteImposta);
				bdTotaleUsciteImposta = bdTotaleUsciteImposta.setScale(2, RoundingMode.HALF_EVEN);

				bilancioUscite.setTotale(bdTotaleUscite.doubleValue());
				bilancioUscite.setImponibile(bdTotaleUsciteImponibile.doubleValue());
				bilancioUscite.setImposta(bdTotaleUsciteImposta.doubleValue());

				for (double aliquota : usciteAliquote) {
					double totale = 0;
					double imponibile = 0;
					double imposta = 0;

					List<FatturaReparto> reparti = new ArrayList<>();

					for (Fattura fattura : fattureAcquisto) {
						reparti.addAll(fattura.getRepartiByAliquota(aliquota));
					}

					for (FatturaReparto reparto : reparti) {
						totale += reparto.getTotale();
						imponibile += reparto.getImponibile();
						imposta += reparto.getImposta();
					}

					BigDecimal bdTotale = new BigDecimal(totale);
					bdTotale = bdTotale.setScale(2, RoundingMode.HALF_EVEN);

					BigDecimal bdImponibile = new BigDecimal(imponibile);
					bdImponibile = bdImponibile.setScale(2, RoundingMode.HALF_EVEN);

					BigDecimal bdImposta = new BigDecimal(imposta);
					bdImposta = bdImposta.setScale(2, RoundingMode.HALF_EVEN);

					Reparto reparto = new Reparto();
					reparto.setAliquota(aliquota);
					reparto.setTotale(bdTotale.doubleValue());
					reparto.setImponibile(bdImponibile.doubleValue());
					reparto.setImposta(bdImposta.doubleValue());

					bilancioUsciteReparti.add(reparto);
				}

				bilancioUscite.setReparti(bilancioUsciteReparti);

				/**
				 * ENTRATE
				 */

				double totaleEntrate = 0;
				double totaleEntrateImponibile = 0;
				double totaleEntrateImposta = 0;
				Set<Double> entrateAliquote = new HashSet<>();
				Set<Reparto> bilancioEntrateReparti = new HashSet<>();
				BilancioMode bilancioEntrate = new BilancioMode();

				for (ChiusuraFiscale chiusura : chiusure) {
					entrateAliquote.addAll(chiusura.getAliquoteIVA());
					totaleEntrate += chiusura.getTotale();
					totaleEntrateImponibile += chiusura.getImponibile();
					totaleEntrateImposta += chiusura.getImposta();
				}

				for (Fattura fattura : fattureVendita) {
					entrateAliquote.addAll(fattura.getAliquoteIVA());
					totaleEntrate += fattura.getTotale();
					totaleEntrateImponibile += fattura.getImponibile();
					totaleEntrateImposta += fattura.getImposta();
				}

				BigDecimal bdTotaleEntrate = new BigDecimal(totaleEntrate);
				bdTotaleEntrate = bdTotaleEntrate.setScale(2, RoundingMode.HALF_EVEN);

				BigDecimal bdTotaleEntrateImponibile = new BigDecimal(totaleEntrateImponibile);
				bdTotaleEntrateImponibile = bdTotaleEntrateImponibile.setScale(2, RoundingMode.HALF_EVEN);

				BigDecimal bdTotaleEntrateImposta = new BigDecimal(totaleEntrateImposta);
				bdTotaleEntrateImposta = bdTotaleEntrateImposta.setScale(2, RoundingMode.HALF_EVEN);

				bilancioEntrate.setTotale(bdTotaleEntrate.doubleValue());
				bilancioEntrate.setImponibile(bdTotaleEntrateImponibile.doubleValue());
				bilancioEntrate.setImposta(bdTotaleEntrateImposta.doubleValue());

				for (double aliquota : entrateAliquote) {
					double totale = 0;
					double imponibile = 0;
					double imposta = 0;

					for (ChiusuraFiscale chiusura : chiusure) {
						for (ChiusuraFiscaleReparto reparto : chiusura.getRepartiByAliquota(aliquota)) {
							totale += reparto.getTotale();
							imponibile += reparto.getImponibile();
							imposta += reparto.getImposta();
						}
					}

					for (Fattura fattura : fattureVendita) {
						for (FatturaReparto reparto : fattura.getRepartiByAliquota(aliquota)) {
							totale += reparto.getTotale();
							imponibile += reparto.getImponibile();
							imposta += reparto.getImposta();
						}
					}

					BigDecimal bdTotale = new BigDecimal(totale);
					bdTotale = bdTotale.setScale(2, RoundingMode.HALF_EVEN);

					BigDecimal bdImponibile = new BigDecimal(imponibile);
					bdImponibile = bdImponibile.setScale(2, RoundingMode.HALF_EVEN);

					BigDecimal bdImposta = new BigDecimal(imposta);
					bdImposta = bdImposta.setScale(2, RoundingMode.HALF_EVEN);

					Reparto reparto = new Reparto();
					reparto.setAliquota(aliquota);
					reparto.setTotale(bdTotale.doubleValue());
					reparto.setImponibile(bdImponibile.doubleValue());
					reparto.setImposta(bdImposta.doubleValue());

					bilancioEntrateReparti.add(reparto);
				}

				bilancioEntrate.setReparti(bilancioEntrateReparti);

				/**
				 * BILANCIO
				 */
				bilancio.setEntrate(bilancioEntrate);
				bilancio.setUscite(bilancioUscite);

				return new ResponseEntity<>(bilancio, HttpStatus.OK);
			}
		}

		return new ResponseEntity<>("Account non trovato", HttpStatus.NOT_FOUND);
	}
}
