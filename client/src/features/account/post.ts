import api, { Endpoints } from "~/api";
import { AppThunk } from "~/store";
import { postStart, postSuccess, postFail, addNegozio } from "./slice";
import { Azienda } from "~/types";

interface Payload {
  nome: string;
  cognome: string;
  email: string;
  azienda: Azienda | null;
}

export default function post(payload: Payload): AppThunk {
  return async (dispatch) => {
    dispatch(postStart());

    api
      .post(`${Endpoints.ACCOUNT}`, payload)
      .then((response) => {
        dispatch(postSuccess(response.data));
      })
      .catch((error) => {
        let message = "Errore";

        if (error.response) {
          message = error.response.data;
        } else {
          message = "Errore";
        }

        dispatch(postFail(message));
      });
  };
}
