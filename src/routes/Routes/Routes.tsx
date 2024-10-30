import { createBrowserRouter } from "react-router-dom";
import { NotFound } from "../../components/Shared/NotFound";
import { Main } from "../../layouts/Main";
import { SignIn } from "../../pages/Authentication/SignIn";
import { SignUp } from "../../pages/Authentication/SignUp";
import { Home } from "../../pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "sign-in",
        element: <SignIn />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
    ],
  },
]);
