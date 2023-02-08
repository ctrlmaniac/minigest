package me.ctrlmaniac.minigest.controllers.rest.docfisc;

import org.springframework.http.HttpStatus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import me.ctrlmaniac.minigest.entities.docfisc.TipoDocFisc;
import me.ctrlmaniac.minigest.services.docfisc.TipoDocFiscService;

import java.util.List;

@RestController
@RequestMapping("/api/docfisc/tipo")
public class TipoDocFiscRestController {

	@Autowired
	private TipoDocFiscService service;

	@GetMapping("")
	public ResponseEntity<List<TipoDocFisc>> findAll() {
		return new ResponseEntity<>(service.findAll(), HttpStatus.OK);
	}

}
