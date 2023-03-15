import api, { Endpoints } from "~/api";
import { AppThunk } from "~/store";
import { resetFail, resetStart, resetSuccess } from "./slice";

export default function resetPassword(payload: any): AppThunk {
  return async (dispatch) => {
    dispatch(resetStart());

    api
      .post(`${Endpoints.AUTH}/password/reset`, payload)
      .then((response) => {
        dispatch(resetSuccess(response.data));

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

        dispatch(resetFail(message));
      });
  };
}
