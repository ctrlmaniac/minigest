import api, { Endpoints } from "~/api";
import { AppThunk } from "~/store";
import { setExists } from "./slice";

export default function checkExistance(email: string): AppThunk {
  return async (dispatch) => {
    api
      .get(`${Endpoints.ACCOUNT}/esiste?email=${email}`)
      .then((response) => {
        dispatch(setExists(response.data));
      })
      .catch((error) => {
        let message = false;

        if (error.response) {
          message = error.response.data;
        } else {
          message = false;
        }

        dispatch(setExists(message));
      });
  };
}
