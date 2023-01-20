package me.ctrlmaniac.minigest.entitities.docfisc.fattura;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class FatturaReparto {

	@Id
	@GeneratedValue(strategy = GenerationType.UUID)
	private String id;

	@Column
	private double aliquota;

	@Column
	private double imponibile;

	@Column
	private double imposta;

	public FatturaReparto() {
	}

	public FatturaReparto(double aliquota, double imponibile, double imposta) {
		this.aliquota = aliquota;
		this.imponibile = imponibile;
		this.imposta = imposta;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public double getAliquota() {
		return aliquota;
	}

	public void setAliquota(double aliquota) {
		this.aliquota = aliquota;
	}

	public double getImponibile() {
		return imponibile;
	}

	public void setImponibile(double imponibile) {
		this.imponibile = imponibile;
	}

	public double getImposta() {
		return imposta;
	}

	public void setImposta(double imposta) {
		this.imposta = imposta;
	}

}
