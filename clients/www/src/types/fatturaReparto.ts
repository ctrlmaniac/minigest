import Fattura from "./fattura";

export default interface FatturaReparto {
  id?: string;
  fattura?: Fattura;
  aliquota: number;
  imponibile: number;
  imposta: number;
}
