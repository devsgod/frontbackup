

import React, { Component } from "react"
import {Container,Row,Col,Button} from "react-bootstrap"

import Link from 'next/link';




import ReactPlayer from 'react-player'



const Video =()=>{





return(

<div >


    <div>
       
<div className="renkcontainer" style={{display:"flex",justifyContent:"center"}}>
    <Row className="container">

    
      <Col lg={6}>
      <div 
      >  
<div>    
      <div className="as-pic">
      <ReactPlayer
    className={"videocss"}
    url='https://www.youtube.com/watch?v=SQIbeAk-bFA'  />
</div>
</div> 
</div> 


      </Col>
             
      
      <Col lg={6}>
      <div >   
          <div className="as-text">
              
<div className="section-title">

<span>About us</span>
<h2>About Story</h2>

</div>
 
<p className="s-para">Watch our 2-minute overview!!
Get to know Imagine, how it started, what it can do and what it will do.. 
</p>
<Link href="/signup/">
                                                    <a className="btn btn-primary">
                                                       Get Started Free
                                                <div style={{ fontSize: "10px" }}>14 days free</div>
                                                    </a>
                                                </Link>
</div>
</div>

</Col>

    </Row>
    </div>
    </div>
  
</div>
   
  )


}


export default Video