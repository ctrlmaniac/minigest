package me.ctrlmaniac.minigest.entitities.docfisc.fattura;

import java.time.LocalDate;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import lombok.Data;
import lombok.NoArgsConstructor;
import me.ctrlmaniac.minigest.entitities.azienda.Azienda;
import me.ctrlmaniac.minigest.entitities.docfisc.TipoDocFisc;

@Entity
@Data
@NoArgsConstructor
public class Fattura {

	@Id
	@GeneratedValue(strategy = GenerationType.UUID)
	private String id;

	@ManyToOne
	private Azienda cedente;

	@ManyToOne
	private Azienda committente;

	@ManyToOne
	private TipoDocFisc tipoDocumento;

	@Column
	private LocalDate data;

	@Column
	private LocalDate dataRicezioneSDI;

	@Column
	private String numero;

	@Column
	private double totale;

	@OneToMany(fetch = FetchType.EAGER)
	private List<FatturaReparto> reparti;

	public Fattura(Azienda cedente, Azienda committente, TipoDocFisc tipoDocumento, LocalDate data,
			LocalDate dataRicezioneSDI, String numero,
			double totale, List<FatturaReparto> reparti) {
		this.cedente = cedente;
		this.committente = committente;
		this.tipoDocumento = tipoDocumento;
		this.data = data;
		this.dataRicezioneSDI = dataRicezioneSDI;
		this.numero = numero;
		this.totale = totale;
		this.reparti = reparti;
	}

}
