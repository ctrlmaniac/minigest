package me.ctrlmaniac.minigest.payloads;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class LoginPayload {
	private String email;
	private String password;

	public LoginPayload(String email, String password) {
		this.email = email;
		this.password = password;
	}
}
