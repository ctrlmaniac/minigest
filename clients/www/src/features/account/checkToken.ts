import api, { Endpoints } from "~/api";
import { AppThunk } from "~/store";
import { pwTokenFail, pwTokenSuccess } from "./slice";

export default function checkToken(token: string): AppThunk {
  return async (dispatch) => {
    api
      .post(`${Endpoints.ACCOUNT}/token`, { token: token })
      .then((response) => {
        dispatch(pwTokenSuccess(response.data));
      })
      .catch((error) => {
        let message = "errore";

        if (error.response) {
          message = error.response.data;
        } else {
          message = error.message;
        }

        dispatch(pwTokenFail(message));
      });
  };
}
