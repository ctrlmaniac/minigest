import api, { Endpoints } from "~/api";
import { AppThunk } from "~/store";
import { removeSuccess, removeFail } from "./slice";

export default function remove(id: string): AppThunk {
  return async (dispatch) => {
    api
      .delete(`${Endpoints.NEGOZI}/${id}`)
      .then((response) => {
        dispatch(removeSuccess(id));
      })
      .catch((error) => {
        dispatch(removeFail());
      });
  };
}
