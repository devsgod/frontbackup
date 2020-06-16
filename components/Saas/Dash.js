import React from "react"

import { FaCheck} from "react-icons/fa"
import Link from 'next/link';
import dog from "../../images/dashboard.png"
import dash2 from "../../images/dash2.png"
import dash3 from "../../images/dash3.png"
import { FaHospital,FaHeart,FaBook,FaTree,FaShoppingBag} from "react-icons/fa"
import {GiKnifeFork} from "react-icons/gi"
import { Row,Col } from "react-bootstrap"
import {Button} from "@material-ui/core"
import logo1 from "../../images/Windows.svg"
import logo2 from "../../images/LGlogo.svg"
import logo3 from "../../images/Android.svg"
import logo4 from "../../images/Linux.svg"
const Dash = () => {



    return (
        <div style={{ marginBottom:100}} className="container">
            <Row style={{marginTop:100}}>
                <Col md={12} lg={6} >
                    <img src={dog} alt=""></img>
                </Col>
                <Col md={12} lg={6}  style={{justifyContent:"center" , alignContent:"center"}}>
                <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                <h2 className="settitle" style={{textAlign:"start",paddingRight:20,paddingLeft:20,fontSize:"2rem"}}>Get started with your own dashboard</h2>

                </div>
                  
                    <Row style={{display:"flex",justifyContent:"center",alignItems:"center",}}>

                     
                        <Col ><p className="setp" style={{color:"black",paddingRight:20,paddingLeft:20,alignItems:"center"}}>Registering takes seconds and is the first step to controlling your displays.

 </p></Col>

                    </Row>
                    <Row style={{flexDirection:"column",justifyContent:"center",padding:"auto"}}>
                    <Row   style={{marginTop: 20 ,justifyContent:"start" , alignContent:"center",paddingRight:30,paddingLeft:55}}>

                      


                            <FaCheck  style={{alignItems:"center", fontSize: 15,marginTop:3 ,marginRight:10}}></FaCheck>

               
                       <p>Login from anywhere in the world
</p>

                    </Row>
                    <Row style={{ marginTop: 10,justifyContent:"start" , alignContent:"center",paddingRight:30,paddingLeft:55}}>

                      

                            <FaCheck  style={{alignItems:"center", fontSize: 15,marginTop:3 ,marginRight:10}}></FaCheck>

                     
                   <p>Manage your subscriptions
</p>

                    </Row>
                    <Row style={{ marginTop: 10,justifyContent:"start" , alignContent:"center",paddingRight:30,paddingLeft:55,}}>



    <FaCheck style={{alignItems:"center", fontSize: 15,marginTop:3 ,marginRight:10}}></FaCheck>



                    <p>Monitor and manage your screens and content</p>

</Row>
                    </Row>
<div style={{paddingLeft:55,justifyContent:"start",marginTop:20}}>
<Link href="/signup/">
<Button variant="contained" style={{backgroundColor:"#FB6520",color:"white",textTransform:"none"}} size="large" component={"a"}>
                         Register

                         </Button>  
                         </Link>
</div>
                    

                </Col>


           
            </Row>
            <Row style={{marginTop:100}} className="television">
            <Col md={12} lg={6}  style={{justifyContent:"center" , alignContent:"center"}}>
            <Row style={{display:"flex",justifyContent:"center",alignItems:"center",}}>
            <Col >
                <h2 className="settitle" style={{textAlign:"start",paddingRight:20,paddingLeft:20,fontSize:"2rem"}}>Download the Imagine player application on your hardware
</h2>
                </Col>
                </Row>
                
                   
                        <p style={{paddingRight:20,paddingLeft:20,alignItems:"center",color:"black"}}>Follow the installation prompts and link your displays to your dashboard

</p>
                    

                  
                   
                    



                       
                        <p style={{paddingRight:20,paddingLeft:20,alignItems:"center",}}>The Imagine player seamlessly displays all media formats on most screen types. Its easy to configure and install and is available for download on 4 different operating systems. 

</p>

                    
                    <Row style={{ marginTop: 22 ,paddingRight:20,paddingLeft:20,justifyContent:"center"}}>
                    <Col lg={4} md={4} style={{justifyContent:"start",alignItems:"center",paddingTop:20,paddingLeft:20}}> 
                    <Link href="/signup/">
                    <Button variant="contained" style={{backgroundColor:"#FB6520",color:"white",justifyContent:"start",textTransform:"none"}} size="large" component={"a"}>
                         Register

                         </Button>  
                         </Link>       
                    
                    </Col>
   <Col lg={8} md={8}  >
       <Row>
<Col xs={4} style={{display:"flex",justifyContent:"start",alignItems:"center",width:20,}}>  <img src={logo1} style={{width:"100%" }}></img></Col>
<Col xs={4} style={{display:"flex",justifyContent:"start",alignItems:"center",width:20}}>  <img src={logo2} style={{width:"100%" }}></img></Col>
<Col xs={2} style={{display:"flex",justifyContent:"start",alignItems:"center",width:20}}>   <img src={logo3} style={{width:"100%" }}></img></Col>
<Col xs={2} style={{display:"flex",justifyContent:"start",alignItems:"center",width:20}}>  <img src={logo4} style={{width:"100%" }}></img></Col>
                           
</Row>          
</Col>
                  
                    </Row>
                
                </Col>
                <Col md={12} lg={6} style={{justifyContent:"center",display:"flex"}}>
                <img src={dash2} alt=""></img>

                </Col>


            </Row>
            <Row style={{marginTop:100}}>
                <Col md={12} lg={6}  >
                    <img src={dash3} alt=""></img>
                </Col>
                <Col md={12} lg={6} >
                <div style={{ display:"flex",justifyContent:"center",alignItems:"center"}}>
                <h2 className="settitle"style={{textAlign:"start",paddingRight:20,paddingLeft:20,fontSize:"2rem"}}>Manage 1 or 1000’s of screens – It’s that easy

</h2>

                </div>
                  

                      
                        <p style={{paddingRight:20,paddingLeft:20,alignItems:"center",color:"black"}}>Imagine was built for the end users and includes specific industry related features. A robust and versatile application accessible to all sectors.

 </p>
                <Row style={{justifyContent:"center",flexDirection:"column"}}>
                    <Row style={{ marginTop: 10,justifyContent:"center"}}>

                        <Col xs={1}>


                            <FaShoppingBag style={{alignItems:"center", fontSize: 13 }}></FaShoppingBag>

                        </Col>
                        <Col xs={3} style={{alignItems:"center", display:"flex"}}><p  >Retail
</p></Col>
<Col xs={1}>


<FaHospital style={{alignItems:"center", fontSize: 13 }}></FaHospital>

</Col>
<Col xs={3} style={{alignItems:"center", display:"flex"}}><p  >Hospitality
</p></Col>

                    </Row>
                    <Row style={{ marginTop: 10,justifyContent:"center"}}>

                    <Col xs={1}>


<GiKnifeFork style={{alignItems:"center", fontSize: 13 }}></GiKnifeFork>

</Col>
<Col xs={3} style={{alignItems:"center", display:"flex"}}><p  >Restaurants
</p></Col>
<Col xs={1}>


<FaHeart style={{alignItems:"center", fontSize: 13 }}></FaHeart>

</Col>
<Col xs={3} style={{alignItems:"center", display:"flex"}}><p  >Healthcare
</p></Col>

                    </Row>
                    <Row style={{ marginTop: 10,justifyContent:"center" }}>

                    <Col xs={1}>


<FaBook style={{alignItems:"center", fontSize: 13 }}></FaBook>

</Col>
<Col xs={3} style={{alignItems:"center", display:"flex"}}><p  >Education
</p></Col>
<Col xs={1}>


<FaCheck style={{alignItems:"center", fontSize: 13 }}></FaCheck>

</Col>
<Col xs={3} style={{alignItems:"center", display:"flex"}}><p  >Gambling
</p></Col>







</Row>
<Row style={{ marginTop: 10,justifyContent:"center"}}>

<Col xs={1}>


<FaTree style={{alignItems:"center", fontSize: 13 }}></FaTree>

</Col>
<Col xs={3} style={{alignItems:"center", display:"flex"}}><p  >Corparate
</p></Col>
<Col xs={1}>


<FaShoppingBag style={{alignItems:"center", fontSize: 13 }}></FaShoppingBag>

</Col>
<Col xs={3} style={{alignItems:"center", display:"flex"}}><p  >Outdoor
</p></Col>







</Row>

</Row>   

        

                    

                </Col>


            </Row>
           
        </div>
    )
}
export default Dash