package me.ctrlmaniac.minigest.entitities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import lombok.Data;
import lombok.NoArgsConstructor;
import me.ctrlmaniac.minigest.entitities.azienda.Azienda;

@Entity
@Data
@NoArgsConstructor
public class Negozio {

	@Id
	@GeneratedValue(strategy = GenerationType.UUID)
	private String id;

	@ManyToOne
	private Azienda azienda;

	@Column
	private String nome;

	public Negozio(Azienda azienda, String nome) {
		this.azienda = azienda;
		this.nome = nome;
	}

}
