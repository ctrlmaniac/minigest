import api, { Endpoints } from "~/api";
import { AppThunk } from "~/store";
import {
  removeStart,
  removeSuccess,
  removeFail,
  removeFromList,
} from "./slice";

export default function remove(id: string): AppThunk {
  return async (dispatch) => {
    dispatch(removeStart());

    api
      .delete(`${Endpoints.CHIUSURE_FISCALI}/${id}`)
      .then((response) => {
        dispatch(removeSuccess(response.data));
        dispatch(removeFromList(id));
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
