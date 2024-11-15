/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
import toast from "react-hot-toast";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineAlternateEmail, MdPassword } from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router-dom";
import signUpBg from "../../assets/sign-up-bg.jpg";
import { GoogleLogin } from "../../components/GoogleLogin";
import { Loading } from "../../components/Shared/Loading";
import { PageTitle } from "../../components/Shared/PageTitle";
import useAuth from "../../hooks/useAuth";

export const SignUp = () => {
  const { signUp, currentUser, loading, error, resetErrorState } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleSignUp = async (event: any) => {
    event.preventDefault();
    const form = event.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const email = form.email.value;
    const password = form.password.value;
    const userData = {
      name: {
        firstName,
        lastName,
      },
      email: email,
      password: password,
    };

    resetErrorState();

    // Call the login function and wait for it to finish
    const result = await signUp(userData);

    // If login failed, display an error message
    if (!result?.success && result?.error) {
      toast.error(result.error);
    } else if (result?.success) {
      // If login was successful, navigate to the protected route
      navigate(from, { replace: true });
    }
  };

  // useEffect to handle side effects like toast and navigation
  useEffect(() => {
    // If login is successful (currentUser exists), navigate to the protected route
    if (currentUser) {
      navigate(from, { replace: true });
    }
  }, [currentUser, navigate, from]); // Runs whenever error or currentUser changes

  if (loading) return <Loading />;

  return (
    <>
      <PageTitle title={"Sign Up"} />
      <section className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative flex items-end px-4 pb-10 pt-60 sm:pb-16 md:justify-center lg:pb-24 bg-gray-50 sm:px-6 lg:px-8">
            <div className="absolute inset-0">
              <img
                className="object-cover w-full h-full"
                src={signUpBg}
                alt=""
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>

            <div className="relative">
              <div className="w-full max-w-xl xl:w-full xl:mx-auto xl:pr-24 xl:max-w-xl">
                <h3 className="text-4xl font-bold text-white">
                  Join 10k+ music enthusiasts &{" "}
                  <br className="hidden xl:block" />
                  find the perfect instrument for you
                </h3>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center px-4 py-10 bg-white sm:px-6 lg:px-8 sm:py-16 lg:py-24">
            <div className="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
              <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
                Sign up to Celebration
              </h2>
              <p className="mt-2 text-base text-gray-600">
                Already have an account?{" "}
                <Link
                  to={"/sign-in"}
                  title=""
                  className="font-medium text-primary-600 transition-all duration-200 hover:text-primary-700 focus:text-primary-700 hover:underline"
                >
                  Sign In
                </Link>
              </p>

              <form onSubmit={handleSignUp} className="mt-8">
                <div className="space-y-5">
                  <div className="flex gap-3">
                    <div>
                      <label
                        htmlFor=""
                        className="text-base font-medium text-gray-900"
                      >
                        First Name
                      </label>
                      <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <FaRegUser />
                        </div>

                        <input
                          type="text"
                          name="firstName"
                          id="firstName"
                          placeholder="Enter your First name"
                          className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-primary-600 focus:bg-white caret-primary-600"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor=""
                        className="text-base font-medium text-gray-900"
                      >
                        Last Name
                      </label>
                      <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <FaRegUser />
                        </div>

                        <input
                          type="text"
                          name="lastName"
                          id="lastName"
                          placeholder="Enter your Last name"
                          className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-primary-600 focus:bg-white caret-primary-600"
                        />
                      </div>
                    </div>
                  </div>

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
                    <label
                      htmlFor=""
                      className="text-base font-medium text-gray-900"
                    >
                      {" "}
                      Password{" "}
                    </label>
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
                      Sign up
                    </button>
                  </div>
                </div>
              </form>

              <div className="mt-3 space-y-3">
                <GoogleLogin />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
