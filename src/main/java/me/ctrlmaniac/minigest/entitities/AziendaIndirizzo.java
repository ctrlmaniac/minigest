package me.ctrlmaniac.minigest.entitities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class AziendaIndirizzo {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;

    @Column
    private String indirizzo;

    @Column
    private String numeroCivico;

    @Column
    private String Comune;

    @Column(columnDefinition = "varchar(2)")
    private String provincia;

    @Column(columnDefinition = "varchar(2)")
    private String nazione;

    public AziendaIndirizzo() {
    }

    public AziendaIndirizzo(String indirizzo, String numeroCivico, String comune, String provincia,
            String nazione) {
        this.indirizzo = indirizzo;
        this.numeroCivico = numeroCivico;
        Comune = comune;
        this.provincia = provincia;
        this.nazione = nazione;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getIndirizzo() {
        return indirizzo;
    }

    public void setIndirizzo(String indirizzo) {
        this.indirizzo = indirizzo;
    }

    public String getNumeroCivico() {
        return numeroCivico;
    }

    public void setNumeroCivico(String numeroCivico) {
        this.numeroCivico = numeroCivico;
    }

    public String getComune() {
        return Comune;
    }

    public void setComune(String comune) {
        Comune = comune;
    }

    public String getProvincia() {
        return provincia;
    }

    public void setProvincia(String provincia) {
        this.provincia = provincia;
    }

    public String getNazione() {
        return nazione;
    }

    public void setNazione(String nazione) {
        this.nazione = nazione;
    }
}
