package me.ctrlmaniac.minigest.payloads.auth;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PasswordReset {
	private String token;
	private String password;
}
