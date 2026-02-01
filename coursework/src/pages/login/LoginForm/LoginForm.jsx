import { FormContainer, TextFieldElement } from "react-hook-form-mui";
import {
  Button,
  IconButton,
  InputAdornment,
  Paper,
  Typography,
  Stack,
} from "@mui/material";
import { useState } from "react";
import { observer } from "mobx-react-lite";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useForm } from "react-hook-form";
import logo from "../../../assets/logo.png";
import { loginSchema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";

export const LoginForm = observer(({ onSubmit, register, error }) => {
  const [showPassword, setShowPassword] = useState(false);
  const formContext = useForm({
    defaultValues: { email: "", password: "" },
    mode: "onSubmit",
    reValidateMode: "onChange",
    resolver: zodResolver(loginSchema),
  });

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  const handleSuccess = (data) => {
    onSubmit(data);
    formContext.reset();
  };
  return (
    <Paper
      sx={{ p: 4, width: "100%", textAlign: "center", maxWidth: 500 }}
      elevation={3}
    >
      <Stack
        sx={{
          mb: 4,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 1,
        }}
      >
        <img
          src={logo}
          alt="Logo"
          style={{ height: 40, width: 40, backgroundColor: "black" }}
        />
        <Typography
          variant="h4"
          component="h1"
          sx={{ color: "primary.main", fontWeight: "bold" }}
        >
          ROZETKA
        </Typography>
      </Stack>
      <FormContainer formContext={formContext} onSuccess={handleSuccess}>
        <TextFieldElement name="email" label="user email" required fullWidth />
        <TextFieldElement
          name="password"
          label="password"
          type={showPassword ? "text" : "password"}
          required
          fullWidth
          sx={{ mt: 3 }}
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleTogglePassword} edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            },
          }}
        />
        {error && <Typography color="error.main">{error.message}</Typography>}
        <Button fullWidth type="submit" variant="contained" sx={{ mt: 3 }}>
          {register ? "Sign up " : "Login"}
        </Button>
      </FormContainer>
    </Paper>
  );
});
