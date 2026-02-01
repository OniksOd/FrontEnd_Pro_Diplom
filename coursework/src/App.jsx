import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Box, Button } from "@mui/material";
import { useStores } from "./hooks";

export const App = () => {
  const {
    authStore: { getMe, logOut },
  } = useStores();
  useEffect(() => {
    getMe();
  }, []);
  return (
    <Box sx={{ bgcolor: "primary.main", minHeight: "100dvh" }} p={2} gap={2}>
      <Button variant="contained" onClick={logOut}>
        Log Out
      </Button>
      <Outlet />
    </Box>
  );
};
