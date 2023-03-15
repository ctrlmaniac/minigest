import api, { Endpoints } from "~/api";
import { AppThunk } from "~/store";
import { getStart, getSuccess, getFail } from "./slice";

export default function get(query: string): AppThunk {
  return async (dispatch) => {
    dispatch(getStart());

    api
      .get(`${Endpoints.BILANCIO}?${query}`)
      .then((response) => {
        dispatch(getSuccess(response.data));
      })
      .catch((error) => {
        let message = "Errore";

        if (error.response) {
          message = error.response.data;
        } else {
          message = "Errore";
        }

        dispatch(getFail(message));
      });
  };
}
