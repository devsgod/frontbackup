import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import { Grid, Button } from '@material-ui/core';
import {img} from "react-icons/fa"
import Logo1 from "../../images/customisable.svg"
import Logo2 from "../../images/easy to navigate.svg"
import Logo3 from "../../images/secure and reliable.svg"

 export default function Card(){


    return(
        <div className="container cardmb" >

       <Grid container >
<Grid md={4}lg={4} sm={6} xs={6} className="flexcontainer cardhover flexcontainerrelative cardm borderhover"  style={{justifyContent:"start"}}>
<div className="flexcontaineralign" >
<img src={Logo1} alt="" className="flexcontaineralignimage " ></img>
</div>
<div>
    <div style={{marginTop:30,marginBottom:20}}>

    <bold style={{color:"black",fontWeight:1000}} className="cardtitlehover">Easy to Navigate
</bold>
    </div>

<p  style={{color:"black"}} className="hoverp">A feature in itself, Imagine is intuitive and easy to operate.` However connect  with our support team at any stage with the online chat.

</p>



</div>



</Grid>
<Grid md={4}lg={4} sm={6} xs={6} className="flexcontainer cardhover flexcontainerrelative cardm borderhover" style={{justifyContent:"start"}} >


<div className="flexcontaineralign" >
<img src={Logo2} alt="" className="flexcontaineralignimage"alignimage ></img>
</div>
<div>
    <div style={{marginTop:30,marginBottom:20}}>

    <bold style={{color:"black",fontWeight:1000}} className="cardtitlehover">Secure & reliable
</bold>
    </div>

<p  style={{color:"black"}} className="hoverp">Hosted on secure servers with 99.9% daily uptime and secured with a 2-tier password authentication.

</p>

</div>



</Grid>
<Grid md={4}lg={4} sm={6} xs={6} className="flexcontainer cardhover flexcontainerrelative flexcontainerrelative cardm borderhover"  style={{justifyContent:"start"}}>
   <div className="flexcontaineralign">
<img src={Logo3} alt="" className="flexcontaineralignimage"></img>
</div>
<div>
    <div style={{marginTop:30,marginBottom:20}}>

    <bold style={{color:"black",fontWeight:1000}} className="cardtitlehover">Customisable</bold>
    </div>

<p  style={{color:"black"}} className="hoverp">There are zero limitations to Imagines capabilities, with custom features added frequently to specific industry needs.

</p>

</div>



</Grid>

       </Grid></div>
    )
 }

