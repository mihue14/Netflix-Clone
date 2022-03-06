import { makeStyles } from '@material-ui/core';
import React from 'react'

const SingUp = () => {
  const classes = useStyles();

  return (
    <div>SingUp</div>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundColor: "#111",
    minHeight: "100vh",
  },
})
);

export default SingUp