import api, { Endpoints } from "~/api";
import { AppThunk } from "~/store";
import { putStart, putSuccess, putFail } from "./slice";
import { F24 } from "~/types";

export default function update(id: string, payload: F24): AppThunk {
  return async (dispatch) => {
    dispatch(putStart());

    api
      .put(`${Endpoints.FISCO}/f24/${id}`, payload)
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
