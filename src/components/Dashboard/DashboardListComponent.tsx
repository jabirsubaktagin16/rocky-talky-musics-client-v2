import { FC } from "react";
import { IconType } from "react-icons/lib";
import { Link, useLocation } from "react-router-dom";

interface DashboardLComp {
  id: number;
  path: string;
  title: string;
}

export const DashboardListComponent: FC<{
  Icon: IconType;
  elements: Array<DashboardLComp>;
  title: string;
}> = ({ Icon, elements, title }) => {
  const location = useLocation();
  const getCurrentLocation = location.pathname.split("/");

  const checkActivePath = (st: string) =>
    `block rounded-none px-4 py-2 text-sm font-medium ${
      getCurrentLocation[2] === st
        ? "block rounded-none px-4 py-2 text-sm font-medium text-base-100 bg-base-200 "
        : "text-gray-500 hover:bg-gray-100 hover:text-gray-700"
    }`;
  return (
    <li>
      <details className="group [&_summary::-webkit-details-marker]:hidden">
        <summary className="flex cursor-pointer items-center justify-between rounded-none px-4 py-2 text-text-700 hover:bg-gray-100 hover:text-base-100">
          <span className="flex items-center text-sm font-medium">
            <Icon className="me-3" />
            <span>{title}</span>
          </span>

          <span className="shrink-0 transition duration-300 group-open:-rotate-180">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </summary>

        <ul className="mt-2 space-y-1 px-4">
          {elements.map((el) => (
            <li key={el?.id}>
              <Link to={el?.path} className={checkActivePath(el?.path)}>
                {el?.title}
              </Link>
            </li>
          ))}
        </ul>
      </details>
    </li>
  );
};
