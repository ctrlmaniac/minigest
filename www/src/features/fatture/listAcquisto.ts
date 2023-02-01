import api, { Endpoints } from "~/api";
import { AppThunk } from "~/store";
import { listSuccess, listFail } from "./slice";

export default function listAcquisto(
  idAzienda: string,
  query: string
): AppThunk {
  return async (dispatch) => {
    api
      .get(`${Endpoints.FATTURE}/acquisto/${idAzienda}?${query}`)
      .then((res) => dispatch(listSuccess(res.data)))
      .catch((err) => dispatch(listFail(err.message)));
  };
}
