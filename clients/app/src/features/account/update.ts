import api, { Endpoints } from "~/api";
import { AppThunk } from "~/store";
import { setReqPwMessage } from "./slice";

interface Payload {
  fname: string;
  lname: string;
  email: string;
}

export default function update(payload: Payload): AppThunk {
  return async (dispatch) => {
    api
      .put(`${Endpoints.ACCOUNT}`, payload)
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
