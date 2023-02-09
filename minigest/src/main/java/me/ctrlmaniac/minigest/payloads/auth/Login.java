package me.ctrlmaniac.minigest.payloads.auth;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class Login {
	private String email;
	private String password;

	public Login(String email, String password) {
		this.email = email;
		this.password = password;
	}
}
