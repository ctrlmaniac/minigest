import api, { Endpoints } from "~/api";
import { AppThunk } from "~/store";
import { postSuccess, postFail } from "./slice";
import { ChiusuraFiscale } from "~/models";

export default function post(chiusura: ChiusuraFiscale): AppThunk {
  return async (dispatch) => {
    api
      .post(`${Endpoints.CHIUSURE_FISCALI}`, chiusura)
      .then((response) => {
        dispatch(postSuccess(response.data));
        window.location.href = `/app/docfisc/chiusure-fiscali/dettagli/${response.data.id}`;
      })
      .catch((error) => {
        dispatch(postFail());
      });
  };
}
