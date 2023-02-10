import api, { Endpoints } from "~/api";
import { AppThunk } from "~/store";
import { removeStart, removeSuccess, removeFail } from "./slice";
import { removeAzienda } from "../account/slice";

export default function remove(id: string): AppThunk {
  return async (dispatch) => {
    dispatch(removeStart());

    api
      .delete(`${Endpoints.FATTURE}/${id}`)
      .then((response) => {
        dispatch(removeSuccess(response.data));
      })
      .catch((error) => {
        let message = "Errore";

        if (error.response) {
          message = error.response.data;
        } else {
          message = "Errore";
        }

        dispatch(removeFail(message));
      });
  };
}
