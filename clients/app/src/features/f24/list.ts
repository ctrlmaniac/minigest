import api, { Endpoints } from "~/api";
import { AppThunk } from "~/store";
import { listStart, listSuccess, listFail } from "./slice";

export default function list(query: string): AppThunk {
  return async (dispatch) => {
    dispatch(listStart());

    api
      .get(`${Endpoints.FISCO}/f24?${query}`)
      .then((response) => {
        dispatch(listSuccess(response.data));
      })
      .catch((error) => {
        let message = "Errore";

        if (error.response) {
          message = error.response.data;
        } else {
          message = "Errore";
        }

        dispatch(listFail(message));
      });
  };
}
