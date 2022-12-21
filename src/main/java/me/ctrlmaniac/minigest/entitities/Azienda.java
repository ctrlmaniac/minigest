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

    public String getId() {
        return id;
    }

    public Azienda() {
    }

    public Azienda(String denominazione) {
        this.denominazione = denominazione;
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
}
