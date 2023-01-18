import ChiusuraFiscaleReparto from "./chiusuraFiscaleReparto";

export default interface ChiusuraFiscale {
  id?: string;
  data: string;
  totale: number;
  numeroDocFisc: number;
  reparti: ChiusuraFiscaleReparto[];
}
