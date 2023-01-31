import React from "react";
import { useParams } from "react-router-dom";
import { ErrorScreen, LoadingScreen } from "~/components";
import { useAppDispatch, useAppSelector } from "~/hooks";
import FormModifica from "./Form";
import get from "~/features/tipoDocFisc/get";

const TipiDocFiscModifica: React.FC = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { dettagli, getting, getError } = useAppSelector(
    (state) => state.tipiDocFisc
  );

  React.useEffect(() => {
    if (id) {
      dispatch(get(id!));
    }
  }, [id]);

  if (getting) {
    return <LoadingScreen />;
  } else if (getError) {
    return <ErrorScreen message={getError} />;
  } else {
    return <FormModifica dettagli={dettagli!} />;
  }
};

export default TipiDocFiscModifica;
