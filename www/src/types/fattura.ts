import Azienda from "./azienda";
import FatturaReparto from "./fatturaReparto";
import TipoDocFisc from "./tipoDocFisc";

export default interface Fattura {
  id?: string;
  cedente: Azienda;
  committente: Azienda;
  tipoDocumento: TipoDocFisc;
  data: string;
  numero: string;
  reparti: FatturaReparto[];
}
