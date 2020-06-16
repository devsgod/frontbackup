import React, {useEffect, useState, useRef} from 'react';

const customPayment = (props) => {

    let paypalRef = useRef();

    useEffect(() => {

        paypal.Buttons({
            createOrder : (data, actions) => {
                return actions.order.create({
                    purchase_units : [
                        {
                            description: props.description,
                            amount : {
                                currency_code : props.currency,
                                value : props.total
                            }
                        }
                    ]
                })
            },
            onApprove : async (data, actions) => {
                await actions.order.capture().then((detail) => {
                    props.onSuccess(detail);
                });
            },
        })
            .render(paypalRef);

    }, []);

    return(
        <div style={props.style} ref={v => (paypalRef = v)}/>
    )
};

export default customPayment;