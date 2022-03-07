import styledComponents from "styled-components";
import { InputBase } from "@material-ui/core";

export const NetflixButton = styledComponents.button`
background-color: red;
color: #fff;
border-radius: 5px;
text-transform: inherit;
padding: 15px;
font-size: 1.1rem;
border: none;
outline: none;
cursor: pointer
` 

export const NetflixInput = styledComponents(InputBase)`
z-index: 30;
background-color: white;
padding: 25.5px;
height: 30px;
border-radius: 5px;
border: none;
`