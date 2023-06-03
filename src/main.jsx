import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { createHashRouter, Outlet, RouterProvider } from "react-router-dom";

import Home from "./routes/Home.jsx";
import Checkout from "./routes/Checkout";

import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import TelaCadastro from "./routes/CadastroLogin";
import AdminTela from "./routes/Admin";
const router = createHashRouter([
  {
    path: "/",
    element: <Outlet />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/Checkout", element: <Checkout /> },
      { path: "/CadastroLogin", element: <TelaCadastro /> },
      { path: "/Admim", element: <AdminTela /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
