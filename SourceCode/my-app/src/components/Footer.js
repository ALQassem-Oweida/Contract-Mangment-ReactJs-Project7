

import React, { Component } from 'react';
import '../App.css';


class Footer extends Component {
    render(){
  return (

<div>

  <footer id="footer">
    <div className="footer-top mt-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 footer-info">
            <h3>CONTRACT</h3>
            <p>CONTRACT is a contract management system to easily manage and monitor all contracts during the contract life cycle. By doing so you will be able to reduce costs and risks.</p>
          </div>
          <div className="col-lg-3 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><i className="ion-ios-arrow-right" /> <a href="#">Home</a></li>
              <li><i className="ion-ios-arrow-right" /> <a href="#">About us</a></li>
              <li><i className="ion-ios-arrow-right" /> <a href="#">Services</a></li>
              <li><i className="ion-ios-arrow-right" /> <a href="#">Terms of service</a></li>
              <li><i className="ion-ios-arrow-right" /> <a href="#">Privacy policy</a></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 footer-contact">
          <h4>Contact Us</h4>
          <p>
              A108 Adam Street <br />
              Amman, JORDAN <br />
            <strong>Phone:</strong> +962778585757<br />
            <strong>Email:</strong> contract@example.com<br />
            </p>
            <div className="social-links">
              <a href="https://twitter.com/" className="twitter"><i className="fa fa-twitter" /></a>
              <a href="https://www.facebook.com/" className="facebook"><i className="fa fa-facebook" /></a>
              <a href="https://www.instagram.com/?hl=en" className="instagram"><i className="fa fa-instagram" /></a>
              <a href="https://myaccount.google.com/" className="google-plus"><i className="fa fa-google-plus" /></a>
              <a href="https://www.linkedin.com/" className="linkedin"><i className="fa fa-linkedin" /></a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 footer-newsletter">
            <h4>Our Newsletter</h4>
            <p>We have a dedicated global enterprise sales team ready to discuss your unique business requirements, regardless of location. We also have certified Partners in Amman, Jordan .</p>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="copyright">
        Â© Copyright <strong>BizPage</strong>. All Rights Reserved
      </div>
      <div className="credits">
      </div>
    </div>
  </footer>{/* #footer */}
  <a href="#" className="back-to-top"><i className="fa fa-chevron-up" /></a>
</div>





)
}
}

export default Footer;