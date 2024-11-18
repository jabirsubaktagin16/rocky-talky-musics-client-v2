import { FC } from "react";
import { Helmet } from "react-helmet-async";

export const PageTitle: FC<{ title: string }> = ({ title }) => {
  return (
    <Helmet>
      <title>
        {title.length === 0
          ? "Rocky Talky Musics"
          : `${title} | Rocky Talky Musics`}
      </title>
    </Helmet>
  );
};
