import { FC } from "react";
import { FaCartPlus, FaRegHeart } from "react-icons/fa";
import { ProductCardProps } from "../../types/product";

export const ProductInfo: FC<ProductCardProps> = ({ product }) => {
  return (
    <section className="py-8 md:py-16 dark:bg-gray-900 antialiased">
      <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
          <div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
            <img
              className="w-full dark:hidden"
              src={product?.images[0]}
              alt=""
            />
            <img
              className="w-full hidden dark:block"
              src={product?.images[0]}
              alt=""
            />
          </div>

          <div className="mt-6 sm:mt-8 lg:mt-0">
            <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">
              {product?.name}
            </h1>
            <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
              <p className="text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-white">
                ${product?.price}
              </p>
            </div>

            <div className="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
              <a
                href="#"
                title=""
                className="flex items-center justify-center py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                role="button"
              >
                <FaRegHeart className="me-2" />
                Add to favorites
              </a>

              <a
                href="#"
                title=""
                className="text-white mt-4 sm:mt-0 bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium text-sm px-5 py-2.5 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 flex items-center justify-center"
                role="button"
              >
                <FaCartPlus className="me-2" />
                Add to cart
              </a>
            </div>

            <hr className="my-6 md:my-8 border-gray-200 dark:border-gray-800" />

            <p className="mb-6 text-gray-500 dark:text-gray-400">
              {product?.description}
            </p>

            {/* <p className="text-gray-500 dark:text-gray-400">
                Two Thunderbolt USB 4 ports and up to two USB 3 ports. Ultrafast
                Wi-Fi 6 and Bluetooth 5.0 wireless. Color matched Magic Mouse
                with Magic Keyboard or Magic Keyboard with Touch ID.
              </p> */}
          </div>
        </div>
      </div>
    </section>
  );
};
