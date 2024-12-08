import { Avatar, Drawer, Dropdown, MegaMenu } from "flowbite-react";
import { useState } from "react";
import { CgComment } from "react-icons/cg";
import { FaDrumSteelpan, FaThList } from "react-icons/fa";
import {
  GiAccordion,
  GiFlute,
  GiGuitar,
  GiPianoKeys,
  GiTrumpet,
  GiViolin,
} from "react-icons/gi";
import { IoCartSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import useAuth from "../../hooks/useAuth";
import { NavbarCartItem } from "../NavbarCartItem";

export const Navbar = () => {
  const { currentUser, logout, loading, error } = useAuth();
  const handleLogOut = () => {
    logout()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  return (
    <>
      <nav className="border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <Link
            to={"/"}
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={logo} className="h-12" alt="Rocky Talky Musics Logo" />
          </Link>

          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-48 px-4 py-2 text-sm text-gray-900 bg-transparent focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-800 dark:text-white"
              />
            </div>
            {currentUser ? (
              <>
                <div className="flex">
                  <Dropdown
                    arrowIcon={false}
                    inline
                    label={
                      <Avatar
                        alt="User settings"
                        img={currentUser?.data?.userInfo?.avatar}
                        rounded
                      />
                    }
                  >
                    <Dropdown.Header>
                      <span className="block text-sm">
                        {currentUser?.userInfo?.name?.firstName}{" "}
                        {currentUser?.userInfo?.name?.lastName}
                      </span>
                      <span className="block truncate text-sm font-medium">
                        {currentUser?.userInfo?.email}
                      </span>
                    </Dropdown.Header>
                    <Dropdown.Item>
                      <Link to={"/dashboard/my-profile"}>My Profile</Link>
                    </Dropdown.Item>
                    <Dropdown.Item>My Wishlist</Dropdown.Item>
                    <Dropdown.Item>My Orders</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item onClick={handleLogOut}>
                      Sign out
                    </Dropdown.Item>
                  </Dropdown>
                </div>
              </>
            ) : (
              <Link
                to={"/sign-in"}
                className="text-primary-700 hover:text-white border border-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium text-sm px-5 py-2 text-center dark:border-primary-500 dark:text-primary-500 dark:hover:text-white dark:hover:bg-primary-500 dark:focus:ring-primary-800"
              >
                Join Now
              </Link>
            )}
            <IoCartSharp
              role="button"
              onClick={() => setIsOpen(true)}
              className="block text-sm/6 font-semibold text-gray-600  focus:outline-none data-[active]:text-primary-600 data-[hover]:text-primary-600 data-[focus]:outline-1"
            />

            {/* <button className="text-gray-600 dark:text-white focus:outline-none hover:text-primary-600">
              <IoCartSharp />
            </button> */}
          </div>
        </div>
      </nav>
      <nav className="bg-gray-100 dark:bg-gray-700">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
              <li>
                <Link
                  to={"/"}
                  className="text-gray-900 uppercase dark:text-white hover:text-primary-500"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li className="hover:text-primary-500">
                <MegaMenu.Dropdown
                  className="rounded-none"
                  toggle={<div className="uppercase">Products</div>}
                >
                  <ul className="grid grid-cols-3">
                    <div className="space-y-4 p-4">
                      <li>
                        <Link
                          to={"/products"}
                          className="flex items-center text-gray-500 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-500 group"
                        >
                          <span className="sr-only">All</span>
                          <FaThList className="me-2 text-gray-400 dark:text-gray-500 group-hover:text-primary-600 dark:group-hover:text-primary-500" />
                          All
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={"/products/guitars"}
                          className="flex items-center text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500 group"
                        >
                          <span className="sr-only">Guitars</span>
                          <GiGuitar className="me-2 text-gray-400 dark:text-gray-500 group-hover:text-primary-600 dark:group-hover:text-primary-500" />
                          Guitars
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={"/products/violins"}
                          className="flex items-center text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500 group"
                        >
                          <span className="sr-only">Violin</span>
                          <GiViolin className="me-2 text-gray-400 dark:text-gray-500 group-hover:text-primary-600 dark:group-hover:text-primary-500" />
                          Violin
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={"/products/flutes"}
                          className="flex items-center text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500 group"
                        >
                          <span className="sr-only">Flutes</span>
                          <GiFlute className="me-2 text-gray-400 dark:text-gray-500 group-hover:text-primary-600 dark:group-hover:text-primary-500" />
                          Flutes
                        </Link>
                      </li>
                    </div>
                    <div className="space-y-4 p-4">
                      <li>
                        <Link
                          to={"/products/drums"}
                          className="flex items-center text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500 group"
                        >
                          <span className="sr-only">Fish</span>
                          <FaDrumSteelpan className="me-2 text-gray-400 dark:text-gray-500 group-hover:text-primary-600 dark:group-hover:text-primary-500" />
                          Drums
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={"/products/keyboards"}
                          className="flex items-center text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500 group"
                        >
                          <span className="sr-only">Birds</span>
                          <GiPianoKeys className="me-2 text-gray-400 dark:text-gray-500 group-hover:text-primary-600 dark:group-hover:text-primary-500" />
                          Keyboard
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={"/products/trumpets"}
                          className="flex items-center text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500 group"
                        >
                          <span className="sr-only">Trumpet</span>
                          <GiTrumpet className="me-2 text-gray-400 dark:text-gray-500 group-hover:text-primary-600 dark:group-hover:text-primary-500" />
                          Trumpet
                        </Link>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="flex items-center text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500 group"
                        >
                          <span className="sr-only">Accordion</span>
                          <GiAccordion className="me-2 text-gray-400 dark:text-gray-500 group-hover:text-primary-600 dark:group-hover:text-primary-500" />
                          Accordion
                        </a>
                      </li>
                    </div>
                    <div className="space-y-4 p-4">
                      <li>
                        <a
                          href="#"
                          className="flex items-center text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500 group"
                        >
                          <span className="sr-only">Others</span>
                          <CgComment className="me-2 text-gray-400 dark:text-gray-500 group-hover:text-primary-600 dark:group-hover:text-primary-500" />
                          Others
                        </a>
                      </li>
                    </div>
                  </ul>
                </MegaMenu.Dropdown>
              </li>
              <li>
                <Link
                  to={"/about-us"}
                  className="text-gray-900 uppercase dark:text-white hover:text-primary-500"
                >
                  About Us
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-900 uppercase dark:text-white hover:text-primary-500"
                >
                  Blogs
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Drawer
        className="border-gray-600 bg-gray-100"
        open={isOpen}
        onClose={handleClose}
        position="right"
      >
        <Drawer.Header title="CART" titleIcon={() => <></>} />
        <Drawer.Items>
          <ul className="space-y-4">
            <NavbarCartItem />
            <NavbarCartItem />
            <NavbarCartItem />
          </ul>

          <div className="mt-4 space-y-4 text-center">
            <Link
              to={"/cart"}
              onClick={handleClose}
              className="block rounded border border-gray-600 px-5 py-3 text-sm text-gray-600 transition hover:ring-1 hover:ring-gray-400"
            >
              View my cart (2)
            </Link>

            <a
              href="#"
              className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
            >
              Checkout
            </a>

            <button
              onClick={handleClose}
              className="inline-block text-sm text-gray-500 underline underline-offset-4 transition hover:text-gray-600"
            >
              Continue shopping
            </button>
          </div>
        </Drawer.Items>
      </Drawer>
    </>
  );
};
