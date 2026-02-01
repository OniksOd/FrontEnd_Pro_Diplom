import { observer } from "mobx-react-lite";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { LoginForm } from "./LoginForm";
import { useStores } from "../../hooks";

export const LoginPage = observer(() => {
  const {
    authStore: { login, loginError },
  } = useStores();
  return (
    <Box
      sx={{
        minHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "primary.main",
        justifyContent: "center",
      }}
    >
      <LoginForm onSubmit={login} error={loginError} />
      <Link to="/auth/sign-up">Sign up</Link>
    </Box>
  );
});
