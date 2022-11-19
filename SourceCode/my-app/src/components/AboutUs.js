
import React, { Component } from 'react';
import '../App.css';


class AboutUs extends Component {
    render(){
  return (

<section id="about">
  <div className="container">
    <header className="section-header">
      <h3>About Us</h3>
      <p>Contract is a contract management system to easily manage and monitor all contracts during the contract life cycle. By doing so you will be able to reduce costs and risks
</p>
    </header>
    <div className="row about-cols">
      <div className="col-md-4 wow fadeInUp">
        <div className="about-col">
          <div className="img">
            <img src="img/about-mission.jpg" alt className="img-fluid" />
            <div className="icon"><i className="ion-ios-speedometer-outline" /></div>
          </div>
          <h2 className="title"><a href="#">VALUES</a></h2>
          <p>
          We enable success by aligning our interests with those of our customers, providing the industry’s only unconditional guarantee on the software. This ensures that it is never in our interest to exaggerate software capabilities.
          </p>
        </div>
      </div>
      <div className="col-md-4 wow fadeInUp" data-wow-delay="0.1s">
        <div className="about-col">
          <div className="img">
            <img src="img/about-plan.jpg" alt className="img-fluid" />
            <div className="icon"><i className="ion-ios-list-outline" /></div>
          </div>
          <h2 className="title"><a href="#">Mission</a></h2>
          <p>
          We are on a mission to deliver Contract Lifecycle Management without limitations through agility, and deep expertise in order to transform contracts into relationships,Empower Builders
 Enable Success
     </p>
        </div>
      </div>
      <div className="col-md-4 wow fadeInUp" data-wow-delay="0.2s">
        <div className="about-col">
          <div className="img">
            <img src="img/about-vision.jpg" alt className="img-fluid" />
            <div className="icon"><i className="ion-ios-eye-outline" /></div>
          </div>
          <h2 className="title"><a href="#">Our Vision</a></h2>
          <p>
          We’re leading the way to a digital-first world. Follow us as we continue to change how business gets done.As a trusted solution provider and partner, help organizations become more agile with applications that work the way they do     </p>
        </div>
      </div>
    </div>
  </div>
</section>

  
)
}
}

export default AboutUs;
