import api, { Endpoints } from "~/api";
import { AppThunk } from "~/store";
import { putStart, putSuccess, putFail } from "./slice";
import { Negozio } from "~/types";

export default function update(payload: any): AppThunk {
  return async (dispatch) => {
    dispatch(putStart());

    api
      .put(`${Endpoints.NEGOZI}/${payload.id!}`, payload)
      .then((response) => {
        dispatch(putSuccess(response.data));
      })
      .catch((error) => {
        console.warn(error.response.data);
        const message = "Impossibile aggiornare negozio";

        dispatch(putFail(message));
      });
  };
}
