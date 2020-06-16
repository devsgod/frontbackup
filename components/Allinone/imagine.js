import React from "react"


import Link from 'next/link';

import dash2 from "../../images/All/lgs.png"


import { Row, Col } from "react-bootstrap"
import { Button } from "@material-ui/core"

import logo2 from "../../images/LGlogo.svg"

const Dash = () => {



    return (
        <div style={{ marginBottom: 100 }} className="container">

            <Row style={{ marginTop: 100 }} >
            <Col md={12} lg={6} style={{ justifyContent: "center", display: "flex" }}>
                    <img src={dash2} alt=""></img>

                </Col>
                <Col md={12} lg={6} style={{ justifyContent: "center", alignContent: "center" }}>
                    <Row style={{ display: "flex", justifyContent: "center", alignItems: "center", }}>
                        <Col >
                            <h2 className="settitle" style={{ textAlign: "start", paddingRight: 20, paddingLeft: 20, fontSize: "2rem" }}>Imagine a screen is all that your need!

</h2>
                        </Col>
                    </Row>


                    <p style={{ paddingRight: 20, paddingLeft: 20, alignItems: "center",paddingTop:15 }}>The LG digital signage displays are designed for lengthy period playbacks (24/7) and aimed at the retail, restaurant, and quick service sectors (QSR).


</p>









                    <p style={{ paddingRight: 20, paddingLeft: 20, alignItems: "center", }}>Imagine signage has partnered with LG and developed a LG Imagine player that is 100% compatible with the displays and controlled from Imagine dashboard.


</p>


                    <Row style={{ marginTop: 22, paddingRight: 20, paddingLeft: 20, justifyContent: "center" }}>
                        <Col xs={5} style={{display:"flex", justifyContent: "start", alignItems: "center"}}>
                            <Link href="/shop/">
                                <Button variant="contained" style={{ backgroundColor: "#FB6520", color: "white", justifyContent: "start", textTransform: "none" }} size="large" component={"a"}>
                                    Shop Now

                         </Button>
                            </Link>

                        </Col>
                        <Col xs={7}  >
                          

                                 <img src={logo2} style={{ width: "40%" }}></img>


                          
                        </Col>

                    </Row>

                </Col>
              


            </Row>


        </div>
    )
}
export default Dash