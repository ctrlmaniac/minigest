package me.ctrlmaniac.minigest.controllers.rest.docfisc.fattura;

import java.io.File;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Set;
import java.util.HashSet;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.XMLConstants;

import org.springframework.web.multipart.MultipartFile;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.w3c.dom.Document;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;

import me.ctrlmaniac.minigest.entities.azienda.Azienda;
import me.ctrlmaniac.minigest.entities.azienda.AziendaIndirizzo;
import me.ctrlmaniac.minigest.entities.docfisc.TipoDocFisc;
import me.ctrlmaniac.minigest.entities.docfisc.fattura.Fattura;
import me.ctrlmaniac.minigest.entities.docfisc.fattura.FatturaReparto;
import me.ctrlmaniac.minigest.services.azienda.AziendaIndirizzoService;
import me.ctrlmaniac.minigest.services.azienda.AziendaService;
import me.ctrlmaniac.minigest.services.docfisc.TipoDocFiscService;
import me.ctrlmaniac.minigest.services.docfisc.fattura.FatturaRepartoService;
import me.ctrlmaniac.minigest.services.docfisc.fattura.FatturaService;

@RestController
@RequestMapping("/api/docfisc/fatture")
public class FatturaUploadRestController {

	private DocumentBuilderFactory dbf = DocumentBuilderFactory.newInstance();

	@Autowired
	private AziendaService aziendaService;

	@Autowired
	private AziendaIndirizzoService aziendaIndirizzoService;

	@Autowired
	private TipoDocFiscService tipoDocFiscService;

	@Autowired
	private FatturaService fatturaService;

	@Autowired
	private FatturaRepartoService fatturaRepartoService;

	public Azienda getAzienda(Document doc, String tipo) {
		NodeList list = doc.getElementsByTagName(tipo);
		Node aziendaNode = null;
		Node datiAnagrafici = null;
		String denominazione = null;
		String idFiscaleIVAPaese = null;
		String idFiscaleIVACodice = null;
		String codiceFiscale = null;

		Node sede = null;
		String indirizzo = null;
		String numeroCivico = null;
		String cap = null;
		String comune = null;
		String provincia = null;
		String nazione = null;

		for (int i = 0; i < list.getLength(); i++) {
			Node child = list.item(i);

			if (child.getNodeName() == tipo) {
				aziendaNode = child;
			}
		}

		if (aziendaNode != null) {
			for (int i = 0; i < aziendaNode.getChildNodes().getLength(); i++) {
				Node child = aziendaNode.getChildNodes().item(i);

				switch (child.getNodeName()) {
					case "DatiAnagrafici":
						datiAnagrafici = child;
						break;

					case "Sede":
						sede = child;

					default:
						break;
				}
			}
		}

		if (datiAnagrafici != null) {
			for (int i = 0; i < datiAnagrafici.getChildNodes().getLength(); i++) {
				Node child = datiAnagrafici.getChildNodes().item(i);

				if (child.getNodeName() == "IdFiscaleIVA") {
					for (int j = 0; j < child.getChildNodes().getLength(); j++) {
						Node idFiscaleIVAChild = child.getChildNodes().item(j);

						switch (idFiscaleIVAChild.getNodeName()) {
							case "IdPaese":
								idFiscaleIVAPaese = idFiscaleIVAChild.getTextContent();
								break;

							case "IdCodice":
								idFiscaleIVACodice = idFiscaleIVAChild.getTextContent();

							default:
								break;
						}
					}
				} else if (child.getNodeName() == "CodiceFiscale") {
					codiceFiscale = child.getTextContent();
				} else if (child.getNodeName() == "Anagrafica") {
					for (int j = 0; j < child.getChildNodes().getLength(); j++) {
						Node anagraficaChild = child.getChildNodes().item(j);

						if (anagraficaChild.getNodeName() == "Denominazione") {
							denominazione = anagraficaChild.getTextContent();
						}
					}
				}
			}
		}

		if (sede != null) {
			for (int i = 0; i < sede.getChildNodes().getLength(); i++) {
				Node child = sede.getChildNodes().item(i);

				switch (child.getNodeName()) {
					case "Indirizzo":
						indirizzo = child.getTextContent();
						break;

					case "NumeroCivico":
						numeroCivico = child.getTextContent();
						break;

					case "CAP":
						cap = child.getTextContent();
						break;

					case "Comune":
						comune = child.getTextContent();
						break;

					case "Provincia":
						provincia = child.getTextContent();
						break;

					case "Nazione":
						nazione = child.getTextContent();
						break;

					default:
						break;
				}
			}
		}

		Azienda azienda = aziendaService.findByIdFiscaleIVAPaeseAndIdFiscaleIVACodiceAndCodiceFiscale(idFiscaleIVAPaese,
				idFiscaleIVACodice, codiceFiscale);

		Azienda aziendaBis = aziendaService.findByIdFiscaleIVAPaeseAndIdFiscaleIVACodice(idFiscaleIVAPaese,
				idFiscaleIVACodice);

		if (azienda != null || aziendaBis != null) {
			if (azienda == null) {
				return aziendaBis;
			} else {
				return azienda;
			}
		} else {
			AziendaIndirizzo aziendaIndirizzo = new AziendaIndirizzo(indirizzo, numeroCivico, cap, comune, provincia,
					nazione);
			aziendaIndirizzoService.save(aziendaIndirizzo);

			Azienda newAzienda = new Azienda(null, denominazione, null, idFiscaleIVAPaese, idFiscaleIVACodice,
					codiceFiscale, aziendaIndirizzo, null, null);

			return aziendaService.save(newAzienda);
		}
	}

