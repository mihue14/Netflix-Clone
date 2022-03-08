import { makeStyles, Typography } from '@material-ui/core';
import React from 'react'
import { NetflixButton } from '../styles/stylescomponents';

const Plans = ({cost, children, color, wide}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography wide={wide} className={classes.standard} variant="h5">
        {children}
      </Typography>
      <NetflixButton radius wide={wide} color={color}>Subscribe</NetflixButton>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "& button": {
      marginBottom: theme.spacing(2),
    },
  },

  standard: {
    fontSize: "1.2rem",
  }
})
);

export default Plans