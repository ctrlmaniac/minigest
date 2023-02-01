package me.ctrlmaniac.minigest.services.docfisc.fattura;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import me.ctrlmaniac.minigest.entitities.docfisc.fattura.FatturaPagamento;
import me.ctrlmaniac.minigest.repositories.docfisc.fattura.FatturaPagamentoRepo;

@Service
public class FatturaPagamentoService {

	@Autowired
	FatturaPagamentoRepo fatturaPagamentoRepo;

	public FatturaPagamento get(String id) {
		Optional<FatturaPagamento> pagamentoOpt = fatturaPagamentoRepo.findById(id);

		if (pagamentoOpt.isPresent()) {
			return pagamentoOpt.get();
		}

		return null;
	}

	public FatturaPagamento save(FatturaPagamento p) {
		return fatturaPagamentoRepo.save(p);
	}

	public List<FatturaPagamento> getAll() {
		return fatturaPagamentoRepo.findAll();
	}

	public void deleteById(String id) {
		fatturaPagamentoRepo.deleteById(id);
	}

	public FatturaPagamento update(String id, FatturaPagamento newPagamento) {
		Optional<FatturaPagamento> pagamentoOpt = fatturaPagamentoRepo.findById(id);

		if (pagamentoOpt.isPresent()) {
			FatturaPagamento oldPagamento = pagamentoOpt.get();

			oldPagamento.setData(newPagamento.getData());
			oldPagamento.setImporto(newPagamento.getImporto());

			return fatturaPagamentoRepo.save(oldPagamento);
		}

		return null;
	}
}
