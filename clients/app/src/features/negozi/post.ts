import api, { Endpoints } from "~/api";
import { AppThunk } from "~/store";
import { postStart, postSuccess, postFail } from "./slice";
import { Negozio } from "~/types";
import { addNegozio } from "../aziende/slice";

export default function post(payload: Negozio): AppThunk {
  return async (dispatch) => {
    dispatch(postStart());

    api
      .post(`${Endpoints.NEGOZI}`, payload)
      .then((response) => {
        dispatch(postSuccess(response.data));
        dispatch(addNegozio(response.data));
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
