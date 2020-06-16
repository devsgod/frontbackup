import React, {useRef} from 'react';
class PaypalExrpressBtn extends React.Component{
    constructor(props) {
        super(props);

        this.state  = {
            EnabledState : false
        }
    }

    componentDidMount() {
        this.setState({EnabledState : true});

        window.paypal.Button.render({
            env : 'sandbox',
            client : {
                sandbox : 'AU2GLhS-ylt39bl3oXEwZvRDx-UlE6hv8Y79P5xvqFNKG6gctm3-u3VjNq0yj1atgO9rPOdJPleb48oZ',
            },

            payment : function (data, actions) {
                return actions.payment.create({
                    transaction : [
                        {
                            amount : {
                                total : '10',
                                currency : 'USD'
                            }
                        }
                    ]
                })
            },

            commit : true,

            onAuthorize : function (data, actions) {
                return actions.payment.execute().then(function (response) {
                    this.props.onSuccess(response);
                })
            },
            onCancel:function (data) {
                console.log('the payment was canceled!');
            }
        },
            '#paypal-express-btn'
        )
    }

    render(){

        let papalRef = useRef();
        return (
            <div>
                {this.state.EnabledState ? <div id="paypal-express-btn" /> : 'loading...' }
            </div>
        )
    }
}

export default PaypalExrpressBtn;


