package me.ctrlmaniac.minigest.entitities.docfisc.chiusurafiscale;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class ChiusuraFiscale {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;

    @Column
    private LocalDate data;

    @Column
    private Double totale;

    @Column
    private int numeroDocFisc;

    public ChiusuraFiscale() {
    }

    public ChiusuraFiscale(LocalDate data, Double totale, int numeroDocFisc) {
        this.data = data;
        this.totale = totale;
        this.numeroDocFisc = numeroDocFisc;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public LocalDate getData() {
        return data;
    }

    public void setData(LocalDate data) {
        this.data = data;
    }

    public Double getTotale() {
        return totale;
    }

    public void setTotale(Double totale) {
        this.totale = totale;
    }

    public int getNumeroDocFisc() {
        return numeroDocFisc;
    }

    public void setNumeroDocFisc(int numeroDocFisc) {
        this.numeroDocFisc = numeroDocFisc;
    }

}
