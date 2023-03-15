import api, { Endpoints } from "~/api";
import { AppThunk } from "~/store";
import { setTokenValidity } from "./slice";

export default function checkPasswordToken(token: string = ""): AppThunk {
  return async (dispatch) => {
    api
      .post(`${Endpoints.AUTH}/password/token`, { token: token })
      .then((response) => {
        dispatch(setTokenValidity(response.data));
      })
      .catch((error) => {
        let message = false;

        if (error.response) {
          message = error.response.data;
        } else {
          message = false;
        }

        setTokenValidity(message);
      });
  };
}
