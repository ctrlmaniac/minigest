import api, { Endpoints } from "~/api";
import { AppThunk } from "~/store";
import { postSuccess, postFail } from "./slice";
import { Negozio } from "~/types";

export default function post(negozio: Negozio): AppThunk {
  return async (dispatch) => {
    api
      .post(`${Endpoints.NEGOZI}`, negozio)
      .then((response) => {
        dispatch(postSuccess());
        window.location.href = "/app/negozi";
      })
      .catch((error) => {
        dispatch(postFail(error.message));
      });
  };
}
