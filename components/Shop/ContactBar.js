import React from 'react';

const ContactBar = (props) => {
    return (
        <div className='contact-bar-wrapper'>
            <div className='image-header'>

            </div>
            <div className='contact-body'>
                <div className='row'>
                    <div className='col-3'></div>
                    <div className='col-9'>
                        <div style={{paddingTop : '20px'}}>
                            FREE DELIVERY
                        </div>
                        <div style={{paddingTop : '20px'}}>
                            On Order Over $49.86
                        </div>
                    </div>
                    <div style={{height: '10px', width : '100%', borderBottom : '1px solid #ffc800',
                        marginLeft : '40px', marginRight : '40px'
                    }}></div>
                </div>
                <div className='row'>
                    <div className='col-3'></div>
                    <div className='col-9'>
                        <div style={{paddingTop : '20px'}}>
                            ORDER PROTECTION
                        </div>
                        <div style={{paddingTop : '20px'}}>
                            Secured information
                        </div>
                    </div>
                    <div style={{height: '10px', width : '100%', borderBottom : '1px solid #ffc800',
                        marginLeft : '40px', marginRight : '40px'
                    }}></div>
                </div>
                <div className='row'>
                    <div className='col-3'></div>
                    <div className='col-9'>
                        <div style={{paddingTop : '20px'}}>
                            PROMOTION GIFT
                        </div>
                        <div style={{paddingTop : '20px'}}>
                            Special Offers!
                        </div>
                    </div>
                    <div style={{height: '10px', width : '100%', borderBottom : '1px solid #ffc800',
                        marginLeft : '40px', marginRight : '40px'
                    }}></div>
                </div>
                <div className='row'>
                    <div className='col-3'></div>
                    <div className='col-9'>
                        <div style={{paddingTop : '20px'}}>
                            MONEY BACK
                        </div>
                        <div style={{paddingTop : '20px'}}>
                            Return Over 30 Days
                        </div>
                    </div>
                    <div style={{height: '10px', width : '100%',
                        marginLeft : '40px', marginRight : '40px'
                    }}></div>
                </div>
            </div>
        </div>
    )

};

export default ContactBar;