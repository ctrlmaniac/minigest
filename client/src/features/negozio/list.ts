import api, { Endpoints } from "~/api";
import { AppThunk } from "~/store";
import { listStart, listSuccess, listFail } from "./slice";

export default function list(azienda: string): AppThunk {
  return async (dispatch) => {
    dispatch(listStart());

    api
      .get(`${Endpoints.NEGOZI}?azienda=${azienda}`)
      .then((response) => {
        dispatch(listSuccess(response.data));
      })
      .catch((error) => {
        console.warn(error.response.data);

        dispatch(listFail());
      });
  };
}
