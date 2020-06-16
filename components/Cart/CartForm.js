import React from 'react';
import Link from "next/link";
import {Button} from "@material-ui/core";

const CartForm = (props) => {
    return(
        <div className="cart-totals">
            <h3>Cart Totals</h3>
            <ul>
                <li>Subtotal: <span>${props.subTotal}</span></li>
                <li>Shipping: <span>${props.shipping}</span></li>
                <li>Taxi: <span>${props.taxi}</span></li>
                <li>Total: <span>${props.total}</span></li>
            </ul>
            <div style={{textAlign : 'center'}}>
                <Button onClick={props.onCheckout} style={{backgroundColor : '#FB6520', color : 'white'}}>Proceed to Checkout</Button>
            </div>
        </div>
    )
};

export default CartForm;