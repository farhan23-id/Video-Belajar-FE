import "./styles/tailwind-input.css";
import "./styles/App.css";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router/dom";
import router from "./helpers/router";

import { StrictMode } from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
);
