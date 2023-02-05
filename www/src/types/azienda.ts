import AziendaIndirizzo from "./aziendaIndirizzo";

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
}
