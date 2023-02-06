import api, { Endpoints } from "~/api";
import { AppThunk } from "~/store";
import { putSuccess, putFail } from "./slice";
import { Azienda } from "~/types";

export default function update(id: string, azienda: Azienda): AppThunk {
  return async (dispatch) => {
    api
      .put(`${Endpoints.AZIENDE}/${id}`, azienda)
      .then((response) => {
        putSuccess();
        window.location.href = "/app/aziende/dettagli/" + response.data.id;
      })
      .catch((error) => {
        dispatch(putFail(error.message));
      });
  };
}
