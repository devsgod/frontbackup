import React from 'react';
import Link from "next/link";
import { connect } from 'react-redux';
import { addedToCart, setCheckoutInfo } from '../../store/actions/cartActions';
import CartForm from "./CartForm";
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import {IconButton, Tooltip} from "@material-ui/core";

import Router from 'next/router';

class CartBody extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            cartData : {},
            keys : [],
            shipping : 0,
            taxi : 0,
            subTotal : 0,
            total : 0,
            couponeCode : '',
        };
    }

    getSubTotal = (data) => {
        let realData = data;

        let retValue = 0;
        let keys = Object.keys(realData);

        for (let i = 0; i < keys.length; i++) {
            let tempKey = keys[i];
            let tempPrice = realData[tempKey].price;
            let tempQuantity = realData[tempKey].quantity;

            retValue += tempPrice * tempQuantity;
        }

        return retValue;
    };

    onCheckout = () => {
        const sendData = {
            subTotal : this.state.subTotal,
            shipping : this.state.shipping,
            taxi    : this.state.taxi,
            total   : this.state.total,
            cartData : this.state.cartData
        };

        this.props.setCheckoutInfo(sendData);

        const {pathname} = Router;

        setTimeout(() => {
            Router.push('/checkout');
        }, 1000);
    };


    onChangeQuantity = (bPlus, id) => {

        let data = this.state.cartData;

        let quantity = data[id].quantity;
        let totalQuantity = data[id].totalQuantity;
        let addedCount = 0;
        if (bPlus === true) {
            quantity ++;
            addedCount = 1;

            // if (quantity < totalQuantity) {
            //     quantity ++;
            //     addedCount = 1;
            // }
            // else {
            //     alert('This product count is limited')
            // }
        }
        else {
            if (quantity > 0) {
                quantity--;
                addedCount = -1;
            }
            else{
                alert('you cannot select 0');
            }
        }

        data[id].quantity = quantity;

        let subTotal = this.getSubTotal(data);
        let total = subTotal + this.state.shipping + this.state.taxi;

        this.setState({
            cartData : data,
            subTotal,
            total
        }, () => {
            localStorage.setItem('cart_data', JSON.stringify(this.state.cartData));
            if (addedCount !== 0) {
                this.props.addedToCart(addedCount);
            }
        })
    };

    onDeleteProduct = (id) => {
        let data = this.state.cartData;

        let deleteQuantity = data[id].quantity;
        delete data[id];

        let keys = Object.keys(data);

        let subTotal = this.getSubTotal(data);
        let total = subTotal + this.state.shipping + this.state.taxi;

        this.setState({
            cartData : data,
            keys,
            subTotal,
            total
        }, () => {
            localStorage.setItem('cart_data', JSON.stringify(this.state.cartData));
            this.props.addedToCart(-1 * deleteQuantity);
        })
    };

    componentDidMount() {
        let localProducts = localStorage.getItem('cart_data');

        if (localProducts) {
            let realData = JSON.parse(localProducts);

            let keys = Object.keys(realData);

            let subTotal = this.getSubTotal(realData);
            let total = subTotal + this.state.shipping + this.state.taxi;

            this.setState({
                cartData : realData,
                keys,
                subTotal,
                total
            })
        }
    }

    render() {
        return (
            this.state.cartData && this.state.keys.length > 0 ?
                <section className="cart-area ptb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <form>
                                    <div className="cart-table table-responsive">
                                        <table className="cart-table table table-bordered">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Product</th>
                                                    <th scope="col">Unit Price</th>
                                                    <th scope="col">Quantity</th>
                                                    <th scope="col">Total</th>
                                                    <th scope="col">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            {
                                                this.state.keys.map((data, idx) => {
                                                    return(
                                                        <tr key={idx} className="pr-list-view">
                                                            <td className="product-thumbnail">
                                                                <div className="pr-lst-img">
                                                                    <img src={this.state.cartData[data].imageSrc} alt="item" />
                                                                </div>
                                                                <div className="pr-lst-t" style={{float : 'left', paddingLeft : '20px'}}>
                                                                    <h2>{this.state.cartData[data].productName}</h2>
                                                                    <p></p>
                                                                    <Rating
                                                                        style={{zIndex:'0'}}
                                                                        name='rate1'
                                                                        defaultValue={this.state.cartData[data].ratingValue}
                                                                        readOnly={true}
                                                                        precision={0.1}
                                                                        emptyIcon={<StarBorderIcon fontSize="inherit"/>}
                                                                    />
                                                                    {
                                                                        this.state.cartData[data].oldPrice !== 0 &&
                                                                        <h5 style={{textDecoration: 'line-through'}}>${this.state.cartData[data].oldPrice}</h5>
                                                                    }
                                                                </div>
                                                            </td>

                                                            <td className="product-price">
                                                                <span className="unit-amount">${this.state.cartData[data].price}</span>
                                                            </td>
                                                            <td className="product-quantity">
                                                                <div className="product-quant">
                                                                    <button type="button" className="sub qty-btn" onClick={() => {
                                                                        this.onChangeQuantity(false, data)
                                                                    }}
                                                                            data-btn-type="dec" data-id="62">-
                                                                    </button>
                                                                    <input type="number" className="get_value_62"
                                                                           value={this.state.cartData[data].quantity} min="1" max="3" readOnly/>
                                                                        <button type="button" onClick={() => {
                                                                            this.onChangeQuantity(true, data)
                                                                        }}
                                                                                className="add qty-btn"
                                                                                data-btn-type="inc" data-id="62"
                                                                                product-qty="56">+
                                                                        </button>
                                                                </div>
                                                            </td>

                                                            <td className="product-subtotal">
                                                                <span className="subtotal-amount">${this.state.cartData[data].price * this.state.cartData[data].quantity}</span>
                                                            </td>

                                                            <td className="product-remove">
                                                                <Tooltip title="Delete this product">
                                                                    <IconButton color="secondary" onClick={() => {
                                                                        this.onDeleteProduct(data);
                                                                    }}>
                                                                        <i className="icofont-ui-delete"></i>
                                                                    </IconButton>
                                                                </Tooltip>
                                                            </td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                            </tbody>
                                        </table>
                                    </div>

                                    <div className="cart-buttons">
                                        <div className="row h-100 justify-content-center align-items-center">
                                            <div className="col-lg-5 col-md-5">
                                                <div className="coupon-box">
                                                    <input type="text" className="form-control" placeholder="Coupon Code" />
                                                    <button type="submit">Apply Coupon Code</button>
                                                </div>
                                            </div>
                                            <div className="col-lg-7 col-md-7">
                                                <CartForm
                                                    subTotal={this.state.subTotal}
                                                    shipping={this.state.shipping}
                                                    taxi={this.state.taxi}
                                                    total={this.state.total}
                                                    onCheckout={this.onCheckout}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                :
                <div className="cart-empty-wrapper">
                    <label>Cart is empty!</label>
                </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        cartData: state.cart.addedItems,
        total: state.cart.total
    }
};

const mapDispatchToProps = (dispatch) => ({
    addedToCart : (addedCount) => {dispatch(addedToCart(addedCount))},
    setCheckoutInfo : (data) => {dispatch(setCheckoutInfo(data))}
});

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(CartBody)