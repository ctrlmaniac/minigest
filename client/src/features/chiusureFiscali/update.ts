import api, { Endpoints } from "~/api";
import { AppThunk } from "~/store";
import { putStart, putSuccess, putFail } from "./slice";
import { ChiusuraFiscale } from "~/types";

export default function update(id: string, payload: ChiusuraFiscale): AppThunk {
  return async (dispatch) => {
    dispatch(putStart());

    api
      .put(`${Endpoints.CHIUSURE_FISCALI}/${id}`, payload)
      .then((response) => {
        dispatch(putSuccess(response.data));
      })
      .catch((error) => {
        let message = "Errore";

        if (error.response) {
          message = error.response.data;
        } else {
          message = "Errore";
        }

        dispatch(putFail(message));
      });
  };
}
