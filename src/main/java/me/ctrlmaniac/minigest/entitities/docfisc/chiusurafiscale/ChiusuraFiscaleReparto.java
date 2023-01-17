package me.ctrlmaniac.minigest.entitities.docfisc.chiusurafiscale;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
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

    public ChiusuraFiscaleReparto() {
    }

    public ChiusuraFiscaleReparto(double aliquota, double totale, double totaleAnnulli, double totaleResi) {
        this.aliquota = aliquota;
        this.totale = totale;
        this.totaleAnnulli = totaleAnnulli;
        this.totaleResi = totaleResi;
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

    public double getTotale() {
        return totale;
    }

    public void setTotale(double totale) {
        this.totale = totale;
    }

    public double getTotaleAnnulli() {
        return totaleAnnulli;
    }

    public void setTotaleAnnulli(double totaleAnnulli) {
        this.totaleAnnulli = totaleAnnulli;
    }

    public double getTotaleResi() {
        return totaleResi;
    }

    public void setTotaleResi(double totaleResi) {
        this.totaleResi = totaleResi;
    }

}
