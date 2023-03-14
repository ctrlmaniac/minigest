import AziendaIndirizzo from "./aziendaIndirizzo";
import Negozio from "./negozio";

export default interface Azienda {
  id?: string;
  titolo?: string;
  denominazione: string;
  codiceEORI?: string;
  idFiscaleIVAPaese: string;
  idFiscaleIVACodice: string;
  codiceFiscale: string;
  sede?: AziendaIndirizzo;
  stabileOrganizzazione?: AziendaIndirizzo;
  rappresentanteFiscale?: Azienda;
  negozi?: Negozio[];
}
