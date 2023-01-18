import api, { Endpoints } from "~/api";
import { AppThunk } from "~/store";
import { deleteSuccess, deleteFail } from "./slice";

export default function remove(id: string): AppThunk {
  return async (dispatch) => {
    api
      .delete(`${Endpoints.CHIUSURE_FISCALI_REPARTI}/${id}`)
      .then((response) => {
        dispatch(deleteSuccess(response.data));
      })
      .catch((error) => {
        dispatch(deleteFail());
      });
  };
}
