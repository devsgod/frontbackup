import React, { Component } from 'react';
import Link from "next/link";
import Navbar from '../components/Layouts/Navbar';
import Footer from '../components/Layouts/Footer';
import axios from "axios";
import config from "../config/config";
import Router from "next/dist/client/router";
import {initCartCountSet, setCheckoutInfo} from "../store/actions/cartActions";
import {connect} from "react-redux";

class CancelPayment extends Component {

    componentDidMount() {
        localStorage.removeItem('payment_data');
    }

    render() {
        return (
            <React.Fragment>
                <Navbar />
                <section className="page-title-banner">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <h2>Notification</h2>
                            </div>
                        </div>
                    </div>
                    <div className="shape3"><img src={require('../images/shape3.png')} alt="img" /></div>
                </section>
                <div className="thank-you-area">
                    <div className="container">
                        <h4 style={{lineHeight: "40px"}}>Payment was canceled! <br />
                            Please check your payment status!
                        </h4>
                        <Link href="/shop">
                            <a className="btn btn-primary mt-3">Go to Shop page</a>
                        </Link>
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    cartData: state.cart.cartData,
    subTotal : state.cart.subTotal,
    shipping : state.cart.shipping,
    taxi : state.cart.taxi,
    total: state.cart.total,
});

const mapDispatchToPros = (dispatch) => ({
    onInitCheckout : (data) => {dispatch(setCheckoutInfo(data))},
    onInitCartCount : (data) => {dispatch(initCartCountSet(data))}
});

export default connect(mapStateToProps, mapDispatchToPros)(CancelPayment);
