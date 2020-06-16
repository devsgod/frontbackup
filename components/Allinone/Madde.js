import React from "react"

import { FaCheck} from "react-icons/fa"
import Link from 'next/link';
import { Button } from "@material-ui/core"
import dash3 from "../../images/All/rest2.jpg"
import rest from  "../../images/All/rest.png"
import { FaHospital,FaHeart,FaBook,FaTree,FaShoppingBag} from "react-icons/fa"
import {GiKnifeFork} from "react-icons/gi"
import { Row,Col } from "react-bootstrap"
import logo2 from "../../images/LGlogo.svg"
import Paper from '@material-ui/core/Paper';

const Dash = () => {



    return (
        <div style={{ marginBottom:100}} className="container">
          
            <Row style={{marginTop:100}} className="television">
                
                <Col md={12} lg={7} >
                <div style={{ display:"flex",justifyContent:"start",alignItems:"center",paddingBottom:20}}>
                <h2 className="settitle"style={{textAlign:"start",paddingRight:20,paddingLeft:20,fontSize:"2rem"}}>Simple plug and play with <br/> Imagine & LG


</h2>

                </div>
                  

                      
                        <p style={{paddingRight:20,paddingLeft:20,alignItems:"center",color:"black"}}>Sleek, light weight and modern and available in a range of sizes, the LG digital signage displays have a built-in system on chip (SOC), meaning no additional hardware is required and includes the Imagine software at no cost.

 </p>
                <Row style={{justifyContent:"center",flexDirection:"column"}}>
                    <Row style={{ marginTop: 10,justifyContent:"start",marginLeft:20}}>

                        <Col  style={{alignItems:"center", display:"flex"}}>
                            
                        <FaCheck style={{alignItems:"center", fontSize: 13,marginRight:5 }}></FaCheck>
                            <p  >
                            
                     
                            Available in 22”- 108” (FHD and QHD)

</p></Col>

<Col  style={{alignItems:"center", display:"flex"}}>
    
<FaCheck style={{alignItems:"center", fontSize: 13,marginRight:5 }}></FaCheck>
    <p  >

    8gig Storage

</p></Col>

                    </Row>
                    <Row style={{ marginTop: 10,justifyContent:"start",marginLeft:20}}>

            
<Col  style={{alignItems:"center", display:"flex"}}>
<FaCheck style={{alignItems:"center", fontSize: 13,marginRight:5 }}></FaCheck>
    <p  >

    Full HD or QHD available

</p></Col>

<Col  style={{alignItems:"center", display:"flex"}}>
<FaCheck style={{alignItems:"center", fontSize: 13,marginRight:5 }}></FaCheck><p  >
    

    USB playback/fail safe

</p></Col>

                    </Row>
                    <Row style={{ marginTop: 10,justifyContent:"start",marginLeft:20 }}>

        
<Col style={{alignItems:"center", display:"flex"}}>
    
<FaCheck style={{alignItems:"center", fontSize: 13,marginRight:5 }}></FaCheck>
    <p  >

    Built in speakers

</p></Col>

<Col style={{alignItems:"center", display:"flex"}}>
    
<FaCheck style={{alignItems:"center", fontSize: 13,marginRight:5}}></FaCheck>
    <p  >
    

    Video wall functionality

</p></Col>







</Row>

<Row style={{ marginTop: 22, paddingRight: 20, paddingLeft: 20, justifyContent: "center" }}>
                        <Col xs={5} style={{display:"flex", justifyContent: "center", alignItems: "center"}}>
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



</Row>   

        

                    

                </Col>

                <Col md={12} lg={5}  >
                    <img src={dash3} alt=""></img>
                </Col>
            </Row>
           
<Row style={{justifyContent:"center"}}> 

<img src={rest} alt="notfound" style={{width:"80%"}}></img>

</Row>
<Row style={{justifyContent:"center",marginTop:50}}> 

<h2>Sync Your Content</h2>
<div style={{width:"100%",display:"flex",justifyContent:"center",margin:20}}>
<p style={{display:"block",width:"70%",textAlign:"center",color:"black"}}>Create mouth watering digital menu boards utilizing the custom built Imagine LG sync feature. Simply install 2 or more screens and schedule your content to flow from one screen into other or display one message across all screens. Imagine that!

</p>

</div>
<Link href="/singup/">
                                <Button variant="contained" style={{ backgroundColor: "#FB6520", color: "white", justifyContent: "start", textTransform: "none" }} size="large" component={"a"}>
                                 Register

                         </Button>
                            </Link>
</Row>
<div className="container flexcontainer" style={{marginTop:150,marginBottom:150}}>
   
     
   <Paper elevation={3} className="flexcontainer">

<div className="flexcontainer">

<h1 style={{color:"black",textAlign:"center",fontSize:30,marginTop:30}}>Need assistance with getting started?

</h1>
<p style={{textAlign:"center"}}>Need assistance with getting started?

</p>
<div className="flexcontainer" style={{width:"100%",justifyContent:"center",textAlign:"center",alignItems:"center"}}>

<Link href="/contact">
<Button variant="contained" style={{ margin:20,backgroundColor: "#FB6520", color: "white", justifyContent: "start", textTransform: "none" }} size="large" component={"a"}>
  Contact
</Button>
</Link>
</div>

</div>


   </Paper>
   
  </div>

        </div>
    )
}
export default Dash