import React from 'react'
import {Grid} from "@material-ui/core"
import img from "../../images/whitel.png"
import {FaSwimmer} from "react-icons/fa"
export default function make() {
    return (
        <div className="container">
           <Grid container >

<Grid item xs={6}>
<img src={img}></img>

</Grid>
<Grid item xs={6} style={{paddingLeft:30}}> 

<h1 style={{color:"black",textAlign:"start",fontSize:40}}>Looking for a White Label version
</h1>
<p style={{textAlign:"start",marginBottom:20,fontSize:20,marginTop:20}}>Our white label software version allows users to customize the Imagine Software interface and design elements with their own company identity. All features and functionality is identical to the regular software. This version can be hosted on our cloud server or installed on external 3rd party server.

</p>


</Grid>
           </Grid>
        </div>
    )
}
