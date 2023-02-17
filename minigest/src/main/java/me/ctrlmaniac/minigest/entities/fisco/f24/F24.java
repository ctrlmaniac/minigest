package me.ctrlmaniac.minigest.entities.fisco.f24;

import com.fasterxml.jackson.annotation.JsonIncludeProperties;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Transient;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import me.ctrlmaniac.minigest.entities.account.Account;

@Entity
@Setter
@Getter
@ToString
@NoArgsConstructor
public class F24 {

	@Id
	@GeneratedValue(strategy = GenerationType.UUID)
	private String id;

	@ManyToOne
	@JsonIncludeProperties({ "id", "nome", "cognome", "email" })
	private Account utente;

	private LocalDate dataScadenza;

	private LocalDate dataPagamento;

	@OneToOne(mappedBy = "f24", cascade = CascadeType.ALL)
	private F24SezioneErario sezioneErario;

	@OneToMany(fetch = FetchType.EAGER, mappedBy = "f24", cascade = CascadeType.ALL)
	private Set<F24SezioneInps> sezioneInps = new HashSet<>();

	@OneToMany(fetch = FetchType.EAGER, mappedBy = "f24", cascade = CascadeType.ALL)
	private Set<F24SezioneRegioni> sezioneRegioni = new HashSet<>();

	@OneToOne(mappedBy = "f24", cascade = CascadeType.ALL)
	private F24SezioneTributiLocali sezioneTributiLocali;

	@OneToMany(fetch = FetchType.EAGER, mappedBy = "f24", cascade = CascadeType.ALL)
	private Set<F24SezioneInail> sezioneInail = new HashSet<>();

	@OneToMany(fetch = FetchType.EAGER, mappedBy = "f24", cascade = CascadeType.ALL)
	private Set<F24SezioneAltriEnti> sezioneAltriEnti = new HashSet<>();

	@Transient
	private double totale;

	public F24(Account utente, LocalDate dataScadenza, LocalDate dataPagamento) {
		this.utente = utente;
		this.dataScadenza = dataScadenza;
		this.dataPagamento = dataPagamento;
	}

	public double getTotale() {
		double totale = 0;

		if (this.sezioneErario != null) {
			totale += this.sezioneErario.getSaldo();
		}

		for (F24SezioneInps sezione : this.sezioneInps) {
			totale += sezione.getSaldo();
		}

		for (F24SezioneRegioni sezione : this.sezioneRegioni) {
			totale += sezione.getSaldo();
		}

		for (F24SezioneInail sezione : this.sezioneInail) {
			totale += sezione.getSaldo();
		}

		for (F24SezioneAltriEnti sezione : this.sezioneAltriEnti) {
			totale += sezione.getSaldo();
		}

		BigDecimal bdTotale = new BigDecimal(totale);
		bdTotale = bdTotale.setScale(2, RoundingMode.HALF_EVEN);

		return bdTotale.doubleValue();
	}
}
