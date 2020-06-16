import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from "next/link";
import CustomPaypal from '../Payment/customPayment';
class OrderSummary extends Component {

    constructor(props) {
        super(props);
        this.state = {
            keys : [],
            bPaypal : true,
            description : '',
            currency : 'USD',
        }
    }
    componentDidMount() {
        let keys = Object.keys(this.props.cartData);
        this.setState({
            keys,
        });

    }



    onChangeInput = () => {
        this.setState({
            bPaypal : !this.state.bPaypal
        })
    };



    render() {
        // let total = (this.props.total).toFixed(2);

        return (
            <div className="col-lg-6 col-md-12">
                <div className="order-details">
                    <h3 className="title">Your Order</h3>
                    <div className="bar"></div>

                    {
                        this.state.keys.length > 0 &&
                        <div className="order-table table-responsive">
                            <table className="table table-bordered">
                                <thead>
                                <tr>
                                    <th style={{textAlign : 'center'}} scope="col">Product</th>
                                    <th style={{textAlign : 'center'}} scope="col">Price</th>
                                    <th style={{textAlign : 'center'}} scope="col">quantity</th>
                                    <th style={{textAlign : 'center'}} scope="col">Total</th>
                                </tr>
                                </thead>

                                <tbody>
                                {this.state.keys.map((data, idx) => (
                                    <tr key={idx}>
                                        <td style={{textAlign : 'center'}} className="product-name">
                                            <label>{this.props.cartData[data].productName}</label>
                                        </td>
                                        <td style={{textAlign : 'center'}}>
                                            <span className="subtotal-amount">${this.props.cartData[data].price}</span>
                                        </td>
                                        <td style={{textAlign : 'center'}}>
                                            <span className="subtotal-amount">{this.props.cartData[data].quantity}</span>
                                        </td>
                                        <td style={{textAlign : 'center'}} className="product-total">
                                            <span className="subtotal-amount">${this.props.cartData[data].price * this.props.cartData[data].quantity}</span>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    }


                    <div className="order-table table-responsive py-3">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">Sum</th>
                                    <th scope="col">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td className="order-subtotal">
                                    <span>Cart Subtotal</span>
                                </td>

                                <td className="order-subtotal-price">
                                    <span className="order-subtotal-amount">${this.props.subTotal}</span>
                                </td>
                            </tr>

                            <tr>
                                <td className="order-shipping">
                                    <span>Shipping</span>
                                </td>

                                <td className="shipping-price">
                                    <span>${this.props.shipping}</span>
                                </td>
                            </tr>
                            <tr>
                                <td className="order-shipping">
                                    <span>Taxi</span>
                                </td>

                                <td className="shipping-price">
                                    <span>${this.props.taxi}</span>
                                </td>
                            </tr>
                            <tr>
                                <td className="total-price">
                                    <span>Order Total</span>
                                </td>

                                <td className="product-subtotal">
                                    <span className="subtotal-amount">${this.props.total}</span>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="payment-method">
                        <p>
                            <input type="radio" onChange={this.onChangeInput} checked={this.state.bPaypal} id="paypal" name="radio-group" />
                            <label htmlFor="paypal">PayPal</label>
                        </p>
                        <p>
                            <input type="radio" onChange={this.onChangeInput} id="cash-on-delivery" name="radio-group" />
                            <label htmlFor="cash-on-delivery">Payfast</label>
                        </p>
                    </div>
                    {
                        this.state.bPaypal === true ?
                            <CustomPaypal
                                onClick={() => alert('ddddddd')}
                                total={this.props.total}
                                currency={this.state.currency}
                                description={this.state.description}
                                onSuccess={props.onSuccessPayment}
                            /> :
                            ''
                    }
                </div>
            </div>
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

export default connect(
    mapStateToProps
)(OrderSummary)
