import React from "react";
import { makeStyles } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles(() => ({
  signIn: {
    marginTop: "120px",
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 100,
    fontSize: "16px",
    color: "#6f838c",
  },
  input: {
    paddingTop: "10px",
  },
  button: {
    backgroundColor: "#3c52b2",
    marginTop: "20px",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#ffff00",
      color: "#3c52b2",
    },
  },
}));
function SignIn() {
  const { signIn, input, button } = useStyles();
  return (
    <div className={signIn}>
      <h1>Sign In</h1>
      <div>
        <input type="text" placeholder="Username..." />
      </div>
      <div className={input}>
        <input type="password" placeholder="Password..." />
      </div>
      <Button
        {...{
          key: "Home",
          to: "/search",
          component: RouterLink,
          className: button,
        }}
      >
        Sign In
      </Button>
    </div>
  );
}

export default SignIn;
