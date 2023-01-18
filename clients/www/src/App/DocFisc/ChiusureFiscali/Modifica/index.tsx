import { Container, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import { ErrorScreen, LoadingScreen, Page } from "~/components";
import get from "~/features/chiusureFiscali/get";
import { useAppDispatch, useAppSelector } from "~/hooks";
import FormMofidicaCF from "./Form";

const ModificaCF: React.FC = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const {
    getting,
    getError,
    dettagli: chiusura,
  } = useAppSelector((state) => state.chiusureFiscali);

  React.useEffect(() => {
    dispatch(get(id!));
  }, [dispatch]);

  if (getting) {
    return <LoadingScreen />;
  } else if (getError) {
    return <ErrorScreen messaggio="Impossibile caricare chiusura fiscale" />;
  } else {
    return <FormMofidicaCF chiusura={chiusura!} />;
  }
};

export default ModificaCF;
