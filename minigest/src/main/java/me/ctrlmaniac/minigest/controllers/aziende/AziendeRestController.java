package me.ctrlmaniac.minigest.controllers.aziende;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;

import me.ctrlmaniac.minigest.entities.azienda.Azienda;
import me.ctrlmaniac.minigest.services.azienda.AziendaService;

@RestController
@RequestMapping("/api/aziende")
public class AziendeRestController {

	@Autowired
	AziendaService aziendaService;

	@GetMapping("")
	public ResponseEntity<List<Azienda>> findAll() {
		return new ResponseEntity<>(aziendaService.findAll(), HttpStatus.OK);
	}

}
