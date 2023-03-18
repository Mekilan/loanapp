import React, { useEffect, useState } from "react";
import { Container, TextField, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { get, setAuthToken } from "./../common/AxiosCreate";
import { BaseURL } from "../common/EndPoint";

const styles = {
  loginContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "15rem",
  },
};
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const handleEmailChange = (e) => {
    const emailVal = e.target.value;
    setEmail(emailVal);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email) {
      const token = process.env.REACT_APP_API_AUTHKEY;
      setAuthToken(token);
      const URL = BaseURL;
      const response = await get(`${URL}user`);
      if (response.status === 200) {
        if (response.data.length !== 0) {
          const chkUser = response.data.email;
          const name = response.data.name;
          localStorage.setItem("email", chkUser);
          localStorage.setItem("name", name);
          if (chkUser === email) {
            navigate("/dashboard");
          } else {
            navigate("/");
          }
        }
      }
    }
  };
  useEffect(() => {
    let email = localStorage.getItem("email");
    if (email) {
      navigate("/dashboard");
    }
  }, [navigate]);
  return (
    <Container maxWidth="xs" sx={styles.loginContainer}>
      <Typography
        component="h1"
        variant="h5"
        sx={{ fontSize: "16px", color: "#555" }}
      >
        Loan Application Login Page
      </Typography>
      <form onSubmit={(e) => handleSubmit(e)}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          placeholder="j.doe@example.com"
          name="email"
          autoComplete="email"
          autoFocus
          value={email}
          onChange={(e) => handleEmailChange(e)}
        />
        <Button type="submit" fullWidth variant="contained" color="primary">
          Login
        </Button>
      </form>
    </Container>
  );
};

export default Login;
