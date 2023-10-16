import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "../../layout/Layout";
import AccountPage from "../../page/AccountPage";
import Carpage from "../../page/Carpage";
import Customerpage from "../../page/Customerpage";
import Driverpage from "../../page/Driverpage";
import Homepage from "../../page/Homepage";
import LoginPage from "../../page/Loginpage";
import RegisterPage from "../../page/Registerpage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
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
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
]);

export default function Route() {
  return <RouterProvider router={router} />;
}
