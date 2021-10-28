import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  account: {
    marginTop: "100px",
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 100,
    fontSize: "16px",
    color: "#6f838c",
  },
}));

function Account() {
  const { account } = useStyles();
  return (
    <div className={account}>
      <h1>User Account</h1>
    </div>
  );
}

export default Account;
