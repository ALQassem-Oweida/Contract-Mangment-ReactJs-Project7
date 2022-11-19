
import './Popup.css'
import React from 'react';
import { useState, useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Popups = (props) => {
    const [contracts, setUsers] = useState([]);
    const {id} = useParams();
    const name=props.name;
    console.log(name)
    useEffect(() => {
        getUsers();
    }, []);
  
   function getUsers() {
        axios.get(`http://localhost/project7API/cont.php/${id}`).then(function(response) {
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
      
        <div > 
        <h1 >{name.id}</h1>
            <h1 >{name.contractName}</h1>
            <h5>{name.startdate}</h5> 
            <h5> {name.enddate}</h5>
            <h5> {name.totalCost}</h5>
            <h5> {name.companyName}</h5>
            <button type="submit">Print As PDF</button> 
            </div>
        </div>
    </div>
    ) : (
    ""
    );
    };

export default Popups

