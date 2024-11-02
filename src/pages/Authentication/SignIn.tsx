import { useEffect } from "react";
import toast from "react-hot-toast";
import { MdOutlineAlternateEmail, MdPassword } from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router-dom";
import loginBG from "../../assets/login-bg.jpg";
import { GoogleLogin } from "../../components/GoogleLogin";
import useAuth from "../../hooks/useAuth";

export const SignIn = () => {
  const { login, currentUser, loading, error, resetErrorState } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = async (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const userData = { email, password };

    resetErrorState();

    // Call the login function and wait for it to finish
    await login(userData);
  };

  // useEffect to handle side effects like toast and navigation
  useEffect(() => {
    // If there's an error, display it using toast
    if (error) {
      toast.error(error);
    }

    // If login is successful (currentUser exists), navigate to the protected route
    if (currentUser) {
      navigate(from, { replace: true });
    }
  }, [error, currentUser, navigate, from]); // Runs whenever error or currentUser changes

  return (
    <section className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative flex items-end px-4 pb-10 pt-60 sm:pb-16 md:justify-center lg:pb-24 bg-gray-50 sm:px-6 lg:px-8">
          <div className="absolute inset-0">
            <img
              className="object-cover object-top w-full h-full"
              src={loginBG}
              alt=""
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>

          <div className="relative">
            <div className="w-full max-w-xl xl:w-full xl:mx-auto xl:pr-24 xl:max-w-xl">
              <h3 className="text-4xl font-bold text-white">
                Join 10k+ music enthusiasts & <br className="hidden xl:block" />
                find the perfect instrument for you
              </h3>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center px-4 py-10 bg-white sm:px-6 lg:px-8 sm:py-16 lg:py-24">
          <div className="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
              Sign in to Celebration
            </h2>
            <p className="mt-2 text-base text-gray-600">
              Don’t have an account?{" "}
              <Link
                to={"/sign-up"}
                title=""
                className="font-medium text-primary-600 transition-all duration-200 hover:text-primary-700 focus:text-primary-700 hover:underline"
              >
                Create a free account
              </Link>
            </p>

            <form onSubmit={handleLogin} className="mt-8">
              <div className="space-y-5">
                <div>
                  <label
                    htmlFor=""
                    className="text-base font-medium text-gray-900"
                  >
                    {" "}
                    Email address{" "}
                  </label>
                  <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <MdOutlineAlternateEmail />
                    </div>

                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Enter email to get started"
                      className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-primary-600 focus:bg-white caret-primary-600"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor=""
                      className="text-base font-medium text-gray-900"
                    >
                      {" "}
                      Password{" "}
                    </label>

                    <a
                      href="#"
                      title=""
                      className="text-sm font-medium text-primary-600 transition-all duration-200 hover:text-primary-700 focus:text-primary-700 hover:underline"
                    >
                      {" "}
                      Forgot password?{" "}
                    </a>
                  </div>
                  <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <MdPassword />
                    </div>

                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Enter your password"
                      className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-primary-600 focus:bg-white caret-primary-600"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 border border-transparent rounded-md bg-gradient-to-r from-fuchsia-600 to-primary-600 focus:outline-none hover:opacity-80 focus:opacity-80"
                  >
                    Log in
                  </button>
                </div>
              </div>
            </form>

            <GoogleLogin />
          </div>
        </div>
      </div>
    </section>
  );
};
