import React, { Component } from 'react';
import '../App.css';


class Team extends Component {
    render(){
  return (

<section id="team">
  <div className="container">
    <div className="section-header wow fadeInUp">
      <h3>Team</h3>
      <p>When you hire us , You get us, Guaranteed we don't outsources</p>
    </div>
    <div className="row">
      <div className="col-lg-3 col-md-6 wow fadeInUp">
        <div className="member">
          <img src="img/team-1.jpg" className="img-fluid" alt />
          <div className="member-info">
            <div className="member-info-content">
              <h4>Walter White</h4>
              <span>Chief Executive Officer</span>
              <div className="social">
                <a href><i className="fa fa-twitter" /></a>
                <a href><i className="fa fa-facebook" /></a>
                <a href><i className="fa fa-google-plus" /></a>
                <a href><i className="fa fa-linkedin" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
        <div className="member">
          <img src="img/team-2.jpg" className="img-fluid" alt />
          <div className="member-info">
            <div className="member-info-content">
              <h4>Sarah Jhonson</h4>
              <span>Product Manager</span>
              <div className="social">
                <a href><i className="fa fa-twitter" /></a>
                <a href><i className="fa fa-facebook" /></a>
                <a href><i className="fa fa-google-plus" /></a>
                <a href><i className="fa fa-linkedin" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
        <div className="member">
          <img src="img/team-3.jpg" className="img-fluid" alt />
          <div className="member-info">
            <div className="member-info-content">
              <h4>William Anderson</h4>
              <span>CTO</span>
              <div className="social">
                <a href><i className="fa fa-twitter" /></a>
                <a href><i className="fa fa-facebook" /></a>
                <a href><i className="fa fa-google-plus" /></a>
                <a href><i className="fa fa-linkedin" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
        <div className="member">
          <img src="img/team-4.jpg" className="img-fluid" alt />
          <div className="member-info">
            <div className="member-info-content">
              <h4>Amanda Jepson</h4>
              <span>Accountant</span>
              <div className="social">
                <a href><i className="fa fa-twitter" /></a>
                <a href><i className="fa fa-facebook" /></a>
                <a href><i className="fa fa-google-plus" /></a>
                <a href><i className="fa fa-linkedin" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
     
     )
    }
    }
    
    export default Team ;
    
    