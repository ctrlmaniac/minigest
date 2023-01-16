import React from "react";
import { useTitleContext } from "~/context/title";

interface Props {
  title: string;
  children: JSX.Element | JSX.Element[] | null;
}

const Page: React.FC<Props> = ({ title, children }) => {
  const { setTitle } = useTitleContext();

  React.useEffect(() => {
    setTitle(title);
  });

  return <>{children}</>;
};

export default Page;
