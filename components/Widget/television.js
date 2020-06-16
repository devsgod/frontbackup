import React from 'react'
import { Row, Col } from "react-bootstrap"

import im1 from "../../images/w1.png"
import im2 from "../../images/w2.png"
import im3 from "../../images/w3.png"
import im4 from "../../images/w4.png"
import im5 from "../../images/w5.png"
import im6 from "../../images/w6.png"

import img1 from "../../images/r1.png"
import img2 from "../../images/r2.png"
import img3 from "../../images/r3.png"
import img4 from "../../images/r4.png"
import img5 from "../../images/r5.png"
import img6 from "../../images/r6.png"
import dog from "../../images/our/Map.png"

export default function television() {
const images=[img1,img2,img3,img4,img5,img6]
React.useEffect(() => {
    const img = new Image();
    img.src = img1;
    img.src = img2;
    img.src = img3;
    img.src = img4;
    img.src = img5;
    img.src = img6;

}, [])

    const [current, set] = React.useState(img1)
  
    const [load,setload]=React.useState(true)

  
    return (
        <div className="container">
            <Row>

                <Col lg={6}>
{images.map((item)=>(

<img src={item} alt="" style={{width:current===item?"100%":0}}></img>
))}

                   
                </Col>
                <Col lg={6}>
                    <Row>

                        <Col className="hovertv" onClick={()=>set(img1)

                        }>
                            <img src={im1} alt=""></img>
                        </Col>
                        <Col className="hovertv" onClick={()=>set(img2)}> <img src={im2} alt=""></img></Col>

                    </Row>
                    <Row >

                        <Col className="hovertv hover14" onClick={()=>set(img3)}>
                            <img src={im3} alt=""></img>
                        </Col>
                        <Col className="hovertv" onClick={()=>set(img4)}> <img src={im4} alt=""></img></Col>

                    </Row>
                    <Row>

                        <Col className="hovertv" onClick={()=>set(img5)}>
                            <img src={im5} alt=""></img>
                        </Col>
                        <Col className="hovertv" onClick={()=>set(img6)}> <img src={im6} alt=""></img></Col>

                    </Row>

                </Col>
            </Row>



        </div>
    )
}


