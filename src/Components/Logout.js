import React from "react";
import { makeStyles } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles(() => ({
  logout: {
    marginTop: "220px",
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 100,
    fontSize: "16px",
    color: "#6f838c",
  },
  signIn: {
    backgroundColor: "#3c52b2",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#ffff00",
      color: "#3c52b2",
    },
  },
}));

function Logout() {
  const { logout, signIn } = useStyles();
  return (
    <div className={logout}>
      <h1>You are now signed out.</h1>
      <h2>Go enjoy the weather, no matter what kind of day it is!</h2>
      <Button
        {...{
          key: "Home",
          to: "/signin",
          component: RouterLink,
          className: signIn,
        }}
      >
        I want back in...
      </Button>
    </div>
  );
}

export default Logout;
