import AziendaIndirizzo from "./aziendaIndirizzo";

export default interface Azienda {
  id: string;
  denominazione: string;
  titolo: string;
  nome: string;
  cognome: string;
  codiceEORI: string;
  idFiscaleIVAPaese: string;
  idFiscaleIVACodice: string;
  codiceFiscale: string;
  sede: AziendaIndirizzo;
  stabileOrganizzazione: AziendaIndirizzo;
  rappresentanteFiscale: Azienda;
}
