import React, { Component } from 'react';
import Banner from '../components/Features/Banner';
import Navbar from '../components/Layouts/Navbar';
import Footer from '../components/Layouts/Footer';
import Our from "../components/Features/Our"
import All from "../components/Features/All"

import ourimg1 from "../images/features/play.png"
import ourimg2 from "../images/features/dash.png"
import ourimg3 from "../images/features/All/Q.png"
import ourimg4 from "../images/features/All/Overlay.png"

import Overview from '../components/Features/Overview';
// import Platform from '../components/Features/Platform';
import Htext from "../components/Features/yazı"
import Bar from "../components/Features/Bar"
import Multi from "../components/Features/Multicard"
import CtaCard from '../components/Saas/CtaCard';

import GalleryContent from '../components/Saas/GalleryContent';
import Cards from "../components/Features/Cardsforfetaure"

class Features extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Banner />
                <Bar title={"The Necessities To Your Success"}></Bar>
                <Cards></Cards>
                <Our
                title={"Getting to know the platform"}
                p={"Understanding how it all works and as well as the benefits it brings."}
                header1={"Dashboard"}
                header2={"Player"}
                content1={"A WYSIWYG (What you see is what you get) application which is accessible from any PC. The interface enables complete control over your screens and content displayed.                "}
                content2={"Installed onto the hardware and wirelessly linked to the dashboard. The Imagine player displays your content perfectly, restarts on a reboot and continues to play content with or without internet connection. Multiple OS versions available."}
                img={ourimg1}
                img2={ourimg2}
                ></Our>
                <CtaCard />
                <All></All>
             
                <Overview></Overview>
                 <Our
                    title={"Industry Specific Premium Features"}
                    p={"Constantly adjusting and improving for industry needs"}
                    header1={"Wireless Caller"}
                    header2={"Overlay Pop Up"}
                    content1={" Centrally controlled and monitored from the management interface. Our wireless button and receiver enables an instant message to display over any existing content. Ideal for a queue management and activations. Example: Button 1: “Next customer, Teller 1”"}
                    content2={"Take complete control and add an overlay (image or video), which be scheduled to pop up directly over any existing playing content (Live TV, adverts, widgets, etc..). Select from multiple placement areas for added control (Top bar, full screen, L Shape, etc..). "}
                    img={ourimg3}
                    img2={ourimg4}
                 
                 
                 ></Our>
            
             <div className="features-area">
             <Htext></Htext>
             <Multi from={0} to={4}></Multi>
             </div>
                {/* <Platform /> */}
             
                <GalleryContent />
               
                <Footer />
            </React.Fragment>
        );
    }
}

export default Features;
