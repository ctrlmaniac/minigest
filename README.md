# minigest

Un mini gestionale pensato per le piccole aziende

---

Potrai salvare le tue chiusure fiscali, le tue fatture e gestire le scadenze e i pagamenti!

## Prima di cominciare

Per ragioni di sicurezza non si salvano i dati sensibili nel repository, soprattuto perché magari è pubblico.
Grazien al pacchetto `spring-dotenv` possiamo includere tutti i dati sensibili in un file `.env` che non verrà committato.
Questo file conterrà delle variabili a seconda dell'ambiente di sviluppo o di deploy.

Crea un file `.env` all'interno della root del progetto, o dove risiede il file jar minigest con le seguenti variabili:

```
DB_HOST=localhost
DB_NAME=minigest
DB_USER=root
DB_PASS=root

ADMIN_EMAIL=davide.dicriscito@gmail.com
ADMIN_FNAME=Davide
ADMIN_LNAME=Di Criscito
ADMIN_PASS=54321

HOST=http://localhost:8080

EMAIL_HOST=smtp.gmail.com
EMAIL_USERNAME=davide.dicriscito@gmail.com
EMAIL_PASSWORD=qmqrlysewdeczubm
```

## Uno per tutti, tutti per uno

Un unico repository per il backend e per il frontend. In questo repository si possono creare più applicazioni java grazie al file `pom.xml` che risiede nella root del progetto.
Con la proprietà `modules` si definiscono i moduli java presenti nel progetto. Qui ne ho solo uno e si chiama **minigest**.

```xml
<modules>
	<module>minigest</module>
</modules>
```

Per quanto riguarda il frontend, si possono creare pià client. Io ne ho creati addirittura 3! Uno per visualizzare il sito internet che è pubblico a tutti, uno solo per l'applicazione e l'ultimo per gli admin!

Ho utilizzato `lerna` per poter creare tutti questi progetti.

Nella cartella `clients` risiedono i clients mentre nella cartella `packages` risiedono tutti i pacchetti comuni ai clients.

## Linguaggi di programmazione utilizzati

Vengono utilizzati i seguenti linguaggi di programmazione:

- Java: per il backend
- Typescript: per il frontend

## Gira tutto su un unico server!

Grazie a `Thymeleaf` e a una funzione che controlla l'url che si sta visitando, il server decide quale client farti visualizzare. Non c'è bisogno quindi di far partire separatamente i tre client e il server tomcat. Per visualizzare il sito internet basta far partire il server tomcat già incluso con `spring boot`.

Questo è il controller che decide quale client farti vedere:

```java
@Controller
public class ReactWebController {

	@GetMapping(value = { "/", "/{x:[\\w\\-]+}", "/{x:^(?!api$).*$}/*/{y:[\\w\\-]+}", "/error" })
	public String getClient(HttpServletRequest request) {
		String url = request.getRequestURI();

		if (url.startsWith("/admin")) {
			return "/admin/index.html";
		} else if (url.startsWith("/app")) {
			return "/app/index.html";
		}

		return "/www/index.html";
	}
}
```

## La sicurezza prima di tutto

Ho utilizzato `spring-security` per gestire l'accesso e l'autorizzazione all'applicazione e alla sezione admin!

Non ho utilizzato token `jwt` ma la sessione che genera spring security. La connessione è quindi _stateful_.
