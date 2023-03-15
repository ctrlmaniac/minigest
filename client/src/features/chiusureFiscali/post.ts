import api, { Endpoints } from "~/api";
import { AppThunk } from "~/store";
import { postStart, postSuccess, postFail } from "./slice";
import { ChiusuraFiscale } from "~/types";

export default function post(payload: ChiusuraFiscale): AppThunk {
  return async (dispatch) => {
    dispatch(postStart());

    api
      .post(`${Endpoints.CHIUSURE_FISCALI}`, payload)
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
