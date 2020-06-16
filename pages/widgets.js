import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import Footer from '../components/Layouts/Footer';
import WidgetBanner from '../components/Widget/WidgetBanner';
import WidgetContent from '../components/Widget/WidgetContent';
import Widgetimages from "../images/widgets.png"
import Tel from "../components/Widget/television"
import Paper from "../components/Widget/paper"
import Title from "../components/titlecomponent/titlecomponent"
import Bar from "../components/Features/Bar"
import Cards from "../components/Widget/newCard"
import Ex from "../components/Features/exten"

import dash1 from "../images/widgets/1.png"

import dash2 from "../images/widgets/2.png"
import dash3 from "../images/widgets/3.png"
import dash4 from "../images/widgets/4.png"
import dash5 from "../images/widgets/5.png"



class Widgets extends Component {
    static async getInitialProps({ query }) {
    
    
   
        
            return { data: query.slug}
        
       
        
 
 
        
    }
    componentDidMount() {
        const img = new Image();
        img.src = dash1; // by
        img.src = dash2;
        img.src = dash3;
    
        img.src = dash4;
       img.src=dash5;
       
    }
    


    render() {
        console.log(this.props.images)
        return (
            <React.Fragment>
                <Navbar />
                <WidgetBanner />
                <Title
                    title={"Elevate your content with these sensational widgets"}

                ></Title>

                <div className="container" style={{ marginBottom: 100,padding:30 }}>

                    <img src={Widgetimages}></img>
                </div>

                <Title
                    titlesmall={"Popular feeds setup and ready to go"}

                ></Title>

                <Tel></Tel>
                <Paper></Paper>
            
                <Bar title={"Customise Each Widget"} ></Bar>
                <div className="container">
            
              
<Ex
header={"Refine your widgets to suit your style"}
title1={"Sizing of widgets"}
content1={"Choose from full screen, side bar or adjust to any size"}
title2={"Text sizing and attributes"}
content2={"Change the font family, size, color of text and positioning"}
title3={"Configure the widgets settings"}
content3={"Each feed has elements of customization with some more than others. Select from 1- or 5-day forecast "}
title4={"Colour palette"}
content4={"Align the background, elements and typography  to your color scheme"}
title5={"Make it your own"}
content5={"A live playback view is available in a new browser "}
img1={dash1}
img2={dash2}
img3={dash3}
img4={dash4}
img5={dash5}
></Ex>    
<div style={{marginTop:100}}></div>

                </div>
          
<Cards></Cards>            
                <Footer />
            </React.Fragment>
        );
    }
}

export default Widgets;
