import azienda from "./azienda";

export default interface Account {
  id: string;
  email: string;
  fname: string;
  lname: string;
  aziende: azienda[];
}
