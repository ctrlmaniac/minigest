import api, { Endpoints } from "~/api";
import { AppThunk } from "~/store";
import { pwResetSuccess, pwResetFail } from "./slice";

interface Payload {
  token: string;
  password: string;
}

export default function updatePassword(payload: Payload): AppThunk {
  return async (dispatch) => {
    api
      .post(`${Endpoints.ACCOUNT}/password-reset`, payload)
      .then((response) => {
        dispatch(pwResetSuccess(response.data));

        setTimeout(() => {
          window.location.href = "/app";
        }, 1000);
      })
      .catch((error) => {
        let message = "errore";

        if (error.response) {
          message = error.response.data;
        } else {
          message = error.message;
        }

        dispatch(pwResetFail(message));
      });
  };
}
