import api, { Endpoints } from "~/api";
import { AppThunk } from "~/store";
import { listSuccess, listFail } from "./slice";
import { isEmpty } from "lodash";

export default function list(denominazione: string = ""): AppThunk {
  return async (dispatch) => {
    let endpoint = `${Endpoints.AZIENDE}`;

    if (!isEmpty(denominazione)) {
      endpoint += `?denominazione=${denominazione}`;
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
