package me.ctrlmaniac.minigest.dto;

import java.util.List;
import java.time.LocalDate;

import me.ctrlmaniac.minigest.entitities.azienda.Azienda;
import me.ctrlmaniac.minigest.entitities.docfisc.TipoDocFisc;
import me.ctrlmaniac.minigest.entitities.docfisc.fattura.FatturaPagamento;
import me.ctrlmaniac.minigest.entitities.docfisc.fattura.FatturaReparto;
import me.ctrlmaniac.minigest.entitities.docfisc.fattura.FatturaScadenza;

import lombok.Data;

@Data
public class FatturaDTO {
	private Azienda cedente;
	private Azienda committente;
	private TipoDocFisc tipoDocumento;
	private LocalDate data;
	private LocalDate dataSDI;
	private String numero;
	private double totale;
	private List<FatturaReparto> reparti;
	private List<FatturaScadenza> scadenze;
	private List<FatturaPagamento> pagamenti;

	public FatturaDTO(Azienda cedente, Azienda committente, TipoDocFisc tipoDocumento, LocalDate data,
			LocalDate dataSDI, String numero, double totale, List<FatturaReparto> reparti,
			List<FatturaScadenza> scadenze, List<FatturaPagamento> pagamenti) {
		this.cedente = cedente;
		this.committente = committente;
		this.tipoDocumento = tipoDocumento;
		this.data = data;
		this.dataSDI = dataSDI;
		this.numero = numero;
		this.totale = totale;
		this.reparti = reparti;
		this.scadenze = scadenze;
		this.pagamenti = pagamenti;
	}

}
