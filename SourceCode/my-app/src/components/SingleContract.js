import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import './card.css'

function SingleContract({ user }) {

  //contract popup trigers
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  //company popup trigers
  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  // One day Time in ms (milliseconds)
  var one_day = 1000 * 60 * 60 * 24
  // To set present_dates to two variables
  var present_date = new Date();
  // 0-11 is Month in JavaScript
  var christmas_day = new Date(user.enddate)
  // To Calculate the result in milliseconds and then converting into days
  var Result = Math.round(christmas_day.getTime() - present_date.getTime()) / (one_day);
  // To remove the decimals from the (Result) resulting days value
  var x = Result.toFixed(0);

//To change card color 
let classNamex=''
if(x<=10 && x>3){  classNamex="moving alert-warning"}else if(x<3){ classNamex="moving alert-danger"}else{ classNamex="moving"}

    return (
      <>

        <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
          <div className="card ">
            <div className="thumbnail">
              <img src="https://i.pinimg.com/564x/27/79/99/2779998035a066c66fba0d5da977c986.jpg" alt=" " />

              <div className="details">
                <div className="user">
                  <div className="name"><b >{user.officerName}</b></div>
                </div>
                <div className="numbers">
                  <b > Start Date :{user.startdate}</b><br />
                  <b >End Date :{user.enddate}</b>
                </div>
                <div className="clearfix" />
              </div>
            </div>
            <div className="card-info ">
              <div className={classNamex}>

                <h3>{user.contractName}</h3>
                <p>Days Until Contract End : {x} Days</p>


                <button
                  onClick={handleShow}
                  className="btn btn-info  mx-3"
                  title="Contract Details"

                >
                  Contract Details
                </button>


                {/* Contract detales popup */}

                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Contract Details</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <tr>Officer Name : {user.officerName}</tr>
                    <tr>Contract Name :  {user.contractName}</tr>
                    <tr>Start Date : {user.startdate}</tr>
                    <tr>End Data : {user.enddate}</tr>
                    <tr>Total Cost : {user.totalCost}</tr>
                    <tr>Total Cost : {user.totalCost}</tr>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>

                  </Modal.Footer>
                </Modal>

                <button
                  onClick={handleShow2}
                  className="btn btn-success  mx-3"
                  title="Company Details"
                >


                  Company Details
                </button>




                {/* Contract detales popup */}


                <Modal show={show2} onHide={handleClose2}>
                  <Modal.Header closeButton>
                    <Modal.Title>Company Details</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <tr>Company Location: {user.companyLocation}</tr>
                    <tr>Company Employee Name :  {user.companyEmployeeName}</tr>
                    <tr>Company Number : {user.companyNumber}</tr>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose2}>
                      Close
                    </Button>

                  </Modal.Footer>
                </Modal>


              </div>
            </div>
          </div>
        </div>




      </>
    )
    
}

export default SingleContract;