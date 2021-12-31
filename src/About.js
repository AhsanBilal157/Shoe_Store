import React from "react";
import mypic from "./mypic.jpg"

export default function About()
{return(
    <div>
        <h1>About</h1>
        <hr />
        <h4 style={{marginRight:100,marginLeft:100}}>Shoe Stoe brings you the number one quality over 15 top footwear brands of the world.You can chose from a wide variety of shoes designed according to the latest trends.We offer comfort as well as value for money and our shoes have been Sialkot's number one choice since 1993.Our Products range from sports to casual wear are perfect for fitness and sports enthusiests.We are the only reatailers in Pakistan who have jumbo shoes.</h4>
        <img src={mypic} height={500}alt="chutti kr"/>
       {/* <div data-aos="slide-right" className="square"style ={{marginRight:100}}>
                <span></span>
                <span></span>
                <span></span>
                <div className="content">
                     
            <img className="profile-image" srcSet='https://raw.githubusercontent.com/AhsanBilal157/Portfolio/master/src/circle-cropped.png?token=AR5DA7GCNB3IPJLJUD6J6KC73DH6S' alt="Ahsan Bilal" height={330}width={350}/>
            
          </div>
</div>*/}
        <h2 >Big Fan of Jordans</h2>
    </div>
);}

