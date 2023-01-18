import api, { Endpoints } from "~/api";
import { AppThunk } from "~/store";
import { putSuccess, putFail } from "./slice";
import { ChiusuraFiscale } from "~/models";

export default function update(
  id: string,
  chiusura: ChiusuraFiscale
): AppThunk {
  return async (dispatch) => {
    api
      .put(`${Endpoints.CHIUSURE_FISCALI}/${id}`, chiusura)
      .then((response) => {
        dispatch(putSuccess(response.data));
        window.location.href =
          "/app/docfisc/chiusure-fiscali/" + response.data.id;
      })
      .catch((error) => {
        dispatch(putFail());
      });
  };
}