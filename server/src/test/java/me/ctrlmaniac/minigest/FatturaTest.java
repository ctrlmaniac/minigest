package me.ctrlmaniac.minigest;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertEquals;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import me.ctrlmaniac.minigest.services.azienda.AziendaService;
import me.ctrlmaniac.minigest.services.docfisc.TipoDocFiscService;
import me.ctrlmaniac.minigest.services.docfisc.fattura.FatturaService;
import me.ctrlmaniac.minigest.services.docfisc.fattura.FatturaRepartoService;
import me.ctrlmaniac.minigest.entitities.docfisc.fattura.Fattura;
import me.ctrlmaniac.minigest.entitities.docfisc.fattura.FatturaReparto;
import me.ctrlmaniac.minigest.entitities.docfisc.TipoDocFisc;
import me.ctrlmaniac.minigest.entitities.azienda.Azienda;
import me.ctrlmaniac.minigest.dto.FatturaDTO;

@SpringBootTest
public class FatturaTest {

	@Autowired
	AziendaService aziendaService;

	@Autowired
	TipoDocFiscService tipoDocFiscService;

	@Autowired
	FatturaService fatturaService;

	@Autowired
	FatturaRepartoService fatturaRepartoService;

	@Test
	void testFatturaCreation() {
		// Crea azienda cedente
		Azienda cedente = new Azienda(null, "Cedente", null, "IT", "12345678901", "12345678901", null, null, null);
		aziendaService.save(cedente);

		// Crea azienda committente
		Azienda committente = new Azienda(null, "Committente", null, "IT", "09876543212", "09876543212", null, null,
				null);
		aziendaService.save(committente);

		// Carica tipo documento fiscale (fattura)
		TipoDocFisc TD01 = tipoDocFiscService.getByCodice("TD01");

		// Crea una fattura
		FatturaDTO fatturaDTO = new FatturaDTO(cedente, committente, TD01, LocalDate.now(),
				LocalDate.now().plusWeeks(1),
				"100",
				1000, null, null, null);
		Fattura fattura = fatturaService.save(fatturaDTO);
		assertNotNull(fattura);

		// Creazione di un reparto
		FatturaReparto ftReparto1 = new FatturaReparto(fattura, 22, 819.67, 180.33);
		fatturaRepartoService.save(ftReparto1);

		List<FatturaReparto> reparti = new ArrayList<>();
		reparti.add(ftReparto1);

		fattura.setReparti(reparti);

		assertNotNull(fattura.getReparti());

		assertEquals(fattura.getImponibile(), 819.67);
		assertEquals(fattura.getImposta(), 180.33);
	}
}
