import React, { Component } from 'react';
import '../App.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Link } from "react-router-dom";


class Slider extends Component {
    render(){
  return (

   <section id="intro">
  <div className="intro-container">
    <div id="introCarousel" className="carousel  slide carousel-fade" data-ride="carousel">
      <ol className="carousel-indicators" />
      <div className="carousel-inner" role="listbox">
        <div className="carousel-item " style={{backgroundImage: 'url("img/intro-carousel/1.jpg")'}}>
          <div className="carousel-container">
            <div className="carousel-content">
              <h2>We are professional</h2>
              <p>Contract Works gives you the power to take control of your contracts. Drag and drop files to store all of your agreements in one searchable, scalable, secure contract repository with a CONTRACT®, Type 2 report. Control who has access with permission-based user roles.</p>
              <a href="#featured-services" className="btn-get-started scrollto"><Link  className="navbar-brand" to='/Login'>Get Started</Link></a>
            </div>
          </div>
        </div>
        <div className="carousel-item active" style={{backgroundImage: 'url("img/intro-carousel/2.jpg")'}}>
          <div className="carousel-container">
            <div className="carousel-content">
              <h2>Certainty restored</h2>
              <p>contract management software that's set up in minutes.
              Dramatically increase contract visibility, minimize risk, and never miss another renewal date.</p>
              <a href="#featured-services" className="btn-get-started scrollto"><Link  className="navbar-brand" to='/Login'>Get Started</Link></a>
            </div>
          </div>
        </div>
        <div className="carousel-item" style={{backgroundImage: 'url("img/intro-carousel/3.jpg")'}}>
          <div className="carousel-container">
            <div className="carousel-content">
              <h2>Take back control with
                 Contract Lifecycle
              Management</h2>
              <p>Automate Work. Reduce Risk. Drive Revenue.</p>
              <a href="#featured-services" className="btn-get-started scrollto"><Link  className="navbar-brand" to='/Login'>Get Started</Link></a>
            </div>
          </div>
        </div>
        <div className="carousel-item" style={{backgroundImage: 'url("img/intro-carousel/4.jpg")'}}>
          <div className="carousel-container">
            <div className="carousel-content">
              <h2>Simple to sign, easy to send
                 </h2>
              <p>eSignature keeps your modern business moving forward from virtually anywhere, at any time.</p>
              <a href="#featured-services" className="btn-get-started scrollto"><Link  className="navbar-brand" to='/Login'>Get Started</Link></a>
            </div>
          </div>
        </div>
        <div className="carousel-item" style={{backgroundImage: 'url("img/intro-carousel/5.jpg")'}}>
          <div className="carousel-container">
            <div className="carousel-content">
              <h2>Contract collaboration for every stage of the lifecycle</h2>
              <p>Contract collaboration doesn’t belong in email, documents and chats. With your most important documents stored and managed in one place, you can focus on what matters most.</p>
              <a href="#featured-services" className="btn-get-started scrollto"><Link  className="navbar-brand" to='/Login'>Get Started</Link></a>
            </div>
          </div>
        </div>
      </div>
      <a className="carousel-control-prev" href="#introCarousel" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon ion-chevron-left" aria-hidden="true" />
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#introCarousel" role="button" data-slide="next">
        <span className="carousel-control-next-icon ion-chevron-right" aria-hidden="true" />
        <span className="sr-only">Next</span>
      </a>
    </div>
  </div>
</section>


     
  )
}
}

export default Slider ;

