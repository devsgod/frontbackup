import React, { Component } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
// Google Map
// import { compose, withProps } from "recompose"
// import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import axios from "axios";
import config from "../../config/config.json";
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import ReCAPTCHA from "react-google-recaptcha";
import Phone from "../../images/rcl/contact.png"

class Form extends Component {
    state = {
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        businesstype: 'None',
        captcha: false,
    };

    onBusinessType = (event) => {
        this.setState({ businesstype: event.target.value });
    }
    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();

        const { name, email, phone, subject, message } = this.state;

        const data = {
            name,
            email,
            phone,
            subject,
            message
        };

        // var str = JSON.stringify(data);

        // console.log("str", str);

        axios.post(config.CONTACT_FORM, data)
            .then(res => {
            })
            .catch(function (error) {
            });
    };

    onCaptchaChange = e => {
        console.log("Captcha value:", e);

        if (!!e) {
            this.setState({ captcha: true });
        }
    };

    render() {
        // const MyMapComponent = compose(
        //     withProps({
        //         googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
        //         loadingElement: <div style={{ height: `100%` }} />,
        //         containerElement: <div style={{ height: `400px` }} />,
        //         mapElement: <div style={{ height: `100%` }} />,
        //     }),
        //     withScriptjs,
        //     withGoogleMap
        //   )((props) =>
        //     <GoogleMap
        //         defaultZoom={8}
        //         defaultCenter={{ lat: -34.087, lng: 18.820 }}
        //     >
        //         {props.isMarkerShown && <Marker position={{ lat: -34.087, lng: 18.820 }} />}
        //     </GoogleMap>
        // )

        return (
            <section className="contact-area">
                {/* <div className="google-map">
                    <MyMapComponent
                        isMarkerShown = { true }
                    />
                </div> */}

                <div className="container ptb-100 pb-0">


                    <div className="row h-100 justify-content-center align-items-center arrow-image-relative">
                        <div className="col-lg-6 col-md-12">
                            <img src={Phone}></img>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div style={{ marginBottom: 50 }}>
                                <h1 style={{ color: "black" }}> We're <span style={{ color: "#1e92a5" }}>  Here </span>  to  Help!</h1>
                                <p >Fill in your details below and we will get back to you soon</p>
                            </div>


                            <form id="contactForm" onSubmit={this.onSubmit}>
                                <div className="row">
                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <input type="text" className="form-control" required={true} data-error="Please enter your name" placeholder="Fullname"
                                                name="name"
                                                id="name"
                                                onChange={this.onChange}
                                            />
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <input type="email" className="form-control" required={true} data-error="Please enter your email" placeholder="Email adress"
                                                name="email"
                                                id="email"
                                                onChange={this.onChange}
                                            />
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-6">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Phone number"
                                                name="phone"
                                                id="phone"
                                                onChange={this.onChange}
                                            />
                                        </div>
                                    </div>
                                    <div style={{ padding: 10, width: "100%", paddingBottom: 20,paddingLeft:12 }}>

                                        <Select
                                            value={this.state.businesstype}
                                            onChange={this.onBusinessType}
                                            label="s"
                                            className="selectm"
                                            style={{ width: "100%", paddingLeft: "12px", borderBottom: "1px solid #eeeeee", paddingRight: 0 }}
                                        >
                                            <MenuItem value="None">Business Type</MenuItem>
                                            <MenuItem value="Retail">Retail</MenuItem>
                                            <MenuItem value="Restaurant">Restaurant</MenuItem>
                                            <MenuItem value="Corporate">Corporate</MenuItem>
                                            <MenuItem value="Education">Education</MenuItem>
                                            <MenuItem value="Gambling">Gambling</MenuItem>
                                            <MenuItem value="Outdoor">Outdoor</MenuItem>
                                            <MenuItem value="Hospitality">Hospitality</MenuItem>
                                            <MenuItem value="Healthcare">Healthcare</MenuItem>
                                        </Select>

                                    </div>
                                    <div className="col-lg-12 col-md-6">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Subject"
                                                name="subject"
                                                id="subject"
                                                onChange={this.onChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <textarea name="message" className="form-control" id="message" cols="30" rows="5" required data-error="Write your message" placeholder="Your Message"
                                                name="message"
                                                id="message"
                                                onChange={this.onChange}
                                            />
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>

                                    <div className="col-lg-12" style={{ margin: 40 }}>
                                        <ReCAPTCHA
                                            sitekey="6LfLr-EUAAAAANxJc-VGHncZS1a0e7J3jhDAm32T"
                                            onChange={this.onCaptchaChange}
                                        />
                                    </div>

                                    <div className="col-lg-12 col-md-12 " >
                                        <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>Send</button>
                                        <div id="msgSubmit" className="h3 text-center hidden"></div>
                                        <div className="clearfix"></div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Form;
