import { makeStyles } from '@material-ui/core';
import React from 'react'

const Login = () => {
  const classes = useStyles();

  return (
    <div>Login</div>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundColor: "#111",
    minHeight: "100vh",
  },
})
);

export default Login