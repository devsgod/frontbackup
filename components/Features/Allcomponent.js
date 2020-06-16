import React from 'react'
import dog from "../../images/ex1.png"
import dash2 from "../../images/ex2.png"
import dash3 from "../../images/ex3.png"
import dash4 from "../../images/ex4.png"
import Multi from "./Multicard"
import { FaCheck, FaHospital, FaShoppingBag, } from "react-icons/fa"
import { Row, Col } from "react-bootstrap"
import Bar from "../Features/Bar"
import { FaChrome } from "react-icons/fa"
export default function Allcomponent({
title1,content1,title2,content2,title3,content3,title4,content4,title5,content5,header


}) {
    const [first, setfirst] = React.useState(true)
    const [second, setsecond] = React.useState(false)
    const [third, setthird] = React.useState(false)
    const [four, setfour] = React.useState(false)
    const [five, setfive] = React.useState(false)
    let current = dog
    if (first) {
        current = dog
    }
    if (second) {
        current = dash2
    }
    if (third) {
        current = dash4
    }
    if (four) {
        current = dash3
    }
    if (five) {
        current = dash2
    }

    return (
        <div>
            <Row style={{ marginTop: 100 }}>
                <Col md={12} lg={6} style={{ paddingTop: 50 }}>
                    <img src={current} alt=""></img>
                </Col>
                <Col md={12} lg={6} style={{ justifyContent: "center", alignContent: "center" }}>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <h2 className="settitle" style={{ textAlign: "start", paddingRight: 20, paddingLeft: 20, fontSize: "2rem" }}>{header}</h2>

                    </div>

                    <Row style={{ display: "flex", justifyContent: "center", alignItems: "center", }}>


    

                    </Row>
                    <Row style={{ flexDirection: "column", justifyContent: "center", padding: "auto" }}>
                        <Row className={`${first && "hovered"}`} onMouseOver={() => {
                            setfirst(true)
                            setsecond(false)
                            setthird(false)
                            setfour(false)
                            setfive(false)

                        }} style={{ marginTop: 10, justifyContent: "start", alignContent: "center", paddingRight: 30, paddingLeft: 55 }}>

                            <Col xs={1} style={{ justifyContent: "center", alignContent: "center" }}>


                                <FaChrome style={{ alignItems: "center", fontSize: 13 }}></FaChrome>

                            </Col>
                            <Col xs={8} style={{ display: "flex", alignItems: "center" }} className={"apart"}><p>{title1}
                            </p></Col>

                        </Row>
                        {
                            first && (

                                <p className="setp" style={{ color: "black", paddingRight: 20, paddingLeft: 40, alignItems: "center" }}>{content1}
                                </p>
                            )

                        }
                        <Row className={`${second && "hovered"}`} onMouseOver={() => {
                            setfirst(false)
                            setsecond(true)
                            setthird(false)
                            setfour(false)
                            setfive(false)

                        }} style={{ marginTop: 10, justifyContent: "start", alignContent: "center", paddingRight: 30, paddingLeft: 55 }}>

                            <Col xs={1} style={{ justifyContent: "center", alignContent: "center" }}>


                                <FaChrome style={{ alignItems: "center", fontSize: 13 }}></FaChrome>

                            </Col>
                            <Col xs={8} style={{ display: "flex", alignItems: "center" }} className={"apart"}><p>{title2}
</p></Col>

                        </Row>
                        {
                            second && (

                                <p className="setp" style={{ color: "black", paddingRight: 20, paddingLeft: 40, alignItems: "center" }}>{content2}
                                </p>
                            )

                        }

                        <Row className={`${third && "hovered"}`} onMouseOver={() => {
                            setfirst(false)
                            setsecond(false)
                            setthird(true)
                            setfour(false)
                            setfive(false)

                        }} style={{ marginTop: 10, justifyContent: "start", alignContent: "center", paddingRight: 30, paddingLeft: 55 }}>

                            <Col xs={1} style={{ justifyContent: "center", alignContent: "center" }}>


                                <FaChrome style={{ alignItems: "center", fontSize: 13 }}></FaChrome>

                            </Col>
                            <Col xs={8} style={{ display: "flex", alignItems: "center" }} className={"apart"}><p>{title3}
</p></Col>

                        </Row>
                        {
                            third && (

                                <p className="setp" style={{ color: "black", paddingRight: 20, paddingLeft: 40, alignItems: "center" }}>{content3}
                                </p>
                            )

                        }
                        <Row className={`${four && "hovered"}`} onMouseOver={() => {
                            setfirst(false)
                            setsecond(false)
                            setthird(false)
                            setfour(true)
                            setfive(false)
                        }} style={{ marginTop: 10, justifyContent: "start", alignContent: "center", paddingRight: 30, paddingLeft: 55 }}>

                            <Col xs={1} style={{ justifyContent: "center", alignContent: "center" }}>


                                <FaChrome style={{ alignItems: "center", fontSize: 13 }}></FaChrome>

                            </Col>
                            <Col xs={8} style={{ display: "flex", alignItems: "center" }} className={"apart"}><p>{title4}
</p></Col>

                        </Row>
                        {
                            four && (

                                <p className="setp" style={{ color: "black", paddingRight: 20, paddingLeft: 40, alignItems: "center" }}>{content4}
                                </p>
                            )

                        }

 {
                        title5 && (
                            <div>

                            <Row className={`${five && "hovered"}`} onMouseOver={() => {
                                setfirst(false)
                                setsecond(false)
                                setthird(false)
                                setfour(false)
                                setfive(true)
                            }} style={{ marginTop: 10, justifyContent: "start", alignContent: "center", paddingRight: 30, paddingLeft: 55 }}>
    
                                <Col xs={1} style={{ justifyContent: "center", alignContent: "center" }}>
    
    
                                    <FaChrome style={{ alignItems: "center", fontSize: 13 }}></FaChrome>
    
                                </Col>
                                <Col xs={8} style={{ display: "flex", alignItems: "center" }} className={"apart"}><p>{title5}
    </p></Col>
    

   

                            </Row>
                            
                            
                            {
                                five && (
    
                                    <p className="setp" style={{ color: "black", paddingRight: 20, paddingLeft: 40, alignItems: "center" }}>{content5}
                                    </p>
                                )
    
                            }

                            </div>)

                    }


                    </Row>


                   



                </Col>



            </Row>
            
        </div>
    )
}
