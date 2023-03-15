import api, { Endpoints } from "~/api";
import { AppThunk } from "~/store";
import { postStart, postSuccess, postFail } from "./slice";
import { Azienda } from "~/types";

export default function post(payload: Azienda): AppThunk {
  return async (dispatch) => {
    dispatch(postStart());

    api
      .post(`${Endpoints.AZIENDE}`, payload)
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
