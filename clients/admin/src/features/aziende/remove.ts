import api, { Endpoints } from "~/api";
import { AppThunk } from "~/store";
import {
  removeStart,
  removeSuccess,
  removeFail,
  removeFromSelected,
} from "./slice";
import { removeAzienda } from "../account/slice";

export default function remove(id: string): AppThunk {
  return async (dispatch) => {
    dispatch(removeStart());

    api
      .delete(`${Endpoints.AZIENDE}/${id}`)
      .then((response) => {
        dispatch(removeSuccess(response.data));
        dispatch(removeAzienda(id));
        dispatch(removeFromSelected(id));
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
