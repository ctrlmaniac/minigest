import Account from "./account";

export default interface F24 {
  id?: string;
  utente?: Account;
  dataScadenza: string;
  totale?: number;
  sezioneErario: null | {
    id?: string;
    f24?: F24;
    codiceUfficio: string;
    codiceAtto: string;
    totaleDebito?: number;
    totaleCredito?: number;
    saldo?: number;
    reparti: {
      id?: string;
      sezioneErario?: {
        id?: string;
      };
      codiceTributo: string;
      codiceRiferimento: string;
      anno: string;
      importoDebito: number;
      importoCredito: number;
    }[];
  };
  sezioneInps:
    | null
    | {
        id?: string;
        f24?: {
          id?: string;
        };
        codiceSede: string;
        causaleContributo: string;
        matricola: string;
        meseRiferimentoDa: string;
        annoRiferimentoDa: string;
        meseRiferimentoA: string;
        annoRiferimentoA: string;
        importoDebito: number;
        importoCredito: number;
        saldo?: number;
      }[];
  sezioneRegioni:
    | null
    | {
        id?: string;
        f24?: {
          id?: string;
        };
        codiceRegione: string;
        codiceTributo: string;
        meseRiferimento: string;
        annoRiferimento: string;
        importoDebito: number;
        importoCredito: number;
        saldo?: number;
      }[];
  sezioneTributiLocali: null | {
    id?: string;
    f24?: {
      id?: string;
    };
    detrazione: number;
    totaleDebito?: number;
    totaleCredito?: number;
    saldo?: number;
    reparti: {
      id?: string;
      sezioneTributiLocali?: {
        id?: string;
      };
      codiceEnte: string;
      ravvedimento: boolean;
      immobiliVariati: boolean;
      acconto: boolean;
      saldo: boolean;
      numeroImmobili: number;
      codiceTributo: string;
      riferimento: string;
      anno: string;
      importoDebito: number;
      importoCredito: number;
    }[];
  };
  sezioneInail:
    | null
    | {
        id?: string;
        f24?: {
          id?: string;
        };
        codiceSede: string;
        codiceDitta: string;
        cc: string;
        numeroRiferimento: string;
        causale: string;
        importoDebito: number;
        importoCredito: number;
        saldo?: number;
      }[];
  sezioneAltriEnti:
    | null
    | {
        id?: string;
        f24?: {
          id?: string;
        };
        codiceEnte: string;
        codiceSede: string;
        causaleContributo: string;
        codicePosizione: string;
        meseRiferimentoDa: string;
        annoRiferimentoDa: string;
        meseRiferimentoA: string;
        annoRiferimentoA: string;
        importoDebito: number;
        importoCredito: number;
        saldo?: number;
      }[];
}
