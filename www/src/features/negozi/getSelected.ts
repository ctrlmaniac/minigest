import api, { Endpoints } from "~/api";
import { AppThunk } from "~/store";
import { getSelectedSuccess } from "./slice";

export default function getSelected(id: string): AppThunk {
  return async (dispatch) => {
    api.get(`${Endpoints.NEGOZI}/${id}`).then((response) => {
      dispatch(getSelectedSuccess(response.data));
    });
  };
}
