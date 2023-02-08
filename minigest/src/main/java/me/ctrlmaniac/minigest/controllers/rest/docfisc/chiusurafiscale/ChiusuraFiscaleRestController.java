package me.ctrlmaniac.minigest.controllers.rest.docfisc.chiusurafiscale;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import me.ctrlmaniac.minigest.entities.docfisc.chiusurafiscale.ChiusuraFiscale;
import me.ctrlmaniac.minigest.services.docfisc.chiusurafiscale.ChiusuraFiscaleService;

@RestController
@RequestMapping("/api/docfisc/chiusure-fiscali")
public class ChiusuraFiscaleRestController {

	@Autowired
	private ChiusuraFiscaleService service;

	@GetMapping("")
	public List<ChiusuraFiscale> findAll(@RequestParam(name = "negozio", required = true) String idNegozio) {
		return service.findAll(idNegozio);
	}
}
