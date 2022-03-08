import { Counter } from "./features/counter/Counter";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Paypal from "./pages/Paypal";
import Profile from "./pages/Profile";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import {login, logout, selectUser} from "./features/UserSlice";


function App() {
  const user = useSelector(selectUser);  // Usuario.
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    const unsuscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email
        }))
      } else {
        dispatch(logout);
      }
    })
    return unsuscribe;
  }, [dispatch]);

  return (
    <div className={classes.root}>
      <Router>
            <Switch>
              <Route path="/login">
                <Login />
              </Route> 
              <Route path="/profile">  
                <Profile />   
              </Route>
              <Route path="/checkout">
                <Paypal />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
      </Router>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundColor: "#111",
  },
})
);

export default App;
