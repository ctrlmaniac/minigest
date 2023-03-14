import api, { Endpoints } from "~/api";
import { AppThunk } from "~/store";
import { putStart, putSuccess, putFail } from "./slice";
import { Account } from "~/types";

export default function update(id: string, payload: Account): AppThunk {
  return async (dispatch) => {
    dispatch(putStart());

    api
      .put(`${Endpoints.ACCOUNT}/${id}`, payload)
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
