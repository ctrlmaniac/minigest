import api, { Endpoints } from "~/api";
import { AppThunk } from "~/store";
import { putSuccess, putFail } from "./slice";
import { TipoDocFisc } from "~/models";

export default function update(id: string, tdf: TipoDocFisc): AppThunk {
  return async (dispatch) => {
    api
      .put(`${Endpoints.TIPO_DOC_FISC}/${id}`, tdf)
      .then((response) => {
        dispatch(putSuccess(response.data));
      })
      .catch((error) => {
        dispatch(putFail());
      });
  };
}
