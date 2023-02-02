package me.ctrlmaniac.minigest.dto;

import java.time.LocalDate;
import java.util.List;

import lombok.Data;
import me.ctrlmaniac.minigest.entitities.Negozio;
import me.ctrlmaniac.minigest.entitities.docfisc.chiusurafiscale.ChiusuraFiscaleReparto;

@Data
public class ChiusuraFiscaleDTO {
	private Negozio negozio;
	private LocalDate data;
	private double totale;
	private int numeroDocFisc;
	private List<ChiusuraFiscaleReparto> reparti;

	public ChiusuraFiscaleDTO(Negozio negozio, LocalDate data, double totale, int numeroDocFisc,
			List<ChiusuraFiscaleReparto> reparti) {
		this.negozio = negozio;
		this.data = data;
		this.totale = totale;
		this.numeroDocFisc = numeroDocFisc;
		this.reparti = reparti;
	}

}
