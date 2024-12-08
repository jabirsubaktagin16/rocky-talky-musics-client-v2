import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { FaGoogle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import app from "../firebase/firebase.config";
import { signInSuccess } from "../redux/user/userSlice";

export const GoogleLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const googleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app.initialApp);

      const result = await signInWithPopup(auth, provider);

      const res = await fetch("/api/auth/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: {
            firstName: result.user.displayName,
            lastName: result.user.displayName,
          },
          email: result.user.email,
          photo: result.user.photoURL,
        }),
      });
      const data = await res.json();
      dispatch(signInSuccess(data));
      navigate("/");
    } catch (error) {
      console.log("could not sign in with google", error);
    }
  };

  return (
    <div className="mt-3 space-y-3">
      <button
        onClick={googleSignIn}
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
