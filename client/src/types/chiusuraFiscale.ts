import ChiusuraFiscaleReparto from "./chiusuraFiscaleReparto";
import Negozio from "./negozio";

export default interface ChiusuraFiscale {
  id?: string;
  negozio: Negozio;
  data: string;
  totale: number;
  numeroDocFisc: number;
  reparti: ChiusuraFiscaleReparto[];
}
