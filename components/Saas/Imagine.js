import React from "react"
import { FaWindows, FaApple, FaFacebook, FaHeadphones, FaBookOpen, FaMailchimp } from "react-icons/fa"
import Manage from "../../images/manage.svg"
import { Row, Col } from "react-bootstrap"
import Monitor from "../../images/monitor.svg"
import Analyse from "../../images/analyse.svg"
import Schedule from "../../images/schedule.svg"
import Create from "../../images/create.svg"
import Customise from "../../images/customise.svg"
const Imagıne = () => {

    return (
        <div  className="backg  imagines iibgc">
        <div className="hero-content  container" >
            <div ><h2 className={"response un1"}>Imagine a Platform That Does it All</h2></div>


            <Row className="un1 mt50">
                <Col sm={4} md={4} lg={2}  xs={4} >
                    <div className="justify-content-center align-items-center iitem"><img src={Manage}></img></div>
                    <p className="tcenter">Manage</p>

                </Col>

                <Col sm={4} md={4} lg={2}  xs={4}>
                    <div className="iitems" ><img src={Monitor}></img></div>
                    <p className="msna">Monitor</p>
                </Col>

                <Col sm={4} md={4} lg={2}  xs={4}>
                    <div className="justify-content-center align-items-center iitem"><img src={Create}></img></div>
                    <p className="msna">Create</p>
                </Col>
                <Col sm={4} md={4} lg={2}  xs={4}>
                    <div  className="justify-content-center align-items-center iitems"><img src={Schedule}></img></div>
<p className="msna">Schedule</p>
                </Col>

                <Col sm={4} md={4} lg={2}  xs={4}>
                    <div  className="justify-content-center align-items-center iitem"><img src={Analyse}></img></div>
                    <p className="msna">Analyse</p>
                </Col>
                <Col sm={4} md={4} lg={2}  xs={4}>
                    <div className="justify-content-center align-items-center iitem"><img src={Customise}></img></div>
                    <p className="tcenter">Scale</p>
                </Col>

            </Row>
            <div className="un1 "><p className="black" >Effectively managing thousands of screens and trusted by all business sizes in South Africa and around the world. Imagine is a simple and reliable tool to manage your screens content without any fuss. Offering tools like a comprehensive dashboard, designer and scheduler interface that is intuitive and reliable. Imagine zero limitations.

</p></div>

        </div>
        </div>    )
}


export default Imagıne