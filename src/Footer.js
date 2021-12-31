import React from 'react';
import Label1 from './github-logo-white.2.png';
import footerlogo from './142-1428940_jordan-symbol-png-air-jordan-logo-svg.png';
export default function Footer(){
    return(
        <div className='container2'>
            <br /><br /><br /><br /><br />
<div className='Footer'>
<br /><br /><br />
        <img className="logofooter" src={footerlogo} alt="jordanlogo" height={60}/>
        <div className="logo">
    <br /><h4>Home<br/>
    About<br />Products<br /> </h4></div>
    <div className="contact">
        <h2>Contact us</h2>
    <h4><img src={Label1} alt='GitHub'/>GitHub-ID : AhsanBilal157 <br />
    Email id : Khanbilal6172@gmail.com</h4></div>
    <br /><br /><br /><br /><br />
</div></div>

    )
}