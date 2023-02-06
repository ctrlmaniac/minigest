import Fattura from "./fattura";

export default interface FatturaScadenza {
  id?: string;
  fattura?: Fattura;
  data: string;
  importo: number;
  pagato?: boolean;
}
