import { makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import Homebanner from '../images/lacasadepapel.jpg';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button/Button';
import axios from 'axios';
import requests from "../Requests";

const Banner = () => {
  const [movie, setMovie] = useState([]);
  const classes = useStyles();
  const truncate = (string,n ) => string?.length > n ? `${string.substr(0, n-1)} ...` : string;
  // string = cadena de texto ; n = número. 
  // Si string es mayor a n nos va a devolver los primeros caracteres hasta n-1 seguido de "...". 
  // Si string es menor a n entonces nos devuleve la cadena de texto completa. 

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(requests.fetchNetflixOriginals)
      const random = Math.floor(Math.random()*request.data.results.length-1)
      setMovie(request.data.results[random]);
      return request;
    }
    fetchData();
  }, [])

  return (
    <div className={classes.root} style={{backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`}}>
      <div classes={classes.content}>
        <Typography variant="h2" component="h1">
          {movie?.title || movie?.name || movie?.original_name}
        </Typography>
        <div className={classes.buttons}>
          <Button>Play</Button>
          <Button>My List</Button>
        </div>
        <Typography style={{wordWrap: "break-word"}} variant="h6" className={classes.description}>
          {
            truncate(movie?.overview, 160)
          }
        </Typography>
        <div className={classes.fade} />
      </div>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  
  root: {
    position: "relative",
    height: "440px",
    objectFit: "contain",
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "#fff",
  },

  buttons: {
    "& button": { // Estilo de los botones.
      cursor: "pointer",
      color: "#fff",
      fontWeight: 700,
      borderRadius: "5px",
      padding: theme.spacing(1, 4, 1, 4),
      marginRight: "1rem",
      backgroundColor: "rgba(51, 51, 51, 0.5)",
    },

    "& button:hover": { // Estilo de los botones al pasar el mouse encima.
      color: "#000",
      backgroundColor: "#e6e6e6",
    }
  },

  fade: { // Degrade del banner.
    position: "absolute",
    top: "30vh",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 99,
    backgroundImage: "linear-gradient(180deg, transparent, rgba(37, 37, 37, 0.61), #111)",
  },

  description: {
    textAlign: "left",
    paddingRight: "80%",
  }

})
);

export default Banner