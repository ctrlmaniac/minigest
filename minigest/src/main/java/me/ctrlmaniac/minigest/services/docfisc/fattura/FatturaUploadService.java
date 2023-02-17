package me.ctrlmaniac.minigest.services.docfisc.fattura;

import java.io.File;
import java.util.Optional;

import javax.xml.XMLConstants;
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.w3c.dom.Document;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;

import lombok.extern.slf4j.Slf4j;
import me.ctrlmaniac.minigest.entities.azienda.Azienda;
import me.ctrlmaniac.minigest.entities.docfisc.fattura.Fattura;
import me.ctrlmaniac.minigest.repositories.docfisc.fattura.FatturaRepo;
import me.ctrlmaniac.minigest.repositories.azienda.AziendaRepo;

@Service
@Slf4j
public class FatturaUploadService {

	@Autowired
	FatturaRepo repo;

	@Autowired
	AziendaRepo aziendaRepo;

	DocumentBuilderFactory dbf = DocumentBuilderFactory.newInstance();

	public Fattura importFatturaFromXml(File xml) {

		try {
			Fattura fattura = new Fattura();
			Azienda cedente = null;
			Azienda committente = null;

			dbf.setFeature(XMLConstants.FEATURE_SECURE_PROCESSING, true);

			DocumentBuilder db = dbf.newDocumentBuilder();

			Document doc = db.parse(xml);

			doc.getDocumentElement().normalize();

			Node fel = doc.getDocumentElement();

			NodeList cessionarioNodeList = doc.getElementsByTagName("CedentePrestatore");
			Node cedentePrestatore = null;

			for (int i = 0; i < cessionarioNodeList.getLength(); i++) {
				Node cessionarioChild = cessionarioNodeList.item(i);

				if (cessionarioChild.getNodeName() == "CedentePrestatore") {
					cedentePrestatore = cessionarioChild;
				}
			}

			if (cedentePrestatore != null) {
				NodeList children = cedentePrestatore.getChildNodes();
				Node datiAnagrafici = null;
				Node sede = null;
				String idFiscaleIVAPaese = null;
				String idFiscaleIVACodice = null;
				String codiceFiscale = null;

				for (int i = 0; i < children.getLength(); i++) {
					Node child = children.item(i);

					if (child.getNodeName() == "DatiAnagrafici") {
						datiAnagrafici = child;
					} else if (child.getNodeName() == "Sede") {
						sede = child;
					}
				}

				if (datiAnagrafici != null) {
					NodeList datiAnagraficiChildren = datiAnagrafici.getChildNodes();

					for (int i = 0; i < datiAnagraficiChildren.getLength(); i++) {
						Node child = datiAnagraficiChildren.item(i);

						if (child.getNodeName() == "IdFiscaleIVA") {
							NodeList idFiscaleIVAChildren = child.getChildNodes();

							for (int j = 0; j < idFiscaleIVAChildren.getLength(); j++) {
								Node idFiscaleIVAChild = idFiscaleIVAChildren.item(j);

								if (idFiscaleIVAChild.getNodeName() == "IdPaese") {
									idFiscaleIVAPaese = idFiscaleIVAChild.getTextContent();
								} else if (idFiscaleIVAChild.getNodeName() == "IdCodice") {
									idFiscaleIVACodice = idFiscaleIVAChild.getTextContent();
								}
							}
						} else if (child.getNodeName() == "CodiceFiscale") {
							codiceFiscale = child.getNodeValue();
						}
					}
				}

				System.out.println(idFiscaleIVAPaese);
				System.out.println(idFiscaleIVACodice);
				Optional<Azienda> aziendaOpt = aziendaRepo.findByIdFiscaleIVAPaeseAndIdFiscaleIVACodice(
						idFiscaleIVAPaese,
						idFiscaleIVACodice);

				if (aziendaOpt.isPresent()) {
					cedente = aziendaOpt.get();
				}

				if (cedente != null) {
					System.out.println(cedente.toString());
				}
			}

			return fattura;

		} catch (Exception e) {
			log.error(e.getMessage());

			return null;
		}
	}
}
