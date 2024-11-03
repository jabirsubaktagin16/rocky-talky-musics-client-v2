import { Avatar, Dropdown } from "flowbite-react";
import { FaAngleDown, FaDrumSteelpan, FaThList } from "react-icons/fa";
import {
  GiAccordion,
  GiGuitar,
  GiPianoKeys,
  GiTrumpet,
  GiViolin,
} from "react-icons/gi";
import { IoCartSharp } from "react-icons/io5";
import { SiAnimalplanet } from "react-icons/si";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import useAuth from "../../hooks/useAuth";

export const Navbar = () => {
  const { currentUser, logout, loading, error } = useAuth();
  const handleLogOut = () => {
    logout()
      .then(() => {})
      .catch((error) => console.log(error));
  };

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
                className="w-48 px-4 py-2 text-sm text-gray-900 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-800 dark:text-white"
              />
            </div>
            {currentUser ? (
              <>
                <div className="flex md:order-2">
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
                      <Link to={"/dashboard/my-profile"}>Dashboard</Link>
                    </Dropdown.Item>
                    <Dropdown.Item>Settings</Dropdown.Item>
                    <Dropdown.Item>Earnings</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item>
                      <span role="button" onClick={handleLogOut}>
                        Sign out
                      </span>
                    </Dropdown.Item>
                  </Dropdown>
                </div>
              </>
            ) : (
              <Link
                to={"/sign-in"}
                className="text-primary-700 hover:text-white border border-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium text-sm px-5 py-2.5 text-center dark:border-primary-500 dark:text-primary-500 dark:hover:text-white dark:hover:bg-primary-500 dark:focus:ring-primary-800"
              >
                Join Now
              </Link>
            )}

            <button className="text-gray-600 dark:text-white focus:outline-none hover:text-primary-600">
              <IoCartSharp />
            </button>
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
              <li>
                <button
                  id="mega-menu-icons-dropdown-button"
                  data-dropdown-toggle="mega-menu-icons-dropdown"
                  className="flex items-center justify-between w-full px-3 font-medium uppercase text-gray-900 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-primary-500 md:p-0 dark:text-white md:dark:hover:text-primary-500 dark:hover:bg-gray-700 dark:hover:text-primary-500 md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Products
                  <FaAngleDown />
                </button>
                <div
                  id="mega-menu-icons-dropdown"
                  className="absolute z-10 grid hidden w-auto grid-cols-2 text-sm bg-white border border-gray-100 shadow-md dark:border-gray-700 md:grid-cols-3 dark:bg-gray-700"
                >
                  <div className="p-4 pb-0 text-gray-900 md:pb-4 dark:text-white">
                    <ul
                      className="space-y-4"
                      aria-labelledby="mega-menu-icons-dropdown-button"
                    >
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
                        <a
                          href="#"
                          className="flex items-center text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500 group"
                        >
                          <span className="sr-only">Bass Guitar</span>
                          <GiGuitar className="me-2 text-gray-400 dark:text-gray-500 group-hover:text-primary-600 dark:group-hover:text-primary-500" />
                          Bass Guitar
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="flex items-center text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500 group"
                        >
                          <span className="sr-only">Violin</span>
                          <GiViolin className="me-2 text-gray-400 dark:text-gray-500 group-hover:text-primary-600 dark:group-hover:text-primary-500" />
                          Violin
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="p-4 pb-0 text-gray-900 md:pb-4 dark:text-white">
                    <ul className="space-y-4">
                      <li>
                        <a
                          href="#"
                          className="flex items-center text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500 group"
                        >
                          <span className="sr-only">Fish</span>
                          <FaDrumSteelpan className="me-2 text-gray-400 dark:text-gray-500 group-hover:text-primary-600 dark:group-hover:text-primary-500" />
                          Drums
                        </a>
                      </li>

                      <li>
                        <a
                          href="#"
                          className="flex items-center text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500 group"
                        >
                          <span className="sr-only">Birds</span>
                          <GiPianoKeys className="me-2 text-gray-400 dark:text-gray-500 group-hover:text-primary-600 dark:group-hover:text-primary-500" />
                          Keyboard
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="flex items-center text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500 group"
                        >
                          <span className="sr-only">Trumpet</span>
                          <GiTrumpet className="me-2 text-gray-400 dark:text-gray-500 group-hover:text-primary-600 dark:group-hover:text-primary-500" />
                          Trumpet
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="p-4 text-gray-900 dark:text-white">
                    <ul className="space-y-4">
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

                      <li>
                        <a
                          href="#"
                          className="flex items-center text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500 group"
                        >
                          <span className="sr-only">Others</span>
                          <SiAnimalplanet className="me-2 text-gray-400 dark:text-gray-500 group-hover:text-primary-600 dark:group-hover:text-primary-500" />
                          Others
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
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
    </>
  );
};
