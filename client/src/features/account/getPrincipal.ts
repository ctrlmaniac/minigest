import api, { Endpoints } from "~/api";
import { AppThunk } from "~/store";
import {
  getPrincipalStart,
  getPrincipalSuccess,
  getPrincipalFail,
} from "./slice";

export default function getPrincipal(): AppThunk {
  return async (dispatch) => {
    dispatch(getPrincipalStart());

    api
      .get(`${Endpoints.ACCOUNT}/principal`)
      .then((response) => {
        dispatch(getPrincipalSuccess(response.data));
      })
      .catch((error) => {
        let message = "Errore";

        if (error.response) {
          message = error.response.data;
        } else {
          message = "Errore";
        }

        dispatch(getPrincipalFail(message));
      });
  };
}
