import Azienda from "./azienda";
import FatturaPagamento from "./fatturaPagamento";
import FatturaReparto from "./fatturaReparto";
import FatturaScadenza from "./fatturaScadenza";
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
  scadenze: FatturaScadenza[];
  pagamenti?: FatturaPagamento[];
  evasa?: boolean;
}
