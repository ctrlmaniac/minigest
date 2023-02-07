package me.ctrlmaniac.minigest.payloads;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class RequestPasswordResetPayload {
	private String email;
}
