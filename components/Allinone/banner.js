import React, { Component } from 'react';
import {Row,Col} from "react-bootstrap"

import background from "../../assets/back/home/lgbanner.png"
class Banner extends Component {
    render() {
        return (
            <section className="page-title-banner-feature banner-responsive"  style={{backgroundImage:`url(${background})`,marginBottom:50}}>
                <div className="shape1"><img src={require('../../images/shape3.png')} alt="img" /></div>
                <div className="container">
                    <Row>
                        <Col >
                            <h2></h2>
                        </Col>
                    </Row>
                </div>
                <div className="shape3"><img src={require('../../images/shape3.png')} alt="img" /></div>
            </section>
        );
    }
}

export default Banner;

