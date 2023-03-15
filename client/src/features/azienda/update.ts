import api, { Endpoints } from "~/api";
import { AppThunk } from "~/store";
import { putStart, putSuccess, putFail } from "./slice";

export default function update(id: string, payload: any): AppThunk {
  return async (dispatch) => {
    dispatch(putStart());

    api
      .put(`${Endpoints.AZIENDE}/${id}`, payload)
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
