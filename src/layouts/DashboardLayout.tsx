import { BiSolidPurchaseTagAlt } from "react-icons/bi";
import { FaHeart, FaRegUserCircle, FaSignOutAlt } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscPreview } from "react-icons/vsc";
import { Link, Outlet } from "react-router-dom";
import logo from "../assets/logo.png";
import { DashboardListComponent } from "../components/Dashboard/DashboardListComponent";
import useAuth from "../hooks/useAuth";
import pathList from "../utils/pathList";

export const DashboardLayout = () => {
  const { currentUser, logout, loading, error } = useAuth();
  const handleLogOut = () => {
    logout()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const getCurrentLocation = location.pathname.split("/");

  const checkActivePath = (st: string) =>
    `block rounded-none px-4 py-2 text-sm font-medium ${
      getCurrentLocation[2] === st
        ? "bg-primary-400 text-white"
        : "text-primary-700 hover:bg-gray-100 hover:text-base-100"
    }`;

  return (
    <>
      <button
        data-drawer-target="user-profile-sidebar"
        data-drawer-toggle="user-profile-sidebar"
        aria-controls="user-profile-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-text-700 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <GiHamburgerMenu />
      </button>

      <aside
        id="user-profile-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="flex h-screen flex-col justify-between border-e bg-primary-100">
          <div className="px-4 py-6">
            <Link to={"/"} className="mx-auto">
              <img src={logo} className="h-10" alt="Rocky Talky Musics Logo" />
            </Link>

            <ul className="mt-6 space-y-1">
              <li>
                <Link
                  to={"/dashboard/my-profile"}
                  className={checkActivePath("my-profile")}
                >
                  <span className="flex items-center">
                    <FaRegUserCircle className="me-3" />
                    <span>My Profile</span>
                  </span>
                </Link>
              </li>

              <DashboardListComponent
                Icon={BiSolidPurchaseTagAlt}
                elements={pathList.orderManagement}
                title={"Orders and Purchases"}
              />

              <li>
                <Link
                  to={"/dashboard/wishlist"}
                  className={checkActivePath("wishlist")}
                >
                  <span className="flex items-center">
                    <FaHeart className="me-3" />
                    <span>My Wishlist</span>
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to={"/dashboard/my-reviews"}
                  className={checkActivePath("my-reviews")}
                >
                  <span className="flex items-center">
                    <VscPreview className="me-3" />
                    <span>My Reviews</span>
                  </span>
                </Link>
              </li>
              <li>
                <button
                  onClick={handleLogOut}
                  className="block w-full rounded-none px-4 py-2 text-sm font-medium text-primary-700 hover:bg-gray-100 hover:text-base-100"
                >
                  <span className="flex items-center">
                    <FaSignOutAlt className="me-3" />
                    <span>Sign Out</span>
                  </span>
                </button>
              </li>
            </ul>
          </div>

          <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
            <a href="#" className="flex items-center gap-2 bg-primary-500 p-4">
              <img
                alt=""
                src={currentUser?.userInfo?.avatar}
                className="size-10 rounded-full object-cover"
              />

              <div>
                <p className="text-xs">
                  <strong className="block font-bold text-white">
                    {currentUser?.userInfo?.name?.firstName}{" "}
                    {currentUser?.userInfo?.name?.lastName}
                  </strong>

                  <span className="text-gray-300">
                    {currentUser?.userInfo?.email}
                  </span>
                </p>
              </div>
            </a>
          </div>
        </div>
      </aside>

      <div className="p-4 sm:ml-64">
        <div className="p-4 ">
          <Outlet />
        </div>
      </div>
    </>
  );
};
