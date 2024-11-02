/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  resetError,
  signInFailure,
  signInStart,
  signInSuccess,
  signOutUserFailure,
  signOutUserStart,
  signOutUserSuccess,
} from "../redux/user/userSlice";

const API_URL = import.meta.env.VITE_REACT_APP_APIENDPOINT;

const useAuth = () => {
  const dispatch = useDispatch();
  const { currentUser, error, loading } = useSelector(
    (state: any) => state.user
  );

  // Login function
  const login = async (userData: any) => {
    dispatch(signInStart());
    try {
      const response = await axios.post(`${API_URL}/auth/login`, userData);
      const user = response.data;
      if (user.accessToken) {
        // Store the token in local storage (or you can keep it in Redux if preferred)
        localStorage.setItem("access-token", user.accessToken);
      }
      dispatch(signInSuccess(user));
    } catch (err: any) {
      dispatch(signInFailure(err.message));
    }
  };

  // Logout function
  const logout = async () => {
    dispatch(signOutUserStart());
    try {
      //   await axios.post(`${API_URL}/auth/logout`);
      // Remove token from local storage
      localStorage.removeItem("access-token");
      dispatch(signOutUserSuccess());
    } catch (err: any) {
      dispatch(signOutUserFailure(err.message));
    }
  };

  // Optional: Get current user from localStorage (for initializing state)
  const getCurrentUser = () => {
    const token = localStorage.getItem("access-token");
    if (token) {
      // You can add token decoding logic here if needed
      return token;
    }
    return null;
  };

  const resetErrorState = () => {
    dispatch(resetError());
  };

  return {
    currentUser,
    error,
    loading,
    login,
    logout,
    getCurrentUser,
    resetErrorState,
  };
};

export default useAuth;
