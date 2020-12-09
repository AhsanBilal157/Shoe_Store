import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import data from "./data.json";
import Paper from '@material-ui/core/Paper';
const useStyles1 = makeStyles((theme) => ({
  btnroot: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'centet',
    marginLeft: 100,
    '& > *': {
      margin: theme.spacing(5),
      width: theme.spacing(35),
      height: theme.spacing(50),
    },
  },
}));
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function Home() {
  const classes = useStyles();
  const classes1 = useStyles1();
  return (
    <div>
    <div className="header">
      <br />
      <br />
      <br />
      <h1 className="text-Color">"LIMITS, LIKE FEAR<br />
        ARE OFTEN ILLUSION" </h1>
      <h4 className="text2">~ Micheal Jordan</h4>
      <div className={classes.root}>
        <Button variant="contained" color="secondary" style={{ backgroundColor: "darkred", marginRight: "73%" }}>
          <Link style={{ color: "white", marginLeft: "20" }} to="/Products"><b>Shop Now</b></Link></Button>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      </div>
      <br />
      <h2 style={{ color: "black", fontWeight: "bold" }}>New Featured</h2>
      <div className="Container" className={classes1.btnroot}>

        {Object.keys(data).slice(0,3).map(keyname => {
          const shoe = data[keyname]
          return (
            <Paper elevation={8} >
              <Link key={keyname}
                className="link" to={`/Products/${keyname}`}>
                <h2 style={{ borderLeft: "10px 10px solid darkred", }}>{shoe.name}</h2>
              </Link>
              <img src={shoe.image} height={150} alt="chutti kr  chal" />
              <h6 style={{ marginRight: 10 }}>{shoe.des}</h6>
              <h3><b><i>{shoe.price}</i></b></h3>

            </Paper>);
        })}
      </div>
      </div>
  );
}

