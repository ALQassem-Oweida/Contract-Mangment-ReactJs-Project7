import React, { Component } from 'react';
import '../App.css';


class Service extends Component {
    render(){
  return (

    <section id="services">
  <div className="container">
    <header className="section-header wow fadeInUp">
      <h3>Services</h3>
      <p>We offer a full range of services to our customers. Whether you want to start with our basic hosted service and minimum consulting services, or engage our team to do a complete fixed price implementation, we are pleased to provide exceptional service.</p>
    </header>
    <div className="row">
      <div className="col-lg-4 col-md-6 box wow bounceInUp" data-wow-duration="1.4s">
        <div className="icon"><i className="ion-ios-analytics-outline" /></div>
        <h4 className="title"><a href>Hosted Service</a></h4>
        <p className="description">We offer same-day setup of a production knowledgebase on our high-end servers. Get started quickly with a low cost of entry and enjoy the ability to move in-house at any time with our Hybrid SaaS platform.</p>
      </div>
      <div className="col-lg-4 col-md-6 box wow bounceInUp" data-wow-duration="1.4s">
        <div className="icon"><i className="ion-ios-bookmarks-outline" /></div>
        <h4 className="title"><a href>Implementation Services</a></h4>
        <p className="description">We offer full consulting services with our experienced and proven team. We work with companies of all sizes and profiles to help them achieve the best possible implementation of Agiloft. Let us save you time and money, and ensure your success.</p>
      </div>
      <div className="col-lg-4 col-md-6 box wow bounceInUp" data-wow-duration="1.4s">
        <div className="icon"><i className="ion-ios-paper-outline" /></div>
        <h4 className="title"><a href>Custom Development</a></h4>
        <p className="description">We can build a new enterprise application with Agiloft in roughly two to three times the time required to develop and write the specification. A spec that takes a week to develop can typically be implemented in two to three weeks, and we will provide a fixed price contract to prove it. </p>
      </div>
      <div className="col-lg-4 col-md-6 box wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s">
        <div className="icon"><i className="ion-ios-speedometer-outline" /></div>
        <h4 className="title"><a href>Administrator and Partner Training Classes</a></h4>
        <p className="description">Attend an in-person training course to learn how to automate a unique business process or customize existing Agiloft templates for your organization.</p>
      </div>
      <div className="col-lg-4 col-md-6 box wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s">
        <div className="icon"><i className="ion-ios-barcode-outline" /></div>
        <h4 className="title"><a href>Annual Support and Upgrade Contracts</a></h4>
        <p className="description">Customers who purchase Agiloft have a choice of standard or premium annual support contracts. All contracts come with free upgrades and telephone support.</p>
      </div>
      <div className="col-lg-4 col-md-6 box wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s">
        <div className="icon"><i className="ion-ios-people-outline" /></div>
        <h4 className="title"><a href>Customer Support</a></h4>
        <p className="description">We offer 24/7 support to customers through our Agiloft support portal. Phone support is available during business hours.</p>
      </div>
    </div>
  </div>
</section>

  )
}
}

export default Service;

