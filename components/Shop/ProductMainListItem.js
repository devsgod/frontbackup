import React from 'react';
import Link from "next/link";

import {Button, IconButton, Tooltip} from "@material-ui/core";
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';
class ProductMainListItem extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="single-product row mx-0">
                <div className="product-img col-lg-5 px-0">
                    <img src={this.props.imageSrc} alt="item" />
                </div>
                <div className="product-content col-lg-7 py-3">
                    <div className='row'>
                        <div className='col-8'>
                            <h3 style={{marginBottom : 0}}>
                                <Link href="#">
                                    <a>{this.props.productName}</a>
                                </Link>
                            </h3>
                        </div>
                        <div className='col-4'>
                            <Rating
                                style={{zIndex:'0'}}
                                name='rate1'
                                defaultValue={this.props.ratingValue}
                                readOnly={true}
                                precision={0.1}
                                emptyIcon={<StarBorderIcon fontSize="inherit"/>}
                            />
                        </div>
                    </div>
                    <h5>{this.props.currency}{this.props.currentPrice} <span style={{marginLeft:'10px'}}>{this.props.oldPrice !== 0 && this.props.currency}{this.props.oldPrice !== 0 && this.props.oldPrice}</span></h5>
                    <div className='description-wrapper' title={this.props.description.length > 240 ? this.props.description : ''}>
                        {
                            this.props.description.length > 240 ?
                                this.props.description.substring(0, 240) + '...' :
                                this.props.description
                        }
                    </div>
                    <div className='button-wrapper'>
                        <Tooltip title="Add to cart">
                            <Button className="cart-btn" onClick={() => this.props.onAddToCart(this.props.productId, this.props.imageSrc,
                                this.props.productName, this.props.currentPrice, this.props.oldPrice, this.props.ratingValue, this.props.quantity)}>
                                Add to cart
                            </Button>
                        </Tooltip>
                        <Tooltip style={{fontSize : '30px'}} title="View product info">
                            <IconButton style={{marginLeft:'20px'}} className="show-btn" onClick={() => {
                                let data = {
                                    productId : this.props.productId,
                                    imageSrc : this.props.imageSrc,
                                    productName : this.props.productName,
                                    price : this.props.currentPrice,
                                    oldPrice : this.props.oldPrice,
                                    ratingValue : this.props.ratingValue,
                                    quantity : this.props.quantity,
                                    description : this.props.description
                                };

                                this.props.onProductDetail(data);
                            }}>
                                <i className='icofont-eye'></i>
                            </IconButton>
                        </Tooltip>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductMainListItem;