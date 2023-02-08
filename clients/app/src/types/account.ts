import Azienda from "./azienda";

export default interface Account {
  id?: string;
  email: string;
  nome: string;
  cognome: string;
  aziende?: Azienda[];
}