	public Fattura saveFattura(Document doc, Azienda cedente, Azienda committente, String filepath) {
		Node datiGeneraliDocumento = null;
		TipoDocFisc tipoDocumento = null;
		LocalDate data = null;
		String numero = null;
		double totale = 0.0;

		NodeList datiGenerali = doc.getElementsByTagName("DatiGeneraliDocumento");

		for (int i = 0; i < datiGenerali.getLength(); i++) {
			Node node = datiGenerali.item(i);

			if (node.getNodeName() == "DatiGeneraliDocumento") {
				datiGeneraliDocumento = node;
			}
		}

		if (datiGeneraliDocumento != null) {
			for (int i = 0; i < datiGeneraliDocumento.getChildNodes().getLength(); i++) {
				Node node = datiGeneraliDocumento.getChildNodes().item(i);
				String content = node.getTextContent();

				switch (node.getNodeName()) {
					case "TipoDocumento":
						tipoDocumento = tipoDocFiscService.findByCodice(content);
						break;

					case "Data":
						DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-d");
						data = LocalDate.parse(content, formatter);
						break;

					case "Numero":
						numero = content;
						break;

					case "ImportoTotaleDocumento":
						totale = Double.parseDouble(content);
						break;

					default:
						break;
				}
			}
		}

		if (tipoDocumento == null) {
			tipoDocumento = tipoDocFiscService.findByCodice("TD01");
		}

		Fattura fattura = new Fattura(cedente, committente, tipoDocumento, data, null, numero, totale, filepath);

		return fatturaService.save(fattura);
	}

	public Set<FatturaReparto> saveFatturaReparti(Document doc, Fattura fattura) {
		Set<FatturaReparto> reparti = new HashSet<>();
		NodeList datiRiepilogo = doc.getElementsByTagName("DatiRiepilogo");

		for (int i = 0; i < datiRiepilogo.getLength(); i++) {
			Node node = datiRiepilogo.item(i);
			double aliquota = 0.0;
			double imponibile = 0.0;
			double imposta = 0.0;

			if (node.getNodeName() == "DatiRiepilogo") {
				for (int j = 0; j < node.getChildNodes().getLength(); j++) {
					Node child = node.getChildNodes().item(j);
					String content = child.getTextContent();

					switch (child.getNodeName()) {
						case "AliquotaIVA":
							aliquota = Double.parseDouble(content);
							break;

						case "ImponibileImporto":
							imponibile = Double.parseDouble(content);
							break;

						case "Imposta":
							imposta = Double.parseDouble(content);
							break;

						default:
							break;
					}
				}
			}

			FatturaReparto reparto = new FatturaReparto(fattura, aliquota, imponibile, imposta);
			reparti.add(fatturaRepartoService.save(reparto));
		}

		return reparti;
	}

	@PostMapping("/upload")
	public ResponseEntity<?> upload(@RequestParam("file") MultipartFile file) {
		try {
			String filename = file.getOriginalFilename();
			InputStream is = file.getInputStream();
			Files.copy(is, Paths.get("media/fel/" + filename), StandardCopyOption.REPLACE_EXISTING);

			File convert = new File("media/fel/" + filename);

			dbf.setFeature(XMLConstants.FEATURE_SECURE_PROCESSING, true);

			DocumentBuilder db = dbf.newDocumentBuilder();
			Document doc = db.parse(convert);
			doc.getDocumentElement().normalize();

			Azienda cedente = getAzienda(doc, "CedentePrestatore");
			Azienda committente = getAzienda(doc, "CessionarioCommittente");
			Fattura fattura = saveFattura(doc, cedente, committente, "media/fel/" + convert.getName());
			Set<FatturaReparto> reparti = saveFatturaReparti(doc, fattura);
			fattura.setReparti(reparti);

			return new ResponseEntity<>(fatturaService.save(fattura), HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
		}
	}
}
