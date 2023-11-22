import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "../../layout/Layout";
import AccountPage from "../../page/AccountPage";
import Carpage from "../../page/Carpage";
import Customerpage from "../../page/Customerpage";
import Driverpage from "../../page/Driverpage";
import Homepage from "../../page/Homepage";
import LoginPage from "../../page/Loginpage";
import RegisterPage from "../../page/Registerpage";
import Authenticated from "../auth/Authenticated";
import RedirectIfauthenticated from "../auth/RedirectIfauthenticated";
import PreviewPage from "../../page/PreviewPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Authenticated>
        <Layout />
      </Authenticated>
    ),
    children: [
      { path: "", element: <Homepage /> },
      { path: "car", element: <Carpage /> },
      { path: "customer", element: <Customerpage /> },
      { path: "driver", element: <Driverpage /> },
      { path: "account", element: <AccountPage /> },
    ],
  },
  {
    path: "/login",
    element: (
      <RedirectIfauthenticated>
        <LoginPage />,
      </RedirectIfauthenticated>
    ),
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/account/:id",
    element: <PreviewPage />,
  },
]);

export default function Route() {
  return <RouterProvider router={router} />;
}
