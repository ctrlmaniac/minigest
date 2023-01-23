import api, { Endpoints } from "~/api";
import { AppThunk } from "~/store";
import { removeSuccess, removeFail } from "./slice";

export default function remove(id: string): AppThunk {
  return async (dispatch) => {
    api
      .delete(`${Endpoints.AZIENDE}/${id}`)
      .then((response) => {
        dispatch(removeSuccess);
        window.location.href = "/app/aziende";
      })
      .catch((error) => {
        dispatch(removeFail());
      });
  };
}
