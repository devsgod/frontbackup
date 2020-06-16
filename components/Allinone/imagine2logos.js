import React from "react"
import { FaWindows, FaApple, FaFacebook, FaHeadphones, FaBookOpen, FaMailchimp } from "react-icons/fa"
import Manage from "../../images/manage.svg"
import { Row, Col } from "react-bootstrap"
import l1 from "../../images/All/lglogos/1.svg"
import l2 from "../../images/All/lglogos/2.svg"
import l3 from "../../images/All/lglogos/3.svg"
import l4 from "../../images/All/lglogos/4.svg"
import l5 from "../../images/All/lglogos/5.svg"
import l6 from "../../images/All/lglogos/6.svg"
import l7 from "../../images/All/lglogos/7.svg"
import l8 from "../../images/All/lglogos/8.svg"

const Imagıne = () => {

    return (
        <div style={{backgroundColor:"#f0f3f5"}} className="backg  imagines">
        <div className="hero-content  container" >
            <div style={{ width: "80%", margin: "0 auto", textAlign: "center", marginTop: 50 }}><h2 className={"response"}>LG All in one core features</h2></div>


            <Row style={{ width: "80%", margin: "0 auto", textAlign: "center", marginTop: 50 }}>
                <Col  lg={3} xs={6} >
                    <div style={{ margin: 10, padding: "auto", fontSize: 30, justifyContent: "center", display: "flex" }} className="justify-content-center align-items-center"><img style={{width:"75%"}}  src={l1}></img></div>
                    <p style={{color:"black",textAlign:"center"}}>Imagine compatible</p>

                </Col>

                <Col  lg={3} xs={6}>
                    <div style={{ marginTop: 10, padding: "auto", fontSize: 30, display: "flex", justifyContent: "center" }} ><img  style={{width:"70%"}} src={l2}></img></div>
                    <p style={{color:"black",marginTop:5,textAlign:"center"}}>Portrait or landscape</p>
                </Col>

                <Col  lg={3} xs={6}>
                    <div style={{ margin: 10, padding: "auto", fontSize: 30, justifyContent: "center", display: "flex" }} className="justify-content-center align-items-center"><img  style={{width:"75%"}} src={l3}></img></div>
                    <p style={{color:"black",marginTop:5,textAlign:"center"}}>24/7 playback</p>
                </Col>
                <Col  lg={3} xs={6}>
                    <div style={{ marginTop: 10, padding: "auto", fontSize: 30, justifyContent: "center", display: "flex" }} className="justify-content-center align-items-center"><img  style={{width:"70%"}} src={l4}></img></div>
<p style={{color:"black",marginTop:5,textAlign:"center"}}>3-year warranty</p>
                </Col>

            </Row>

            <Row style={{ width: "80%", margin: "0 auto", textAlign: "center", marginTop: 50 }}>
                <Col   lg={3} xs={6} >
                    <div style={{ margin: 10, padding: "auto", fontSize: 30, justifyContent: "center", display: "flex" }} className="justify-content-center align-items-center"><img  style={{width:"75%"}} src={l5}></img></div>
                    <p style={{color:"black",textAlign:"center"}}>WIFI or Lan</p>

                </Col>

                <Col  lg={3} xs={6}>
                    <div style={{ marginTop: 10, padding: "auto", fontSize: 30, display: "flex", justifyContent: "center" }} ><img  style={{width:"70%"}} src={l6}></img></div>
                    <p style={{color:"black",marginTop:5,textAlign:"center"}}>Built in LG WEB OS</p>
                </Col>

                <Col  lg={3} xs={6}>
                    <div style={{ margin: 10, padding: "auto", fontSize: 30, justifyContent: "center", display: "flex" }} className="justify-content-center align-items-center"><img  style={{width:"75%"}} src={l7}></img></div>
                    <p style={{color:"black",marginTop:5,textAlign:"center"}}>Removeable branding</p>
                </Col>
                <Col  lg={3} xs={6}>
                    <div style={{ marginTop: 10, padding: "auto", fontSize: 30, justifyContent: "center", display: "flex" }} className="justify-content-center align-items-center"><img  style={{width:"70%"}} src={l8}></img></div>
<p style={{color:"black",marginTop:5,textAlign:"center"}}>Auto start</p>
                </Col>

              

            </Row>

          

        </div>
        </div>    )
}


export default Imagıne