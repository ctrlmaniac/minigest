import api, { Endpoints } from "~/api";
import { AppThunk } from "~/store";
import { postSuccess, postFail } from "./slice";
import { Azienda } from "~/models";

export default function post(azienda: Azienda): AppThunk {
  return async (dispatch) => {
    api
      .post(`${Endpoints.AZIENDE}`, azienda)
      .then((response) => {
        dispatch(postSuccess(response.data));
        window.location.href = `/app/aziende/dettagli/${response.data.id}`;
      })
      .catch((error) => {
        dispatch(postFail());
      });
  };
}
