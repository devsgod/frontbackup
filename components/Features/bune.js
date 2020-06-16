import React, { Component } from 'react';

import dashboard1 from '../../images/features/svg/Landscape.png';
import dashboard2 from '../../images/features/svg/outdoor.png';
import dashboard3 from '../../images/features/svg/portrait.png';
import dashboard4 from '../../images/features/svg/projector.png';
import dashboard5 from '../../images/features/svg/touch screen.png';
import dashboard6 from '../../images/features/svg/video wall.png';

class Overview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contentImg: [dashboard1, dashboard2, dashboard3, dashboard4, dashboard5, dashboard6],
            contentImgCur: 1,
        }
    }

    onContentHandle(e){
        this.setState({contentImgCur: e});
    }

    render() {
        return (
            <section className="overview-section bg-gray">
                <div className="container">
                    <div className="overview-box">
                        <div className="row h-100 justify-content-center align-items-center">
                            <div className="col-lg-6 col-md-6 overview-content">
                                <h3 className="order-1 mb-4">Content that displays perfectly on any size or type of display, without any fuss.</h3>
                                <div className="row">
                                    <div className="col-12 order-3 order-md-1"><p className="mb-5 order-3 order-md-2">Select a custom resolution or aspect ratio in both portrait or landscape formats. Imagine software works flawlessly with every display from low-res, HD and 4k screens to 8k projectors and beyond.</p></div>
                                    <div className="col-12 order-1 order-md-2">
                                        <div className="mb-4 order-2 order-md-3"> {/*  className="feature-display-inline">*/}
                                            <div className="row d-flex flex-wrap justify-content-around">
                                                <div onClick={e => this.onContentHandle(0)} className="d-flex flex-column align-items-center p-2">
                                                    <img src={require('../../images/features/overview/landscape.svg')} alt="shape" />
                                                    {/* <span>Business</span> */}
                                                </div>
                                                <div onClick={e => this.onContentHandle(1)} className="d-flex flex-column align-items-center p-2">
                                                    <img src={require('../../images/features/overview/outdoor.svg')} alt="shape" />
                                                    {/* <span>Online</span> */}
                                                </div>
                                                <div onClick={e => this.onContentHandle(2)} className="d-flex flex-column align-items-center p-2">
                                                    <img src={require('../../images/features/overview/portrait.svg')} alt="shape" />
                                                    {/* <span>Consumer</span> */}
                                                </div>
                                                <div onClick={e => this.onContentHandle(3)} className="d-flex flex-column align-items-center p-2">
                                                    <img src={require('../../images/features/overview/projector.svg')} alt="shape" />
                                                    {/* <span>Business</span> */}
                                                </div>
                                                <div onClick={e => this.onContentHandle(4)} className="d-flex flex-column align-items-center p-2">
                                                    <img src={require('../../images/features/overview/videowall.svg')} alt="shape" />
                                                    {/* <span>Online</span> */}
                                                </div>
                                                <div onClick={e => this.onContentHandle(5)} className="d-flex flex-column align-items-center p-2">
                                                    <img src={require('../../images/features/overview/videowall.svg')} alt="shape" />
                                                    {/* <span>Consumer</span> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 w-100 d-block d-md-none mb-5 order-2">
                                        <img src={this.state.contentImg[this.state.contentImgCur]} alt="image" className="w-100 h-100" />
                                    </div>
                                </div>
                                <div className="text-center text-md-left mt-4">
                                    <button className="btn btn-primary btn-rounded">Learn  more</button>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 overview-img d-none d-md-block">
                                <img src={this.state.contentImg[this.state.contentImgCur]} alt="image" />
                            </div>
                        </div>
                    </div>

                </div>

                <div className="shape7"><img src={require('../../images/shape7.png')} alt="shape" /></div>
                <div className="shape3"><img src={require('../../images/shape3.png')} alt="img" /></div>
                <div className="bg-gray shape-1"></div>
                <div className="shape6"><img src={require('../../images/shape6.png')} alt="img" /></div>
                <div className="shape8 rotateme"><img src={require('../../images/shape8.svg')} alt="shape" /></div>
                <div className="shape9"><img src={require('../../images/shape9.svg')} alt="shape" /></div>
                <div className="shape10"><img src={require('../../images/shape10.svg')} alt="shape" /></div>
                <div className="shape11 rotateme"><img src={require('../../images/shape11.svg')} alt="shape" /></div>
            </section>
        );
    }
}

export default Overview;
