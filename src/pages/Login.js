import { Button, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import Logo from '../images/netflix-logo.png';
import Netflixbanner from '../images/banner.jpg';
import { NetflixButton, NetflixInput } from '../styles/stylescomponents';
import { useState } from 'react';
import SignUp from "./SingUp";
import mihue from "../images/mihue.png";


const Login = () => {
  const classes = useStyles();
  const [signIn, setSignIn] = useState(false);

  return (
    <div className={classes.root}>
      <img src={Logo} className={classes.logo} alt="Image not found" />
      <img src={mihue} className={classes.mihue}/>
      <div className={classes.info}>
        {
          !signIn ? <SignUp /> : (
            <>
              <Typography variant="h4" gutterBottom>
              Unlimited films, TV programmes and more.
              </Typography>
              <Typography variant="h5">
              Watch anywhere. Cancel at any time.
              </Typography>
              <Typography variant="h6" gutterBottom>
              Ready to watch? Enter your email to create or restart your membership.
              </Typography>
              <div className={classes.inputBlock}>
              <NetflixInput placeholder='Email address'/>
              <NetflixButton>GET STARTED</NetflixButton>
              </div>
            </>
          )
        }
    </div>
    </div>
  )};


const useStyles = makeStyles((theme) => ({

  root: {
    backgroundImage: `url(${Netflixbanner})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    objectFit: "contain",
    position: "relative",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  logo: {
    position: "fixed",
    top: 0,
    left: 20,
    width: "150px",
    cursor: "pointer",
  },

  mihue: {
    position: "fixed",
    top: 25,
    left: 185,
    width: "150px",
    cursor: "pointer",
  },

  session: {
    position: "fixed",
    zIndex: 15,
    right: 20,
    top: 20,
  },

  info: {
    color: "white",
    zIndex: 15,
    textAlign: "center",
    "& h4": {
      fontWeight: 800,
    },
    "& h5": {
      fontWeight: 400,
    },
  },
})
);

export default Login