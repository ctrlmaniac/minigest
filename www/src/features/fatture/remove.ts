import api, { Endpoints } from "~/api";
import { AppThunk } from "~/store";
import { removeSuccess, removeFail } from "./slice";

export default function remove(id: string): AppThunk {
  return async (dispatch) => {
    api
      .delete(`${Endpoints.FATTURE}/${id}`)
      .then((response) => {
        dispatch(removeSuccess());
      })
      .catch((error) => {
        dispatch(removeFail(error.message));
      });
  };
}
