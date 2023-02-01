package me.ctrlmaniac.minigest.entitities.docfisc.chiusurafiscale;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
public class ChiusuraFiscaleReparto {
	@Id
	@GeneratedValue(strategy = GenerationType.UUID)
	private String id;

	@Column
	private double aliquota;

	@Column
	private double totale;

	@Column
	private double totaleAnnulli;

	@Column
	private double totaleResi;

	public ChiusuraFiscaleReparto(double aliquota, double totale, double totaleAnnulli, double totaleResi) {
		this.aliquota = aliquota;
		this.totale = totale;
		this.totaleAnnulli = totaleAnnulli;
	}

}
