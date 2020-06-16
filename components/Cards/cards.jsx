import React, { useEffect } from "react"
import {Button} from "@material-ui/core"
import { Row, Col } from "react-bootstrap"

import logo2 from "../../images/home/lg.png"
import logo3 from "../../assets/back/home/hard.png"
import logo1 from "../../images/Cards/Software (1).png"


const Cards = () => {

    return (
        <div className="container mt100"  >
            <Row>
                <Col>
                    <div className="mb100">
                        <div className="section-title">
                            <h2 >What Are You Looking For?

</h2>
                            <p className="black">Getting started on the right foot

</p>
                          
                        </div>
                    </div>
                </Col>

            </Row>
            <Row>
                <Col lg={4} md={4}  sm={6} xs={6} >
                    <div >
                        <div className="service-item responsecard">
          <img src={logo1} alt="" className="imglogo"></img>

                            <h4 className="mb10 mt5">Software

</h4>
                            <p className="responsecardp">Digital Signage software which manages your screens and controls your  content displayed.


</p>
                          
<Button variant="contained" className="buttonmres1">
                         Overview
                         </Button>
                        </div>
                    </div>
                </Col>
                <Col lg={4} md={4}   sm={6} xs={6}>
                    <div
                    >
                        <div className="service-item responsecard">
                        
                        <img src={logo2} alt="" className="imglogo" ></img>
                            <h4 className="mb10 mt5">All in ONE
</h4>
                            <p className="responsecardp">LG Digital Signage screens with on-board media players, pre-installed Imagine for instant launch.

</p>
                            
<Button variant="contained "  className="mt10" >
                         LG Setup
                         </Button>

                        </div>
                    </div>
                </Col>
                <Col lg={4} md={4} sm={6} xs={6}>
                    <div >
                        <div className="service-item responsecard">
                        <img src={logo3} alt="" className="imglogo"></img>
                            <h4 className="mb10 mt5">Hardware
</h4>
                            <p className="responsecardp">Don’t yet have hardware? Shop online from a selection of media players, screens and accessories.

</p>

<Button variant="contained" className="buttonmres2">
                         Shop Now
                         </Button>
                        </div>
                    </div>
                </Col>
            </Row>
            <div className="tcenter2">Want to know more? Visit our <a className="colororange">FAQ page here</a>
</div>
        </div>


    )


}



export default Cards