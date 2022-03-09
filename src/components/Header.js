import { AppBar, Avatar, IconButton, makeStyles, Toolbar } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import logo from "../images/netflix-logo.png"
import mihue from "../images/mihue.png";

const Header = () => {
  const classes = useStyles(); // Sirve para agregar estilos.
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
    <AppBar position='sticky' elevation={0} className={`${classes.root} ${show && classes.transparent}`}>  {/* Cuando la variable show sea "true" se habilita la clase "transparent." */}  
      <Toolbar className={classes.Toolbar}>
        <IconButton onClick={() => history.push("/")}>  {/* Al hacer click en la imagen de "Netflix" nos dirige a la ruta "/". */}
        <img src={logo} alt="Image not found" className={classes.logo}/> {/* Logo de Netflix */}
        <img src={mihue} className={classes.mihue}/>
        </IconButton>
        <Avatar variant='square' style={{cursor: "pointer"}} onClick={() => history.push("/profile")}  /> {/* Al hacer click en el avatar nos dirige a la ruta "/profile" */}
      </Toolbar>
    </AppBar>
  )
}

const useStyles = makeStyles((theme) => ({
  
  root: {
    backgroundColor: "transparent",
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

  mihue:{
    maxWidth: "90px",
    marginTop: "8px",
    marginLeft: "14px",
  }
})
);

export default Header