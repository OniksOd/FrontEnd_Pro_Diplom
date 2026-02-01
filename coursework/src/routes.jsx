import { createBrowserRouter, Navigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import { LoginPage } from "./pages/login/LoginPage";
import { Register } from "./pages/login/Register";
import { ProductsPage } from "./pages/Products/ProductsPage";
import { App } from "./App";
import { PrivateRoute } from "./components/route/PrivateRoute";

const PreviewPage = () =>
  import("./pages/Preview/PreviewPage").then((module) => ({
    Component: module.PreviewPage,
  }));

export const router = createBrowserRouter([
  {
    path: "/",
    hydrateFallbackElement: <CircularProgress />,
    element: <App />,
    children: [
      {
        index: true,
        element: (
          <PrivateRoute fallback={<Navigate to="/auth/login" replace />}>
            <ProductsPage />
          </PrivateRoute>
        ),
      },

      { path: "preview", lazy: PreviewPage },
      { path: "*", element: <div>Not found</div> },
    ],
  },
  {
    path: "auth",
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "sign-up",
        element: <Register />,
      },
    ],
  },
]);
