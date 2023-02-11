import AccountRuolo from "./accountRuolo";
import Azienda from "./azienda";

export default interface Account {
  id?: string;
  email: string;
  nome: string;
  cognome: string;
  enabled: boolean;
  credentialsNonExpired: boolean;
  accountNonExpired: boolean;
  accountNonLocked: boolean;
  authorities: AccountRuolo[];
  aziende?: Azienda[];
}
