import api, { Endpoints } from "~/api";
import { AppThunk } from "~/store";
import { listSuccess, listFail } from "./slice";

export default function list(idNegozio: string): AppThunk {
  return async (dispatch) => {
    let endpoint = `${Endpoints.CHIUSURE_FISCALI}?negozio=${idNegozio}`;

    api
      .get(endpoint)
      .then((response) => {
        dispatch(listSuccess(response.data));
      })
      .catch((error) => {
        dispatch(listFail());
      });
  };
}
