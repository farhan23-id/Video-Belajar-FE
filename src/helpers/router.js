import { createBrowserRouter } from "react-router";

import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Page404 from "../pages/Page404";

import EditProfileForm from "../components/organism/EditProfileForm";
import ProfileNav from "../components/organism/ProfileNav";
import ProfilePage from "../pages/profile/ProfilePage";

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
    path: "test",
    Component: EditProfileForm,
  },
  {
    path: "test2",
    Component: ProfileNav,
  },
  {
    path: "*",
    Component: Page404,
  },
]);

export default router;
