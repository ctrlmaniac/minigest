import api, { Endpoints } from "~/api";
import { AppThunk } from "~/store";

export default function register(payload: any): AppThunk {
  return async () => {
    api
      .post(`${Endpoints.ACCOUNT}`, payload)
      .then((response) => {
        window.location.href = "/app";
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
