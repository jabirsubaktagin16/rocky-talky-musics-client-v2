import { createBrowserRouter } from "react-router-dom";
import { NotFound } from "../../components/Shared/NotFound";
import { DashboardLayout } from "../../layouts/DashboardLayout";
import { Main } from "../../layouts/Main";
import { AboutUs } from "../../pages/AboutUs";
import { SignIn } from "../../pages/Authentication/SignIn";
import { SignUp } from "../../pages/Authentication/SignUp";
import { MyProfile } from "../../pages/Dashboard/MyProfile";
import { Home } from "../../pages/Home";
import { ProductDetails } from "../../pages/ProductDetails";
import { Products } from "../../pages/Products";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
        path: "products/:id",
        element: <ProductDetails />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "my-profile",
        element: (
          <PrivateRoute>
            <MyProfile />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
