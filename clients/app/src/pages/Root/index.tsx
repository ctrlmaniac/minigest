import React from "react";
import { useAppDispatch, useAppSelector } from "~/hooks";
import { default as getPrincipal } from "~/features/account/get";
import { ErrorScreen, LoadingScreen } from "components";
import { isEmpty } from "lodash";
import { Outlet } from "react-router-dom";

const Root: React.FC = () => {
  const dispatch = useAppDispatch();
  const { getting, getError } = useAppSelector((state) => state.account);

  React.useState(() => {
    dispatch(getPrincipal());
  });

  if (getting) {
    return <LoadingScreen />;
  } else {
    if (!isEmpty(getError)) {
      return <ErrorScreen message={getError!} />;
    }

    return <Outlet />;
  }
};

export default Root;
