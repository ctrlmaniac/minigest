import api, { Endpoints } from "~/api";
import { AppThunk } from "~/store";
import { setExists } from "./slice";

export default function aziendaExists(
  nazione: string = "IT",
  codice: string = ""
): AppThunk {
  return async (dispatch) => {
    api
      .get(`${Endpoints.AZIENDE}/exists?nazione=${nazione}&codice=${codice}`)
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
