import React from "react";
import { ErrorScreen, LoadingScreen } from "~/components";
import { useAppDispatch, useAppSelector } from "~/hooks";
import Form from "./Form";

const ModificaAzienda: React.FC = () => {
  const dispatch = useAppDispatch();
  const { getting, getError, dettagli } = useAppSelector(
    (state) => state.aziende
  );

  if (getting) {
    return <LoadingScreen />;
  } else if (getError) {
    return <ErrorScreen messaggio="Impossibile recuperare Azienda" />;
  } else {
    return <Form azienda={dettagli!} />;
  }
};

export default ModificaAzienda;
