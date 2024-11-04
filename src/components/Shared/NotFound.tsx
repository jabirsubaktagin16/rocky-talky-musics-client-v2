import { Link } from "react-router-dom";
import error from "../../assets/error.png";

export const NotFound = () => {
  return (
    <div className="grid h-screen place-content-center px-4">
      <div className="text-center">
        <div className="lg:w-4/12 mx-auto">
          <img src={error} alt="Not Found Error" />
        </div>

        <h1 className="mt-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Uh-oh!
        </h1>

        <p className="mt-4 text-gray-500">We can't find that page.</p>
      </div>
      <Link
        to={"/"}
        className="mt-6 inline-block rounded text-center bg-primary-600 px-5 py-3 text-sm font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring"
      >
        Go Back Home
      </Link>
    </div>
  );
};
