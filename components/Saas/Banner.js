import React from 'react';
import Link from 'next/link';
import { Button } from "@material-ui/core"
import { FaWindows, FaApple, FaCheck, FaAndroid } from "react-icons/fa"
import logo2 from "../../images/LGlogo.svg"
import { FcLinux } from "react-icons/fc"
import { Row, Col } from "react-bootstrap"
import img1 from "../../images/1.png"
import img2 from "../../images/2.png"
import img3 from "../../images/3.png"
import img4 from "../../images/4.png"
import img5 from "../../images/5.png"
import img6 from "../../images/6.png"
import mainimg from "../../images/home/mb.png"
const isServer = typeof window === 'undefined'
const WOW = !isServer ? require('wowjs') : null

class Banner extends React.Component {
    componentDidMount() {
        new WOW.WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 20,
            mobile: true,
            live: true,
        }).init();
    }

    render() {
        return (
           
                <div className=" bigscreen2" >
                    <div >
                        <div >
                            <div className="container bigscreen">
                                <Row className="television">


                                    <Col sm={12} md={12} lg={6} className="pt-50">
                                        <div className="hero-content pl-4 ">
                                            <h1 className="response2 fs50" >Anything Is Possible With <span className="colororange">Imagine</span> Digital Signage </h1>

                                            <p className="fs20-mb10">Take control of your screens! It’s easy to install and even easier to manage. Try Imagine for free today.</p>
                                            <div className="flexcontainerrow" style={{ justifyContent: "start" }}>
                                            <div className="windowsl"><FaWindows ></FaWindows></div>
                                                <div className="linuxl"><FcLinux ></FcLinux></div>
                                                <img  className="imghomelogo" src={logo2} alt="notfound"></img>
                                                <div className="androidl"><FaAndroid></FaAndroid></div>


                                            </div>

                                            <div className={"flexcontainerrow mbt-20"} >


                                            <Link href="/signup/">
                                                    <Button variant="contained" className="m-20" size="large" component="a"> 
                                                        
                                                       
                                                            <div>Start Trial</div>
                                                            

                                                      

                                                    </Button>
                                                    </Link>

                                               
                                                <Link href="/contact/">
                                                    <Button variant="contained"  size="large" component="a">
                                                        <div >

                                                            <div >Book Trial</div>


                                                        </div>

                                                    </Button>


                                                </Link>

                                            </div>
                                            <div className="flexcontainerrow w90-js" >
                                                <div className="flexcontainerrow mt-40-js" > <FaCheck className="homecheck"></FaCheck>

                                                    <div className="fs15">14-day free trial</div>
                                                </div>
                                                <div className="flexcontainerrow freeres mt-40-js pl-2" > <FaCheck  className="homecheck"></FaCheck>

                                                    <div className="fs15">No credit card</div>
                                                </div>
                                                <div className="flexcontainerrow mt-40-js" > <FaCheck  className="homecheck"></FaCheck>

                                                    <div className="fs15">No contracts</div>
                                                </div>
                                
                                            </div>

                                        </div>
                                    </Col>
                                    <Col sm={12} md={12} lg={6} className="mb50">
                                        <div className="pt-50">
                                            <img
                                                src={mainimg}
                                                className="wow zoomIn"
                                                data-wow-delay="0.6s"
                                                alt="home hero"

                                            />
                                        </div>
                                    </Col>
                                </Row>
                                <Row className="lch">
                                    <Col lg={2} md={4} sm={4} xs={4}>
                                        <div className="m10-fs50"><img src={img1} alt=""></img></div>


                                    </Col>

                                    <Col lg={2} md={4} sm={4} xs={4}>
                                        <div className="m10-fs50"><img src={img2} alt=""></img></div>

                                    </Col>

                                    <Col lg={2} md={4} sm={4} xs={4}>
                                        <div className="m10-fs50"><img src={img3} alt=""></img></div>

                                    </Col>

                                    <Col lg={2} md={4} sm={4} xs={4}>

                                        <div className="m10-fs50"><img src={img4} alt=""></img></div>
                                    </Col>
                                    <Col lg={2} md={4} sm={4} xs={4} >

                                        <div className="m10-fs50"><img src={img5} alt=""></img></div>
                                    </Col>
                                    <Col lg={2} md={4} sm={4} xs={4}>

                                        <div className="m10-fs50"><img src={img6} alt=""></img></div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div >
                </div >
           
        );
    }
}

export default Banner;
