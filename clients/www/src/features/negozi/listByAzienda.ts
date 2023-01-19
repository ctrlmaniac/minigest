import api, { Endpoints } from "~/api";
import { AppThunk } from "~/store";
import { listByAziendaSuccess, listByAziendaFail } from "./slice";

export default function listByAzienda(azienda: string): AppThunk {
  return async (dispatch) => {
    let endpoint = `${Endpoints.NEGOZI}?azienda=${azienda}`;

    api
      .get(endpoint)
      .then((response) => {
        dispatch(listByAziendaSuccess(response.data));
      })
      .catch((error) => {
        dispatch(listByAziendaFail());
      });
  };
}
