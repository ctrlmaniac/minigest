import api, { Endpoints } from "~/api";
import { AppThunk } from "~/store";
import { setReqPwMessage } from "./slice";

export default function generateToken(username: string): AppThunk {
  return async (dispatch) => {
    api
      .post(`${Endpoints.ACCOUNT}/request-password-reset`, {
        email: username,
      })
      .then((response) => {
        dispatch(setReqPwMessage(response.data));
      })
      .catch((error) => {
        let message = "errore";

        if (error.response) {
          message = error.response.data;
        } else {
          message = error.message;
        }

        dispatch(setReqPwMessage(message));
      });
  };
}
