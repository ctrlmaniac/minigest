import Azienda from "./azienda";
import FatturaReparto from "./fatturaReparto";
import TipoDocFisc from "./tipoDocFisc";

export default interface Fattura {
  id?: string;
  cedente: Azienda;
  committente: Azienda;
  tipoDocumento: TipoDocFisc;
  data: string;
  dataSDI?: string;
  numero: string;
  totale: number;
  reparti: FatturaReparto[];
}
