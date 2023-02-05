package me.ctrlmaniac.minigest.dto;

import lombok.Data;
import me.ctrlmaniac.minigest.entitities.Account;
import me.ctrlmaniac.minigest.entitities.Negozio;
import me.ctrlmaniac.minigest.entitities.azienda.Azienda;
import me.ctrlmaniac.minigest.entitities.azienda.AziendaIndirizzo;

@Data
public class FormRegistrazioneDTO {
	private Account account;
	private Azienda azienda;
	private AziendaIndirizzo sede;
	private Negozio negozio;

	public FormRegistrazioneDTO(Account account, Azienda azienda, AziendaIndirizzo sede, Negozio negozio) {
		this.account = account;
		this.azienda = azienda;
		this.sede = sede;
		this.negozio = negozio;
	}

}
