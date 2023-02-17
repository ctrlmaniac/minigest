import { Endpoints, fileUploader } from "~/api";
import { AppThunk } from "~/store";
import { uploadStart, uploadSuccess, uploadFail } from "./slice";

export default function upload(payload: FormData): AppThunk {
  return async (dispatch) => {
    dispatch(uploadStart());

    fileUploader
      .post(`${Endpoints.FATTURE}/upload`, payload)
      .then((response) => {
        dispatch(uploadSuccess(response.data));
      })
      .catch((error) => {
        let message = "Errore";

        if (error.response) {
          message = error.response.data;
        } else {
          message = "Errore";
        }

        dispatch(uploadFail(message));
      });
  };
}
