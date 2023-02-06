import Azienda from "./azienda";

export default interface Negozio {
  id?: string;
  azienda?: Azienda;
  nome?: string;
}
