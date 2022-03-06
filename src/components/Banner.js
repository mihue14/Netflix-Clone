import { makeStyles } from '@material-ui/core';
import React from 'react'
import netflixBanner from '../images/banner.jpg';

const Banner = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img src={netflixBanner} alt="Image not found" />
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundColor: "#111",
    minHeight: "100vh",
  },
})
);

export default Banner