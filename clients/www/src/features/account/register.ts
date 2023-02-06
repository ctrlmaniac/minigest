import api, { Endpoints } from "~/api";
import { AppThunk } from "~/store";
import { registerSuccess, registerFail, registerStart } from "./slice";
import { Account, Azienda, AziendaIndirizzo, Negozio } from "~/types";

interface Object {
  account: Account;
  azienda: Azienda;
  sede: AziendaIndirizzo;
  negozio: Negozio;
}

export default function register(object: Object): AppThunk {
  return async (dispatch) => {
    dispatch(registerStart());

    api
      .post(Endpoints.ACCOUNT, object)
      .then((response) => {
        dispatch(registerSuccess());
        window.location.href = "/accedi";
      })
      .catch((error) => {
        let message = "errore";

        if (error.response) {
          message = error.response.data;
        } else {
          message = error.message;
        }

        dispatch(registerFail(message));
      });
  };
}
