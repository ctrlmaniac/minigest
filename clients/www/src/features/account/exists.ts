import api, { Endpoints } from "~/api";
import { AppThunk } from "~/store";
import { setExists } from "./slice";

export default function accountExists(email: string = ""): AppThunk {
  return async (dispatch) => {
    api
      .get(`${Endpoints.ACCOUNT}?email=${email}`)
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

        console.log(message);
      });
  };
}
