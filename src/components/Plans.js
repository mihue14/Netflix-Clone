import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { NetflixButton } from "../styles/stylescomponents";
import { setPrice } from "../features/PriceSlice";

const Plans = ({ cost, children, color, wide }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const handleClick = (cost) => {
    dispatch(setPrice(cost));
    history.push("/checkout");
  }

  return (
    <div className={classes.root}>
      <Typography wide={wide} className={classes.standard} variant="h5">
        {children}
        <div>USD {cost}</div>
      </Typography>
      <NetflixButton
        onClick={() => handleClick(cost)}d
        radius
        wide={wide}
        color={color}
      >
        Subscribe
      </NetflixButton>
    </div>
  );
};

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
  },
}));

export default Plans;
