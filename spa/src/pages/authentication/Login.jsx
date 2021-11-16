import React from "react";
import { useHistory } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  Paper,
} from "@mui/material";
import { blue } from "@mui/material/colors";
import { showAlert } from "../../redux/actions/alert";
import { loginSuccess } from "../../redux/actions/auth";
import Spacer from "../../components/shared/commons/Spacer";

const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (formData) => {
    if (formData.username !== "" && formData.password === "1234") {
      let account = {
        username: formData.username.toUpperCase(),
      };

      dispatch(loginSuccess(account));
      dispatch(showAlert("success", "Login success!"));
      history.push("/dashboard");
    } else {
      dispatch(showAlert("error", "Credential invalid!"));
    }
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ p: 1, backgroundColor: blue[300] }}>
        <Box display="flex" flexDirection="row" alignItems="center">
          <Spacer width={20} />
          <Typography
            variant="h2"
            sx={{ color: "white", fontSize: 30, fontWeight: "bold" }}
          >
            KiDo Admin
          </Typography>
        </Box>
      </Box>

      <Box
        width="100%"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height="80vh"
      >
        <Paper elevation={5} sx={{ width: "50%", px: 3, py: 10 }}>
          <Box width="100%" display="flex" flexDirection="column">
            <Controller
              name={"username"}
              control={control}
              render={({ field: { onChange, value } }) => (
                <TextField
                  onChange={onChange}
                  defaultValue={value}
                  label={"Email"}
                  variant="standard"
                  inputProps={{ style: { textTransform: "uppercase" } }}
                />
              )}
              rules={{ required: "Id is required!" }}
            />
            {errors.username && (
              <Typography sx={{ color: "red", margin: 0, padding: 0 }}>
                {errors.username.message}
              </Typography>
            )}
            <Box sx={{ marginBottom: 2 }} />
            <Controller
              name={"password"}
              control={control}
              render={({ field: { onChange, value } }) => (
                <TextField
                  onChange={onChange}
                  defaultValue={value}
                  label={"Password"}
                  variant="standard"
                  type="password"
                />
              )}
              rules={{ required: "Password is required!" }}
            />
            {errors.password && (
              <Typography
                variant="body1"
                sx={{ color: "red", margin: 0, padding: 0 }}
              >
                {errors.password.message}
              </Typography>
            )}

            <Button
              sx={{ marginTop: 3 }}
              onClick={handleSubmit(onSubmit)}
              variant="contained"
            >
              Login
            </Button>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default Login;
