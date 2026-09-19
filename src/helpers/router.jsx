import { createBrowserRouter, Navigate } from "react-router";

import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Page404 from "../pages/Page404";

import AdminDashboard from "../pages/AdminDashboard";
import AdminRoute from "./AdminRoute";

import MenuProfile from "../pages/Profile/MenuProfile";
import EditProfile from "../features/menuProfile/components/EditProfile";
import MyCourse from "../features/menuProfile/components/MyCourse";
import MyOrder from "../features/menuProfile/components/Chart/Chart";

const router = createBrowserRouter([
  {
    path: "/",
    index: true,
    Component: App,
  },
  {
    path: "login",
    Component: Login,
  },
  {
    path: "register",
    Component: Register,
  },
  {
    path: "adminDashboard",
    element: (
      <AdminRoute>
        <AdminDashboard />
      </AdminRoute>
    ),
  },
  {
    path: "/menu",
    element: <MenuProfile />,
    children: [
      { index: true, element: <Navigate to="editProfile" replace /> },
      { path: "editProfile", element: <EditProfile /> },
      { path: "myCourse", element: <MyCourse /> },
      { path: "chart", element: <MyOrder /> },
    ],
  },
  {
    path: "*",
    Component: Page404,
  },
]);

export default router;
