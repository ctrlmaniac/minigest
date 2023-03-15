import api, { Endpoints } from "~/api";
import { AppThunk } from "~/store";
import { postStart, postSuccess, postFail } from "./slice";
import { Negozio } from "~/types";
import { addNegozio } from "../account/slice";

interface Payload {
  id: undefined | string;
  nome: string;
}

export default function post(payload: Payload): AppThunk {
  return async (dispatch) => {
    dispatch(postStart());

    api
      .post(`${Endpoints.NEGOZI}`, payload)
      .then((response) => {
        dispatch(postSuccess(response.data));
        dispatch(addNegozio(response.data));
      })
      .catch((error) => {
        console.warn(error.response.data);
        const message = "Impossibile aggiungere negozio!";

        dispatch(postFail(message));
      });
  };
}
