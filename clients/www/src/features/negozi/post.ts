import api, { Endpoints } from "~/api";
import { AppThunk } from "~/store";
import { postSuccess, postFail } from "./slice";
import { Negozio } from "~/models";

export default function post(negozio: Negozio): AppThunk {
  return async (dispatch) => {
    api
      .post(`${Endpoints.NEGOZI}`, negozio)
      .then((response) => {
        dispatch(postSuccess());
      })
      .catch((error) => {
        dispatch(postFail());
      });
  };
}
