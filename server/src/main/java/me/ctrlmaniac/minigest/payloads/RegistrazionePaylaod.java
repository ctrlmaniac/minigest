package me.ctrlmaniac.minigest.payloads;

import lombok.AllArgsConstructor;
import lombok.Data;
import me.ctrlmaniac.minigest.entitities.Negozio;
import me.ctrlmaniac.minigest.entitities.account.Account;
import me.ctrlmaniac.minigest.entitities.azienda.Azienda;
import me.ctrlmaniac.minigest.entitities.azienda.AziendaIndirizzo;

@Data
@AllArgsConstructor
public class RegistrazionePaylaod {
	private Account account;
	private Azienda azienda;
	private AziendaIndirizzo sede;
	private Negozio negozio;
}
