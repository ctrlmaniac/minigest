package me.ctrlmaniac.minigest.entitities;

import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;

@Entity
public class Account {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;

    @Column(unique = true)
    private String email;

    @Column
    private String fname;

    @Column
    private String lname;

    @Column
    private String password;

    @Column(columnDefinition = "varchar(255) default 'CUSTOMER'")
    private String role;

    @OneToMany
    private List<Azienda> aziende;

    public Account() {
    }

    public Account(String email, String fname, String lname, String password, String role, List<Azienda> aziende) {
        this.email = email;
        this.fname = fname;
        this.lname = lname;
        this.password = password;
        this.role = role;
        this.aziende = aziende;
    }

    public Account(String email, String fname, String lname, String role, List<Azienda> aziende) {
        this.email = email;
        this.fname = fname;
        this.lname = lname;
        this.role = role;
        this.aziende = aziende;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getFname() {
        return fname;
    }

    public void setFname(String fname) {
        this.fname = fname;
    }

    public String getLname() {
        return lname;
    }

    public void setLname(String lname) {
        this.lname = lname;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public List<Azienda> getAziende() {
        return aziende;
    }

    public void setAziende(List<Azienda> aziende) {
        this.aziende = aziende;
    }

}
