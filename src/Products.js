import React from "react";
import data from "./data.json"
import { Link } from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';



const useStyles = makeStyles((theme) => ({
  root: {
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
export default function Products() {
  const classes = useStyles();
  return (
    <div >
      <h1>Products</h1>
      <hr />
      <div className="Container" className={classes.root}>

        {Object.keys(data).map(keyname => {
          const shoe = data[keyname]
          return (
            <Paper elevation={3} >
              <Link key={keyname}
                className="link" to={`/Products/${keyname}`}>
                <h2 style={{ borderLeft: "10px 10px solid darkred", }}>{shoe.name}</h2>
              </Link>
              <img src={shoe.image} height={150} alt="chutti kr  chal" />
              <h6 style={{ marginRight: 10 }}>{shoe.des}</h6>
              <h3><b><i>{shoe.price}</i></b></h3>
              <Button style={{backgroundColor:'black',color:'white',height:'1',width:'50',marginLeft:'20'}}>Add to Cart <Icon style={{ color: "darkred", height: 30, marginLeft: 150 }}>add_circle</Icon></Button>
            </Paper>);
        })}
      </div>
    </div>
  );
}

