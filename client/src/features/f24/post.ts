import api, { Endpoints } from "~/api";
import { AppThunk } from "~/store";
import { postStart, postSuccess, postFail } from "./slice";
import { F24 } from "~/types";

export default function post(payload: F24): AppThunk {
  return async (dispatch) => {
    dispatch(postStart());

    api
      .post(`${Endpoints.FISCO}/f24`, payload)
      .then((response) => {
        dispatch(postSuccess(response.data));
      })
      .catch((error) => {
        let message = "Errore";

        if (error.response) {
          message = error.response.data;
        } else {
          message = "Errore";
        }

        dispatch(postFail(message));
      });
  };
}
