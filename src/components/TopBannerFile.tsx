import { FC } from "react";
import { Link } from "react-router-dom";
import { TopBannerFileProps } from "../types/topbannerfile";

export const TopBannerFile: FC<TopBannerFileProps> = ({
  backgroundColor,
  heading,
  paragraph,
  url,
  imgSrc,
}) => {
  return (
    <section
      className={`overflow-hidden ${backgroundColor} sm:grid sm:grid-cols-2 items-center`}
    >
      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-xl text-left">
          <h2 className="text-2xl tracking-wide text-white md:text-5xl">
            {heading}
          </h2>

          <p className="hidden text-text-50 md:mt-4 md:block">{paragraph}</p>

          <div className="mt-4 md:mt-8">
            <Link
              to={url}
              className={`inline-block rounded bg-transparent px-12 py-3 text-sm border border-white font-medium text-white transition hover:bg-opacity-90 focus:outline-none focus:ring focus:ring-yellow-400`}
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </div>

      <img alt="" src={imgSrc} className="w-full object-cover sm:h-full" />
    </section>
  );
};
