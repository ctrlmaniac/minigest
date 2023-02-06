import Fattura from "./fattura";

export default interface FatturaPagamento {
  id?: string;
  fattura?: Fattura;
  data: string;
  importo: number;
}
