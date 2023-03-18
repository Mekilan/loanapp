import React from "react";
import { AppBar, Toolbar, Button, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { setAuthToken } from "./common/AxiosCreate";

const styles = {
  logoutbtn: {
    display: "flex",
    justifyContent: "flex-end",
  },
};
const AppHeader = () => {
  const navigate = useNavigate();
  const onLogout = () => {
    setAuthToken("");
    localStorage.setItem("email", "");
    localStorage.setItem("name", "");
    navigate("/");
  };
  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#474a4dd1" }}>
      <Toolbar>
        <Typography component="h3">Loan Application</Typography>
        <Typography
          component="div"
          sx={{ display: "flex", flexDirection: "row",mx:3 }}
        >
          <Button component={Link} to="/dashboard" color="inherit">
            Dashboard
          </Button>
          <Typography component="div" sx={styles.logoutbtn}>
            <Button onClick={() => onLogout()} color="inherit">
              Logout
            </Button>
          </Typography>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;
