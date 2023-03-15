import { isEmpty } from "lodash";
import React from "react";
import { useParams } from "react-router-dom";
import { ErrorScreen, LoadingScreen } from "~/components";
import get from "~/features/f24/get";
import { useAppDispatch, useAppSelector } from "~/hooks";
import Form from "./Form";

const Modifica: React.FC = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { dettagli, getting, getError, response } = useAppSelector(
    (state) => state.f24
  );

  React.useEffect(() => {
    if (!isEmpty(id)) {
      dispatch(get(id!));
    }
  }, [id]);

  if (getting) {
    return <LoadingScreen />;
  } else {
    if (isEmpty(dettagli) || getError) {
      return <ErrorScreen>{response || "Errore di caricamento"}</ErrorScreen>;
    } else {
      return <Form dettagli={dettagli} />;
    }
  }
};

export default Modifica;
