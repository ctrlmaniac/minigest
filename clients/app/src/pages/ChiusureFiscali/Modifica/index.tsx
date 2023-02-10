import { isEmpty } from "lodash";
import React from "react";
import { useParams } from "react-router-dom";
import get from "~/features/chiusureFiscali/get";
import { useAppDispatch, useAppSelector } from "~/hooks";
import { ErrorScreen, LoadingScreen } from "components";
import Form from "./Form";

const Modifica: React.FC = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { getting, getError, response, dettagli } = useAppSelector(
    (state) => state.chiusureFiscali
  );

  React.useEffect(() => {
    if (!isEmpty(id)) {
      dispatch(get(id!));
    }
  }, [id]);

  if (getting) {
    return <LoadingScreen />;
  } else {
    if (getError || isEmpty(dettagli)) {
      return (
        <ErrorScreen
          message={response || "Errore caricamento chiusura fiscale"}
        />
      );
    }

    return <Form dettagli={dettagli} />;
  }
};

export default Modifica;
