import api, { Endpoints } from "~/api";
import { AppThunk } from "~/store";
import { postSuccess, postFail } from "./slice";
import { TipoDocFisc } from "~/types";

export default function post(tdf: TipoDocFisc): AppThunk {
  return async (dispatch) => {
    api
      .post(`${Endpoints.TIPO_DOC_FISC}`, tdf)
      .then((response) => {
        dispatch(postSuccess(response.data));
        window.location.href = `/app/docfisc/tipi`;
      })
      .catch((error) => {
        dispatch(postFail(error.message));
      });
  };
}
