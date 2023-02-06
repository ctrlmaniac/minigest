package me.ctrlmaniac.minigest.entitities.account;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.NoArgsConstructor;
import me.ctrlmaniac.minigest.enums.AccountRoleEnum;

@Data
@NoArgsConstructor
@Entity
public class AccountRole {

	@Id
	@GeneratedValue(strategy = GenerationType.UUID)
	private String id;

	@Enumerated(EnumType.STRING)
	private AccountRoleEnum name;

}
