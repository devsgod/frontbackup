import React, { Component } from 'react';
import Link from 'next/link';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../store/actions/authActions';
import { clearErrors } from '../../store/actions/errorActions';
import loginimage from "../../images/rcl/log.png"
import ReCAPTCHA from "react-google-recaptcha";
import logo from "../../images/logom.png"
class LoginBody extends Component {
    state = {
        email: '',
        password: '',
        msg: null,

        captcha: false,
    };

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        login: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired
    };

    componentDidUpdate(prevProps) {
        const { error, isAuthenticated } = this.props;
        if (error !== prevProps.error) {

            // Check for register error
            if (error.id === 'LOGIN_FAIL') {
                this.setState({ msg: error.msg.msg });
            } else {
                this.setState({ msg: null });
            }
        }

        // If authenticated, 
        // if (isAuthenticated) {
        // }
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();

        if (!this.state.captcha) {
            this.setState({ msg: "Please do the human check!" });
            return;
        }

        const { email, password } = this.state;

        const user = {
            email,
            password
        };

        // Attempt to login
        this.props.login(user);
    };

    onCaptchaChange = e => {
        console.log("Captcha value:", e);

        if (!!e) {
            this.setState({ captcha: true });
        }
    };

    render() {
        return (
            <section className="login-area ptb-100">
                <div className="container">
                    <div className="row h-100 justify-content-center align-items-center">


                        <div className="col-lg-6 col-md-12" >
                           
                            <div className="login-form" style={{height:700}} >
                            <div className="flexcontainer" style={{ padding:10,width:200,marginBottom:30 }}>


<img src={logo}></img>
</div>
                                {this.state.msg ? (<p>{this.state.msg}</p>) : null}
                                <form onSubmit={this.onSubmit}>
                                    <div className="row">
                                    <div className="col-lg-12">
                                            <div className="form-group">
                                                <input type="email"
                                                    name="email"
                                                    id="email"
                                                    className="form-control"
                                                    placeholder="www.imagine.com"
                                                    onChange={this.onChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <input type="email"
                                                    name="email"
                                                    id="email"
                                                    className="form-control"
                                                    placeholder="username"
                                                    onChange={this.onChange}
                                                />
                                            </div>
                                        </div>

                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <input type="password"
                                                    name="password"
                                                    id="password"
                                                    className="form-control"
                                                    placeholder="Password"
                                                    onChange={this.onChange}
                                                />
                                            </div>
                                        </div>

                                        <div className="col-lg-12" style={{marginTop:20,marginBottom:20}}>
                                            <ReCAPTCHA
                                                sitekey="6LfLr-EUAAAAANxJc-VGHncZS1a0e7J3jhDAm32T"
                                                onChange={this.onCaptchaChange}
                                            />
                                        </div>

                                        {/* <div className="col-lg-6">
                                            <div className="form-check">
                                                <input type="checkbox" className="form-check-input" id="checkme" />
                                                <label className="form-check-label" htmlFor="checkme">Keep me Login</label>
                                            </div>
                                        </div> */}

                                        

                                        <div className="col-lg-12" >
                                            <button type="submit" style={{width:"100%"}} className="btn btn-primary">Sign in</button>
                                           
                                        </div>
                                        <div className="col-lg-12 text-right" style={{justifyContent:"right"}}>
                                            <p className="forgot-password">
                                                <Link href="#"><a>Forgot Password?</a></Link>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flexcontainer" style={{padding:10}}>
<p style={{fontSize:15}} > Dont have an account ? <a style={{color:"#FB6520"}}>Register here</a></p>

                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="login-image">
                                <img src={loginimage} alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
});

export default connect(mapStateToProps, { login, clearErrors })(LoginBody);