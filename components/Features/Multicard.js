import React, { Component } from 'react';
import {features_list} from '../../shared/constant';
class Multi extends Component {
    constructor(props) {
        super(props);
           this.state = {
          

            // for load more button
            //all_features: [],     <= data is used on top
            from:props.from,
            features_array_to_show: [],
            features_show_row_count: props.to,
            items_in_a_row: 4,
            load_more_disable: false,
         
        }
    }
    componentDidMount() {
        this.setState({features_array_to_show: features_list.slice(this.state.from, this.state.features_show_row_count * this.state.items_in_a_row)});
    }

    loadMoreFeatures() {
        if ( this.state.features_show_row_count < features_list.length / this.state.items_in_a_row )
        {
            this.state.features_show_row_count = this.state.features_show_row_count + 1;
            this.setState({features_array_to_show: features_list.slice(0, this.state.features_show_row_count * this.state.items_in_a_row)});
        }
        else {
            this.state.load_more_disable = true;
        }
    }
render(){



    return (
        <div>
             <div className="app-features-content features-area">
                    <div className="container">
                  

                        <div className="row mb-5">
                            {
                                this.state.features_array_to_show.map( (feature, index) => (
                                    <div className="col-lg-3 col-6 p-2" key={index}>
                                        <div className="single-features-amazing row">
                                            <div>
                                                <div className="icon">
                                                    <img src={require(`../../images/features-icons/${feature.icon}`)}  alt="no" />
                                                </div>
                                            </div>
                                            <div className="text-center">
                                                <h3 style={{margin:20}}>{feature.title}</h3>
                                                <p>{feature.text}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
{!this.props.button?(null):(  <div className="row justify-content-center">
                            <button onClick={ (e) => this.loadMoreFeatures() } className="btn btn-primary">View more</button>
                        </div>)}
                      
                    </div>
                </div>
        </div>
    )




}
  

    
}
 export default Multi