package me.ctrlmaniac.minigest.entitities.docfisc.chiusurafiscale;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class ChiusuraFiscaleReparto {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;
}
