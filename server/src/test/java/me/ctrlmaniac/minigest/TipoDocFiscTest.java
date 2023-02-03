package me.ctrlmaniac.minigest;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import me.ctrlmaniac.minigest.entitities.docfisc.TipoDocFisc;
import me.ctrlmaniac.minigest.services.docfisc.TipoDocFiscService;

@SpringBootTest
public class TipoDocFiscTest {

	@Autowired
	private TipoDocFiscService tipoDocFiscService;

	@Test
	void checkLoadFromCsv() {
		List<TipoDocFisc> lista = tipoDocFiscService.getAll();

		assertNotNull(lista);
		assertEquals(lista.size(), 19);
	}

	@Test
	void checkCodice() {
		TipoDocFisc TD24 = tipoDocFiscService.getByCodice("TD24");

		assertNotNull(TD24);
		assertEquals(TD24.getDescrizione(),
				"fattura differita di cui all'art. 21, comma 4, terzo periodo lett. a) DPR 633/72");
	}
}
