import React from "react";
import { useParams } from "react-router-dom";
import data from "./data.json";
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';

export default function Productitem() {
    let { id } = useParams();
    const shoe = data[id]
    if (!shoe)
        <h2>Product Not Found!</h2>
    return (
        <div>
            <div
                className="link">
                <h1 style={{ borderLeft: "10px 10px solid red"}}>{shoe.name}</h1>
                <img src={shoe.image} height={350} alt="chutti kr  chal" /><img src={shoe.image2} height = {500} alt="chutti kr" />
                <h2 style={{marginLeft:90}}>Price : <h2 style={{color:"darkred"}}>{shoe.price}</h2></h2>
                <h4 style={{marginRight:100,marginLeft:100}}><h2 style={{marginRight:850}}>Description : </h2>{shoe.details}</h4>
                <Button style={{backgroundColor:'black',color:'white',height:'1',width:'50',marginLeft:'90'}}>Add to Cart <Icon style={{ color: "darkred", height: 30, marginLeft: 150 }}>add_circle</Icon></Button>
            </div>
        </div>
    );
}

