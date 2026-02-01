import { observer } from "mobx-react-lite";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { LoginForm } from "./LoginForm";
import { useStores } from "../../hooks";

export const Register = observer(() => {
  const {
    authStore: { signUp, loginError },
  } = useStores();
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "primary.main",
        justifyContent: "center",
      }}
    >
      <LoginForm onSubmit={signUp} error={loginError} register />
      <Link to="/auth/login">Login</Link>
    </Box>
  );
});
