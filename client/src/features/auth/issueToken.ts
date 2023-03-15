import api, { Endpoints } from "~/api";
import { AppThunk } from "~/store";
import { issueTokenFail, issueTokenStart, issueTokenSuccess } from "./slice";

export default function issueToken(payload: any): AppThunk {
  return async (dispatch) => {
    dispatch(issueTokenStart());

    api
      .post(`${Endpoints.AUTH}/password/forgot`, payload)
      .then((response) => {
        dispatch(issueTokenSuccess(response.data));
      })
      .catch((error) => {
        let message = "Errore";

        if (error.response) {
          message = error.response.data;
        } else {
          message = "Errore";
        }

        dispatch(issueTokenFail(message));
      });
  };
}
