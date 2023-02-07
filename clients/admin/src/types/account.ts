import AccountRole from "./accountRole";

export default interface Account {
  id?: string;
  fname: string;
  lname: string;
  email: string;
  roles: AccountRole[];
}
