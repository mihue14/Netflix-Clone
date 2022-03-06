import { AppBar, Avatar, IconButton, makeStyles, Toolbar } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import logo from "../images/netflix-logo.png"

const Header = () => {
  const classes = useStyles();
  const history = useHistory(); // Sirve para navegar entre ubicaciones.
  const [show, setShow] = useState(false); // Creamos un hook con su variable de estado y su funcion. El estado inicial es "false".
  const hideHeader = () => { 
    if (window.scrollY > 100) {
      setShow(true); // Cuando scrolleamos mas de 100px en el eje "Y" setShow sera "true". 
    }
    else {
      setShow(false); // De lo contrario será "false".
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", hideHeader); // Cuando detectamos la accion "scroll", ejecutamos la funcion hideHeader.
    return () => window.removeEventListener("scroll", hideHeader); // Limpiamos el eventListener.
  }, [])

  return ( 
    <AppBar position='sticky' elevation={0} className={`${classes.root} ${show && classes.transparent}`}>    
      <Toolbar className={classes.Toolbar}>
        <IconButton onClick={() => history.push("/")}>  
        <img src={logo} alt="Image not found" className={classes.logo}/>
        </IconButton>
        <Avatar variant='square' style={{cursor: "pointer"}} onClick={() => history.push("/profile")}  />
      </Toolbar>
    </AppBar>
  )
}

const useStyles = makeStyles((theme) => ({

  root: {
    backgroundColor: "#111",
    top: 0,
    left: 0,
    right: 0,
  },

  logo: {
    width: "100px",
    cursor: "pointer",
  },

  transparent: {
    backgroundColor: "transparent",
  },

  Toolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
})
);

export default Header