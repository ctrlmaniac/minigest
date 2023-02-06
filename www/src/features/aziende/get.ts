import api, { Endpoints } from "~/api";
import { AppThunk } from "~/store";
import { getStart, getSuccess, getFail } from "./slice";

export default function get(id: string): AppThunk {
  return async (dispatch) => {
    dispatch(getStart());

    api
      .get(`${Endpoints.AZIENDE}/${id}`)
      .then((response) => {
        dispatch(getSuccess(response.data));
      })
      .catch((error) => {
        dispatch(getFail(error.message));
      });
  };
}
