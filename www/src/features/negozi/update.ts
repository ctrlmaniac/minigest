import api, { Endpoints } from "~/api";
import { AppThunk } from "~/store";
import { putSuccess, putFail } from "./slice";
import { Negozio } from "~/types";

export default function update(id: string, negozio: Negozio): AppThunk {
  return async (dispatch) => {
    api
      .put(`${Endpoints.NEGOZI}/${id}`, negozio)
      .then((response) => {
        dispatch(putSuccess());
        window.location.href = `/app/negozi/dettagli/${response.data.id}`;
      })
      .catch((error) => {
        dispatch(putFail(error.message));
      });
  };
}
