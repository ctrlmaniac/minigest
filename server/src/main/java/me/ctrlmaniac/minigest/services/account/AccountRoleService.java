package me.ctrlmaniac.minigest.services.account;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import me.ctrlmaniac.minigest.entitities.account.AccountRole;
import me.ctrlmaniac.minigest.repositories.account.AccountRoleRepo;

@Service
public class AccountRoleService {

	@Autowired
	private AccountRoleRepo roleRepo;

	public List<AccountRole> findAll() {
		return roleRepo.findAll();
	}
}
