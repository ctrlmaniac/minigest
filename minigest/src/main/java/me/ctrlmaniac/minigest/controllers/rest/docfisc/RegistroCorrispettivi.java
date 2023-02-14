package me.ctrlmaniac.minigest.controllers.rest.docfisc;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Collections;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import me.ctrlmaniac.minigest.entities.docfisc.chiusurafiscale.ChiusuraFiscale;
import me.ctrlmaniac.minigest.entities.docfisc.chiusurafiscale.ChiusuraFiscaleReparto;
import me.ctrlmaniac.minigest.entities.negozio.Negozio;
import me.ctrlmaniac.minigest.models.corrispettivi.Corrispettivo;
import me.ctrlmaniac.minigest.models.corrispettivi.Registro;
import me.ctrlmaniac.minigest.models.corrispettivi.Reparto;
import me.ctrlmaniac.minigest.services.docfisc.chiusurafiscale.ChiusuraFiscaleService;
import me.ctrlmaniac.minigest.services.negozio.NegozioService;

@RestController
@RequestMapping("/api/docfisc/registro-corrispettivi")
public class RegistroCorrispettivi {

	@Autowired
	NegozioService negozioService;

	@Autowired
	ChiusuraFiscaleService cfService;

	@GetMapping("")
	public ResponseEntity<?> get(
			@RequestParam(name = "negozio", required = true) String idNegozio,
			@RequestParam(name = "anno", required = true) String anno,
			@RequestParam(name = "mese", required = true) String mese) {

		Negozio negozio = negozioService.findById(idNegozio);

		if (negozio != null) {
			Calendar calendar = Calendar.getInstance();
			calendar.set(Integer.parseInt(anno), Integer.parseInt(mese) - 1, 1);
			int lastDayOfMonth = calendar.getActualMaximum(Calendar.DATE);
			LocalDate lastDateOfMonth = LocalDate.of(Integer.parseInt(anno), Integer.parseInt(mese), lastDayOfMonth);

			List<LocalDate> dateList = LocalDate.of(Integer.parseInt(anno), Integer.parseInt(mese), 1)
					.datesUntil(lastDateOfMonth).collect(Collectors.toList());

			dateList.add(lastDateOfMonth);

			Set<Double> aliquoteIVASet = new HashSet<>();

			// Crea lista di aliquote IVA
			for (LocalDate date : dateList) {
				List<ChiusuraFiscale> chiusure = cfService.findAllCorrispettivi(negozio, date);

				for (ChiusuraFiscale chiusura : chiusure) {
					for (ChiusuraFiscaleReparto reparto : chiusura.getReparti()) {
						aliquoteIVASet.add(reparto.getAliquota());
					}
				}
			}

			List<Double> aliquoteIVA = new ArrayList<>(aliquoteIVASet);
			Collections.sort(aliquoteIVA);

			// Crea lista di corrispettivi
			List<Corrispettivo> corrispettivi = new ArrayList<>();

			for (LocalDate date : dateList) {
				Corrispettivo corrispettivo = new Corrispettivo();
				double totale = 0;
				int ndf = 0;

				for (ChiusuraFiscale chiusura : cfService.findAllCorrispettivi(negozio, date)) {
					totale += chiusura.getTotale();
					ndf += chiusura.getNumeroDocFisc();

					for (Double aliquotaIVA : aliquoteIVA) {
						double totaleReparto = 0;
						double totaleAnnulli = 0;
						double totaleResi = 0;

						for (ChiusuraFiscaleReparto reparto : chiusura.getRepartiByAliquota(aliquotaIVA)) {
							totaleReparto += reparto.getTotale();
							totaleAnnulli += reparto.getTotaleAnnulli();
							totaleResi += reparto.getTotaleResi();
						}

						BigDecimal bdTotaleReparto = new BigDecimal(totaleReparto);
						bdTotaleReparto = bdTotaleReparto.setScale(2, RoundingMode.HALF_EVEN);

						BigDecimal bdTotaleAnnulli = new BigDecimal(totaleAnnulli);
						bdTotaleAnnulli = bdTotaleAnnulli.setScale(2, RoundingMode.HALF_EVEN);

						BigDecimal bdTotaleResi = new BigDecimal(totaleResi);
						bdTotaleResi = bdTotaleResi.setScale(2, RoundingMode.HALF_EVEN);

						Reparto reparto = new Reparto();
						reparto.setAliquota(aliquotaIVA);
						reparto.setTotale(bdTotaleReparto.doubleValue());
						reparto.setAnnulli(bdTotaleAnnulli.doubleValue());
						reparto.setResi(bdTotaleResi.doubleValue());

						corrispettivo.getReparti().put(aliquotaIVA, reparto);
					}
				}

				BigDecimal bdTotale = new BigDecimal(totale);
				bdTotale = bdTotale.setScale(2, RoundingMode.HALF_EVEN);

				corrispettivo.setData(date);
				corrispettivo.setTotale(bdTotale.doubleValue());
				corrispettivo.setNumeroDocFisc(ndf);
				corrispettivi.add(corrispettivo);
			}

			Collections.sort(corrispettivi, (c1, c2) -> c1.getData().compareTo(c2.getData()));

			Registro registro = new Registro();
			registro.setAliquoteIVA(new HashSet<>(aliquoteIVA));
			registro.setCorrispettivi(corrispettivi);

			return new ResponseEntity<>(registro, HttpStatus.OK);
		}

		return new ResponseEntity<>("Negozio non trovato", HttpStatus.NOT_FOUND);
	}
}
