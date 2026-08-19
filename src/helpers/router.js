import { createBrowserRouter } from "react-router";

import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Page404 from "../pages/Page404";

import ProfilePage from "../pages/ProfilePage";

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
    path: "editProfile",
    Component: ProfilePage,
  },
  {
    path: "*",
    Component: Page404,
  },
]);

export default router;
