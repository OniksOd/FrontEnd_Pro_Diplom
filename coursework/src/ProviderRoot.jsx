import { ThemeProvider, CssBaseline } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { RouteProvider } from "./providers/RouteProvider";
import { theme } from "./theme/theme";

RouteProvider.initialize(router);

export const Providers = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={RouteProvider.router} />
    </ThemeProvider>
  );
};
