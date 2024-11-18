import { FaGoogle } from "react-icons/fa";

export const GoogleLogin = () => {
  return (
    <div className="mt-3 space-y-3">
      <button
        type="button"
        className="relative inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-gray-700 transition-all duration-200 bg-white border-2 border-gray-200 rounded-md hover:bg-gray-100 focus:bg-gray-100 hover:text-black focus:text-black focus:outline-none"
      >
        <div className="absolute inset-y-0 left-0 p-4">
          <FaGoogle className="text-rose-500" />
        </div>
        Sign in with Google
      </button>
    </div>
  );
};
