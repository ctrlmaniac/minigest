package me.ctrlmaniac.minigest.payloads;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import me.ctrlmaniac.minigest.entitities.account.Account;
import me.ctrlmaniac.minigest.entitities.azienda.Azienda;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AddAccountToAziendaPayload {
	private Azienda azienda;
	private Account account;
}
