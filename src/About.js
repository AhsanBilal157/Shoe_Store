import React from "react";
import mypic from "./mypic.jpg"

export default function About()
{return(
    <div>
        <h1>About</h1>
        <hr />
        <h4 style={{marginRight:100,marginLeft:100}}>Shoe Stoe brings you the number one quality over 15 top footwear brands of the world.You can chose from a wide variety of shoes designed according to the latest trends.We offer comfort as well as value for money and our shoes have been Sialkot's number one choice since 1993.Our Products range from sports to casual wear are perfect for fitness and sports enthusiests.We are the only reatailers in Pakistan who have jumbo shoes.</h4>
        <img src={mypic} height={500}alt="chutti kr"/>
        <h2 >Big Fan of Jordans</h2>
    </div>
);}

