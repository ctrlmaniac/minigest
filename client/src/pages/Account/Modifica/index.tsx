import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ErrorScreen, LoadingScreen } from "~/components";
import get from "~/features/account/get";
import { useAppDispatch, useAppSelector } from "~/hooks";
import AccountModificaForm from "./Form";

const AccountModifica: React.FC = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { dettagli, getting, getError, response } = useAppSelector(
    (state) => state.account
  );

  React.useEffect(() => {
    dispatch(get(id!));
  }, [id]);

  if (getting) {
    return <LoadingScreen />;
  } else {
    if (getError) {
      return <ErrorScreen>{response || "Errore di caricamento"}</ErrorScreen>;
    } else {
      return <AccountModificaForm dettagli={dettagli!} />;
    }
  }
};

export default AccountModifica;
