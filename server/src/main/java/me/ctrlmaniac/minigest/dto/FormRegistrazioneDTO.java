package me.ctrlmaniac.minigest.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import me.ctrlmaniac.minigest.entitities.Negozio;
import me.ctrlmaniac.minigest.entitities.account.Account;
import me.ctrlmaniac.minigest.entitities.azienda.Azienda;
import me.ctrlmaniac.minigest.entitities.azienda.AziendaIndirizzo;

@Data
@AllArgsConstructor
public class FormRegistrazioneDTO {
	private Account account;
	private Azienda azienda;
	private AziendaIndirizzo sede;
	private Negozio negozio;
}
