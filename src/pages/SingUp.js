import { makeStyles, Typography } from '@material-ui/core';
import React, { useState } from 'react'
import { NetflixButton, NetflixInput } from '../styles/stylescomponents';
import {auth} from "../firebase";
import { useHistory } from 'react-router-dom';

const SingUp = () => {
  const classes = useStyles();
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const signIn = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password).then(() => history.push("/")).catch((err) => alert(err.message));
  }
  const register = (e) => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email, password).then(() => history.push("/")).catch((err) => alert(err.message));
  }

  return (
    <div className={classes.root}>
      <Typography variant="h5" aling="left">
        Sing In
      </Typography>
      <form className={classes.form}>
        <NetflixInput
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className={classes.email}
          type="email"
        />
        <NetflixInput
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className={classes.password}
          type="password"
        />
        <NetflixButton onClick={signIn} tpye="submit" radius wide="medium">
          Sing In
        </NetflixButton>
        <Typography variant="subtitle2">
          New to Netflix ?{" "}
          <span className={classes.signupLink} onClick={register}>
            Sign Up now.{" "}
          </span>
        </Typography>
      </form>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "350px",
    width: "20rem",
    height: "25rem",
    background: "rgba(0, 0, 0, 0.65 )",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    "& h5": {
      marginTop: theme.spacing(2),
      width: "70%",
    },
  },

  form: {
    width: "80%",
  },

  email: {
    marginBottom: theme.spacing(2),
  },

  password: {
    marginBottom: theme.spacing(4),
  },

  signupLink: {
    color: "#fff",
    cursor: "pointer",
    "&: hover": {
      textDecoration: "underline",
    },
  },
}));


export default SingUp