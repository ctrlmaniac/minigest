package me.ctrlmaniac.minigest.payloads.auth;

import java.util.HashMap;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import me.ctrlmaniac.minigest.entities.azienda.Azienda;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Register {
	private String email;
	private String nome;
	private String cognome;
	private String password;
	private Azienda azienda;
	private HashMap<String, String> addMeTo = new HashMap<>();
}
