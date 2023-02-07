package me.ctrlmaniac.minigest.payloads;

import java.util.Set;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import me.ctrlmaniac.minigest.entitities.account.AccountRole;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UpdateRolesPayload {
	private Set<AccountRole> roles;
}
