import api, { Endpoints } from "~/api";
import { AppThunk } from "~/store";
import { loginFail, loginStart, loginSuccess } from "./slice";

export default function login(payload: any): AppThunk {
  return async (dispatch) => {
    dispatch(loginStart());

    api
      .post(`${Endpoints.ACCOUNT}/login`, payload)
      .then((response) => {
        dispatch(loginSuccess(response.data));

        setTimeout(() => {
          window.location.href = "/app";
        }, 1000);
      })
      .catch((error) => {
        let message = "Errore";

        if (error.response) {
          message = error.response.data;
        } else {
          message = "Errore";
        }

        dispatch(loginFail(message));
      });
  };
}
