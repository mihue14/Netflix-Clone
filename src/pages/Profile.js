import { makeStyles, Typography } from '@material-ui/core';
import React from 'react'
import Header from '../components/Header';
import NetflixAvatar from '../images/avatar.png';
import Plans from "../components/Plans";
import { NetflixButton } from "../styles/stylescomponents";
import { auth } from '../firebase';
import { useHistory } from 'react-router-dom';


const Profile = () => {
  const classes = useStyles();
  const history = useHistory();

  const signout = () => {
    auth.signOut();
    history.push("/login");
  }

  return (
    <div className={classes.root}>
      <Header />
      <Typography variant="h3">Edit Profile</Typography>
      <div className={classes.info}>
        <img src={NetflixAvatar} alt="Image not found" />
        <div className={classes.details}>
          <div className={classes.plans}>
            <Typography variant="h6">Email Usuario</Typography>
            <Typography variant="h5" gutterBottom className={classes.plansText}>Plans</Typography>
            <Plans cost={379}>Netflix Basic</Plans>
            <Plans cost={639}>Netflix Estandar</Plans>
            <Plans cost={939}>Netflix Premium</Plans>
            <NetflixButton onClick={signout} wide="fullwidth">Sing Out</NetflixButton>
          </div>
        </div>
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    color: "#fff",
    minHeight: "100vh",
    maxWidth: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  info: {
    width: "80%",
    display: "flex",
    "& img": {
      height: "100px",
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
  },

  details: {
    width: "100%",
    marginLeft: theme.spacing(3),
    "& h6": {
      backgroundColor: "#aaa",
      padding: theme.spacing(1),
      marginBottom: theme.spacing(1),
      fontSize: "18px",
    },
  },

  plans: {
    width: "100%",
  },

  plansText: {
    borderBottom: "1px solid lightgray",
  }
}));

export default Profile