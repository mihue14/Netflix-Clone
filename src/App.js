import { Counter } from "./features/counter/Counter";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Paypal from "./pages/Paypal";
import Profile from "./pages/Profile";


function App() {
  const user = "mihue";  // Usuario.
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Router>
        {
          !user ? (<Login/>): (  // Si no existe un usuario ejecutar el componente Login, de lo contrario dar acceso a la página funcional.
            <Switch>
              <Route path="/profile" >  
                <Profile />   
              </Route>
              <Route path="/checkout">
                <Paypal />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          )
        }
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
