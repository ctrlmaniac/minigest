import api, { Endpoints } from "~/api";
import { AppThunk } from "~/store";
import { putSuccess, putFail } from "./slice";
import { AccountRole } from "~/types";

interface Payload {
  roles: AccountRole[];
}

export default function update(id: string, payload: Payload): AppThunk {
  return async (dispatch) => {
    api
      .put(`${Endpoints.ACCOUNT}/${id}`, payload)
      .then((response) => {
        dispatch(putSuccess(response.data));
        window.location.href = "/admin/account/dettagli/" + id;
      })
      .catch((error) => {
        dispatch(putFail(error.message));
      });
  };
}
