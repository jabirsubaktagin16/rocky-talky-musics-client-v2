import { FC } from "react";
import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ProductCardProps } from "../types/product";

export const ProductCard: FC<ProductCardProps> = ({ product }) => {
  return (
    <Link
      to={`/products/${product._id}`}
      className="group relative block overflow-hidden bg-white border h-full flex flex-col justify-between"
    >
      <button className="absolute right-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75">
        <span className="sr-only">Wishlist</span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-4 w-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
          />
        </svg>
      </button>

      <img
        src={product?.images[0]}
        alt=""
        className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
      />

      <div className="p-6 flex flex-col justify-between flex-1">
        <div>
          <h3 className="text-lg font-medium text-gray-900">{product?.name}</h3>
        </div>
        <div className="mt-4 ">
          <p className="text-sm text-gray-700 mb-4">${product?.price}</p>
          <button
            className="text-white w-full sm:mt-0 bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium text-sm px-5 py-2.5 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 flex items-center justify-center"
            role="button"
          >
            <FaCartPlus className="me-2" />
            Add to cart
          </button>
        </div>
      </div>
    </Link>
  );
};
