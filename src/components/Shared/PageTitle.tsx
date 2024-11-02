import { Helmet } from "react-helmet-async";

export const PageTitle = ({ title }) => {
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
