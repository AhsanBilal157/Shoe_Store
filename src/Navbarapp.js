import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Label from "./air jordan nike1.png";
import {Link} from "react-router-dom"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor:"white",
    Color:"white" 
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  Button:{
      color:"white"
  },

}));

export default function Navbarapp() {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{Color:"white"}}>
        <nav className="navhover">
        <Toolbar style={{color:"white"}}>
          <Typography variant="h6" className={classes.title} style={{color:"black"}}>
            <img src={Label} height = {60} alt="airjordan + nike" style={{marginTop:8,marginLeft:30}} />
          </Typography>
          <Button ><Link style={{color:"black"}} to="/"><b>Home</b></Link></Button>
          <Button><Link style={{color:"black"}}to="/about"><b>About</b></Link></Button>
          <Button><Link style={{color:"black", marginRight:20}}to="/Products"><b>Products</b></Link></Button>
        </Toolbar>
        </nav>
    </div>
  );
}