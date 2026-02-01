import { observer } from "mobx-react-lite";
import { CircularProgress } from "@mui/material";

import { useStores } from "../../hooks/useStores";

export const PrivateRoute = observer(({ children, fallback = null }) => {
  const {
    authStore: { isLoading, isAuthorized },
  } = useStores();

  if (isLoading) return <CircularProgress />;

  return isAuthorized ? children : fallback;
});
