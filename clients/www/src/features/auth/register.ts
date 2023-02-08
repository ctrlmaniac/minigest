import api, { Endpoints } from "~/api";
import { AppThunk } from "~/store";

export default function register(payload: any): AppThunk {
  return async (dispatch) => {
    api
      .post(`${Endpoints.AUTH}/register`, payload)
      .then((response) => {
        console.log(response);
        window.location.href = "/app";
      })
      .catch((error) => {
        console.log(error);

        let message = "Errore";

        if (error.response) {
          message = error.response.data;
        } else {
          message = "Errore";
        }

        console.log(message);
      });
  };
}
