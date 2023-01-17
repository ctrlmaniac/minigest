package me.ctrlmaniac.minigest.entitities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Azienda {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;

    @Column
    private String denominazione;

    @Column(columnDefinition = "varchar(2)")
    private String idFiscaleIVAPaese;

    @Column(columnDefinition = "varchar(28)")
    private String idFiscaleIVACodice;

    @Column(columnDefinition = "varchar(16)")
    private String codiceFiscale;

    public Azienda() {
    }

    public Azienda(String denominazione, String idFiscaleIVAPaese, String idFiscaleIVACodice, String codiceFiscale) {
        this.denominazione = denominazione;
        this.idFiscaleIVAPaese = idFiscaleIVAPaese;
        this.idFiscaleIVACodice = idFiscaleIVACodice;
        this.codiceFiscale = codiceFiscale;
    }

    public Azienda(String id, String denominazione, String idFiscaleIVAPaese, String idFiscaleIVACodice,
            String codiceFiscale) {
        this.id = id;
        this.denominazione = denominazione;
        this.idFiscaleIVAPaese = idFiscaleIVAPaese;
        this.idFiscaleIVACodice = idFiscaleIVACodice;
        this.codiceFiscale = codiceFiscale;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getDenominazione() {
        return denominazione;
    }

    public void setDenominazione(String denominazione) {
        this.denominazione = denominazione;
    }

    public String getIdFiscaleIVAPaese() {
        return idFiscaleIVAPaese;
    }

    public void setIdFiscaleIVAPaese(String idFiscaleIVAPaese) {
        this.idFiscaleIVAPaese = idFiscaleIVAPaese;
    }

    public String getIdFiscaleIVACodice() {
        return idFiscaleIVACodice;
    }

    public void setIdFiscaleIVACodice(String idFiscaleIVACodice) {
        this.idFiscaleIVACodice = idFiscaleIVACodice;
    }

    public String getCodiceFiscale() {
        return codiceFiscale;
    }

    public void setCodiceFiscale(String codiceFiscale) {
        this.codiceFiscale = codiceFiscale;
    }

}
