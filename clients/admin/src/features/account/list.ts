import api, { Endpoints } from "~/api";
import { AppThunk } from "~/store";
import { listSuccess, listFail } from "./slice";
import { isEmpty } from "lodash";

export default function list(email: string): AppThunk {
  return async (dispatch) => {
    let endpoint = `${Endpoints.ACCOUNT}/list`;

    if (!isEmpty(email)) {
      endpoint += `?email=${email}`;
    }

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
