package me.ctrlmaniac.minigest.payloads.account;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import me.ctrlmaniac.minigest.entities.azienda.Azienda;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Register {
	private String nome;
	private String cognome;
	private String email;
	private Azienda azienda;
}
