import AccountRuolo from "./accountRuolo";
import Azienda from "./azienda";

export default interface Account {
  id?: string;
  email: string;
  nome: string;
  cognome: string;
  azienda?: Azienda;
  enabled: boolean;
  credentialsNonExpired: boolean;
  accountNonLocked: boolean;
  accountNonExpired: boolean;
  authorities: AccountRuolo[];
}
