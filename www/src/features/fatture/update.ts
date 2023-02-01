import api, { Endpoints } from "~/api";
import { AppThunk } from "~/store";
import { putSuccess, putFail } from "./slice";
import { Fattura } from "~/types";

export default function update(id: string, fattura: Fattura): AppThunk {
  return async (dispatch) => {
    api
      .put(`${Endpoints.FATTURE}/${id}`, fattura)
      .then((response) => {
        dispatch(putSuccess(response.data));
        window.location.href = `/app/docfisc/fatture/dettagli/${response.data.id}`;
      })
      .catch((error) => {
        dispatch(putFail(error.message));
      });
  };
}
