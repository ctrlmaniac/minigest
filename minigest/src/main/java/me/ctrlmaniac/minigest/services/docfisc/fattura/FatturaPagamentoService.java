package me.ctrlmaniac.minigest.services.docfisc.fattura;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import me.ctrlmaniac.minigest.entities.docfisc.fattura.FatturaPagamento;
import me.ctrlmaniac.minigest.repositories.docfisc.fattura.FatturaPagamentoRepo;

@Service
public class FatturaPagamentoService {

	@Autowired
	private FatturaPagamentoRepo repo;

	public FatturaPagamento save(FatturaPagamento pagamento) {
		return repo.save(pagamento);
	}

	public void delete(FatturaPagamento pagamento) {
		repo.delete(pagamento);
	}

	public void deleteById(String id) {
		repo.deleteById(id);
	}
}
