package me.ctrlmaniac.minigest.payloads.account;

import java.util.Set;
import java.util.HashSet;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import me.ctrlmaniac.minigest.entities.account.AccountRuolo;
import me.ctrlmaniac.minigest.entities.azienda.Azienda;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Update {
	private String email;

	private String nome;
	private String cognome;
	private boolean enabled;
	private boolean credentialsNonExpired;
	private boolean accountNonExpired;
	private boolean accountNonLocked;
	private Set<AccountRuolo> authorities = new HashSet<>();
	Set<Azienda> aziende = new HashSet<>();
}
