import api, { Endpoints } from "~/api";
import { AppThunk } from "~/store";
import { removeStart, removeSuccess, removeFail } from "./slice";
import { removeNegozio } from "../account/slice";

export default function remove(id: string): AppThunk {
  return async (dispatch) => {
    dispatch(removeStart());

    api
      .delete(`${Endpoints.NEGOZI}/${id}`)
      .then((response) => {
        dispatch(removeSuccess(id));
        dispatch(removeNegozio(id));
      })
      .catch((error) => {
        console.warn(error.response.data);
        const message = "Impossibile eliminare negozio";
        dispatch(removeFail(message));
      });
  };
}
