import './Popup.css'
import React from 'react';
import { useState, useEffect} from "react";
import axios from "axios";


const CompanyPopup = (props) => {
    const [contracts, setUsers] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);

   function getUsers() {
        axios.get(`http://localhost/project7API/cont.php/`).then(function(response) {
            console.log(response.data);
            setUsers(response.data);
        });
    }
    return props.trigger ? (
    <div className='cover'>
        <div className='popup-body'>

        <button
            className="btn"
            onClick={() => {props.setTrigger(false);
            }}>
            Close
        </button>
     <div>
        {/* <div key={id}>  */}
        {/* <h1 >{id}</h1> */}
            <h1 >{contracts.companyName}1</h1>
            <h5>{contracts.companylocation}</h5> 
            <h5> {contracts.companyEmployeeName}</h5>
            <h5> {contracts.companyNumber}</h5>
            {/* <button type="submit">Print As PDF</button>  */}
            </div>
        </div>
    </div>
    ) : (
    ""
    );
    };

export default CompanyPopup

