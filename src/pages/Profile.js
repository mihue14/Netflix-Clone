import { makeStyles, Typography } from '@material-ui/core';
import React from 'react'
import Header from '../components/Header';
import NetflixAvatar from '../images/avatar.png';

const Profile = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      <Typography variant='h3'>Edit Profile</Typography>
      <div className={classes.info}>
         <img src={NetflixAvatar} alt="Image not found" />
         <div className={classes.plans}>
          <Typography variant='h6'>Email Usuario</Typography>
          <Typography variant='h5' gutterBottom>Plans</Typography>
         </div>
      </div>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "white",
    minHeight: "100vh",
  },
})
);

export default Profile