import React from 'react';
import Link from "next/link";

class ProductSmalListItem extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="single-product row mx-0">
                <div className="product-img col-4 px-0">
                    <img src={this.props.imageSrc} alt="item" />
                </div>
                <div className="product-content col-8 py-3" style={{paddingLeft:'36px'}}>
                    <h3 style={{marginBottom : '20px'}}>
                        <Link href="#">
                            <a>{this.props.productName}</a>
                        </Link>
                    </h3>
                    <h5>{this.props.currency}{this.props.currentPrice} <span style={{marginLeft:'10px'}}>{this.props.currency}{this.props.oldPrice}</span></h5>
                </div>
            </div>
        )
    }
}

export default ProductSmalListItem;