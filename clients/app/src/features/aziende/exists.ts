import api, { Endpoints } from "~/api";
import { AppThunk } from "~/store";
import { getExists } from "./slice";

export default function exists(paese: string, codice: string): AppThunk {
  return async (dispatch) => {
    api
      .get(`${Endpoints.AZIENDE}/esiste?paese=${paese}&codice=${codice}`)
      .then((response) => {
        let exists = false;

        if (response.data === "true") {
          exists = true;
        }

        dispatch(getExists(response.data));
      });
  };
}
