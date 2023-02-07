# minigest

Un mini gestionale pensato per le piccole aziende, scritto in Java

---

DISCLAIMER: progetto creato per studiare Spring Boot e Java! Da non utilizzare in produzione!

---

## Primi passi

Una volta clonato questo repository bisogna creare nella root del progetto un file `.env` con le seguenti variabili d'ambiente:

```
DB_NAME=minigest
DB_USER=root
DB_PASS=root
DB_HOST=localhost
ADMIN_EMAIL=davide.dicriscito@gmail.com
ADMIN_PASS=54321
ADMIN_FNAME=Davide
ADMIN_LNAME=Di Criscito

HOST=http://localhost:8080/

EMAIL_HOST=smtp.gmail.com
EMAIL_USERNAME=davide.dicriscito@gmail.com
EMAIL_PASSWORD=asdfasdassaaa
```

Spring Boot caricherà automaticamente queste variabili nell'applicazione.
