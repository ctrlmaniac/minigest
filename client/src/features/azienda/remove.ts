import api, { Endpoints } from "~/api";
import { AppThunk } from "~/store";
import { removeStart, removeSuccess, removeFail } from "./slice";

export default function remove(id: string): AppThunk {
  return async (dispatch) => {
    dispatch(removeStart());

    api
      .delete(`${Endpoints.AZIENDE}/${id}`)
      .then((response) => {
        dispatch(removeSuccess(response.data));
      })
      .catch((error) => {
        if (error.response) {
          console.warn(error.response.data);
        }

        dispatch(removeFail("Impossibile eliminare azienda!"));
      });
  };
}
