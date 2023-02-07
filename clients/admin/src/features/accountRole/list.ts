import api, { Endpoints } from "~/api";
import { AppThunk } from "~/store";
import { listSuccess, listFail } from "./slice";

export default function list(): AppThunk {
  return async (dispatch) => {
    let endpoint = `${Endpoints.RUOLI}`;

    api
      .get(endpoint)
      .then((response) => {
        dispatch(listSuccess(response.data));
      })
      .catch((error) => {
        dispatch(listFail(error.message));
      });
  };
}
