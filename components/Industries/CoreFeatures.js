import React from 'react';

const data = {
    "corporate": { 
        title: "Smart, useful and Inspired Communication",
        content: [
            {
                subtitle: "Key Performance Indicators",
                text: "Show real time performance metrics to motivate staff and improve accountability",
            },
            {
                subtitle: "Introduce New Staff",
                text: "Break the ice with a neat bio and introduce new staff in a fun, friendly and professional way.",
            },
            {
                subtitle: "Training",
                text: "Provide group training opportunities and refresh or upload new training videos easily",
            },
            {
                subtitle: "Promote Health",
                text: "Share information a about mental and physical health to improve staff wellbeing",
            },
            {
                subtitle: "Local Hotspots",
                text: "Filter promotions for coffee spots and afterwork drink specials in the area",
            },
            {
                subtitle: "Compliance Notices",
                text: "Allow staff to view daily notices without clogging email inboxes.. ",
            },
        ],
        icon: "icofont-workers-group"
    },
    "education": {
        title: "Digitizing Campuses to Empower Learning",
        content: [
            {
                subtitle: "Classroom Scheduling",
                text: "Display schedules that everyone can see and change them without printing.",
            },
            {
                subtitle: "Infographics",
                text: "Communicate data in an engaging, thought provoking and  visually stimulating format ",
            },
            {
                subtitle: "Imagery",
                text: "Use images of sports and cultural events or highlight student achievements.",
            },
            {
                subtitle: "Lost & Founds",
                text: "Upload pictures and a description and let everyone know ",
            },
            {
                subtitle: "Social Media",
                text: "Connect with learners and curate feeds for the campus environment",
            },
            {
                subtitle: "Digital Directories",
                text: "List classrooms, offices and halls and direct visitors with interactive maps. ",
            }
        ],
        icon: "icofont-education"
    },
    "casino": {
        title: "Transcend any multi-sensory environment",
        content: [
            {
                subtitle: "Key Performance Indicators",
                text: "Show real time performance metrics to motivate staff and improve accountability",
            },
            {
                subtitle: "Introduce New Staff",
                text: "Break the ice with a neat bio and introduce new staff in a fun, friendly and professional way.",
            },
            {
                subtitle: "Compliance Notices",
                text: "Allow staff to view daily notices without clogging email inboxes.",
            },
            {
                subtitle: "Training",
                text: "Provide group training opportunities and refresh or upload new training videos easily",
            },
            {
                subtitle: "Promote Health",
                text: "Share information a about mental and physical health to improve staff wellbeing",
            },
            {
                subtitle: "Local Hotspots",
                text: "Filter promotions for coffee spots and afterwork drink specials in the area.",
            },
        ],
        icon: "icofont-bill"
    },
    "healthcare": {
        title: "Creating a brighter information network",
        content: [
            {
                subtitle: "Patient Experience ",
                text: "Introduce patients to their health care professionals  to create a relaxed environment",
            },
            {
                subtitle: "Advertise",
                text: "Promote products or services directly or sell valuable advertising space",
            },
            {
                subtitle: "Emergency Alerts",
                text: "Notify visitors and patients about emergencies with information on what to do",
            },
            {
                subtitle: "Staff Communication",
                text: "Use internal displays to notify staff about patient statuses or general notices",
            },
            {
                subtitle: "Stand Out",
                text: "Separate your practice from the competition and a build a trusted identity. ",
            },
            {
                subtitle: "Share Healthcare Information",
                text: "Share useful information on disease prevention, medical procedures or general wellbeing ",
            },
        ],
        icon: "icofont-heart-beat"
    },
    "hospitality": {
        title: "Making comfortable hotel stays more imaginative",
        content: [
            {
                subtitle: "Virtual Concierge",
                text: "Quick, and efficient service where the human touch is not required",
            },
            {
                subtitle: "Attractions",
                text: "Highlight local attractions like parks, markets, events and restaurants. ",
            },
            {
                subtitle: "Showcase Property",
                text: "Feature imagery and video of facilities and property grounds",
            },
            {
                subtitle: "Wayfinding",
                text: "Direct customers to parking, reception, restaurants or recreation facilities",
            },
            {
                subtitle: "Value-add Information",
                text: "Weather, news, exchange rates and more updated automatically",
            },
            {
                subtitle: "Safety & Security",
                text: "Inform guests about safety and security alerts and clearly describe procedures  ",
            },
        ],
        icon: "icofont-gift"
    },
    "outdoor": {
        title: "Cut Through The Noise. Make A Statement",
        content: [
            {
                subtitle: "Boost Traffic",
                text: "Draw customers in with engaging and dynamic content",
            },
            {
                subtitle: "Increase Reach",
                text: "Show more products to more people around the clock",
            },
            {
                subtitle: "Brand Awareness",
                text: "Introduce your brand to more people and make a lasting impression on consumers  ",
            },
           
        ],
        icon: "icofont-ui-home"
    },
    "restaurants": {
        title: "Satisfy a bigger appetite for a better experience.",
        content: [
            {
                subtitle: "Drive Sales",
                text: "Display menu items in a more visually engaging format",
            },
            {
                subtitle: "Reduce Costs",
                text: "No need to constantly print menus and promotional material",
            },
            {
                subtitle: "Increase efficiency",
                text: "Automatically schedule menu changes for breakfast, lunch and dinner",
            },
            {
                subtitle: "Improve Waiting",
                text: "Entertain customers while they wait to improve the waiting experience.",
            },
            {
                subtitle: "Optimize Drive-Thru",
                text: "Highlight the most popular items and specials to reduce ordering times and increase service volume.",
            },
            {
                subtitle: "Engage",
                text: "Let customers know about company initiatives and sustainability practices.",
            },
        ],
        icon: "icofont-restaurant"
    },
    "retail": {
        title: "Re-imAGINE the retail environment.",
        content: [
            {
                subtitle: "Inform, Entertain and Sell",
                text: "Tailor-make content to perform various functions ",
            },
            {
                subtitle: "Flexibility",
                text: "Update products and pricing immediately, with ease",
            },
            {
                subtitle: "Improve Customer Experience  ",
                text: "Combine relevant information with captivating content and improve customer retention. ",
            },
            {
                subtitle: "Target Items",
                text: "Provide key product information to increase sales on specific items",
            },
            {
                subtitle: "Enhance Image",
                text: "Create a lasting impression with professional and engaging brand content. ",
            },
            {
                subtitle: "Queue Management  ",
                text: "Reduce real and perceived waiting times and improve customer satisfaction",
            },
        ],
        icon: "icofont-basket"
    }
  }

class CoreFeatures extends React.Component {
    render() {
        return (
            <section className="features-area saas-features ptb-100">
                <div className="container">
                    <div className="section-title">
                        <h2>{data[this.props.slug]["title"]}</h2>
                        <div className="bar"></div>
                    </div>
                </div>

                <div className="features-inner-area">
                    <div className="container">
                        <div className="row h-100 justify-content-center align-items-center">
                            {
                                data[this.props.slug]["content"].map((cell, index) => (

                                    <div className="col-lg-4 col-md-12" key={index}>
                                        <div className="features-inner-content">
                                            <div className="features-item" style={{marginBottom:30}}>
                                                <div className="icon">
                                                    <i className={data[this.props.slug]["icon"]} style={{fontSize: "40px"}}></i>
                                                </div>
                                                <h3 >{cell.subtitle}</h3>
                                                <p style={{marginTop:10}}>{cell.text}</p>
                                            </div>
                                        </div>
                                    </div>

                                ))
                            }
                        </div>
                    </div>
                </div> 
            </section>
        );
    }
}

export default CoreFeatures;
