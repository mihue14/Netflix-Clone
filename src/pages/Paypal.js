import { makeStyles } from "@material-ui/core";
import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { selectPrice } from "../features/PriceSlice";

const Paypal = () => {
  const classes = useStyles();
  const price = useSelector(selectPrice);
  const paypal = useRef();

   useEffect(() => {
    window.paypal.Buttons({
      createOrder: (data, actions, err) => {
        return actions.order.create({
          intent: "CAPTURE",
          purchase_units : [{
            description: "Neflix Subscriptions",
            amount: {
              currency_code: "USD",
              value: price,
            }
          }]
        })
      },

      onApprove: async (data, actions) => {
         actions.order.capture().then(function(details){
          alert("El pago se realizó con éxito");
        })
      },

      onError: err => { alert(err) },

      onCancel: function(data) {
        alert("Pago cancelado");
      }
    }).render(paypal.current);
  }, [])

  return <div ref={paypal} className={classes.paypal}>Paypal</div>;
};

const useStyles = makeStyles((theme) => ({
  paypal: {
    paddingLeft: "50vh",
    paddingTop: "30vh"
  }
}))

export default Paypal;
