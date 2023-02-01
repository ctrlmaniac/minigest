import api, { Endpoints } from "~/api";
import { AppThunk } from "~/store";
import { postSuccess, postFail } from "./slice";
import { Fattura } from "~/types";

export default function post(fattura: Fattura): AppThunk {
  return async (dispatch) => {
    api
      .post(`${Endpoints.FATTURE}`, fattura)
      .then((response) => {
        dispatch(postSuccess(response.data));
        window.location.href = `/app/docfisc/fatture/dettagli/${response.data.id}`;
      })
      .catch((error) => {
        dispatch(postFail(error.message));
      });
  };
}
