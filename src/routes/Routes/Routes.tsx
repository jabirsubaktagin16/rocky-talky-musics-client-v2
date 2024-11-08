import { createBrowserRouter } from "react-router-dom";
import { NotFound } from "../../components/Shared/NotFound";
import { Main } from "../../layouts/Main";
import { AboutUs } from "../../pages/AboutUs";
import { SignIn } from "../../pages/Authentication/SignIn";
import { SignUp } from "../../pages/Authentication/SignUp";
import { Home } from "../../pages/Home";
import { Products } from "../../pages/Products";

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
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
    ],
  },
]);
