import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


function Admindashboard() {
  // const navigate = useNavigate();

  const [inputs,setContract] = useState([]);

  const [contracts, setUsers] = useState([]);
    useEffect(() => {
        // getUsers();
        getUse();
    }, []);


///show data

  function getUse() {
    axios.get(`http://localhost/project7API/cont.php`).then(function(response) {
        console.log(response.data);
        setUsers(response.data);
    });
}

/////delete

const deleteUser = (id) => {
    axios.delete(`http://localhost/project7API/cont.php/${id}/delete`).then(function(response){
        console.log(response.data);
        getUse();
    });
  
}


const EditContract = (id) => {
axios.put(`http://localhost/project7API/cont.php/${id}/edit`, inputs).then(function(response){
            console.log(response.data);
            getUse();
        });
      }













    return (
<><br/><br/><br/><br/><br/><br/><br/>

<div className='container mb-5'>
  <table className="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Contarct Name </th>
        <th scope="col">Start Date </th>
        <th scope="col">Expired Date </th>
        <th scope="col">Company Name </th>
        <th scope="col">Total Cost </th>
        <th scope="col">Officer Name </th>
        <th scope="col">Status </th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    
    <tbody >{contracts.map((user, key) =>
     
         <tr key={key}> 
     
        <th scope="row">{user.id}</th>
        <td>{user.contractName}</td>
        <td>{user.startdate}</td>
        <td>{user.enddate}</td>
        <td>{user.companyName}</td>
        <td>{user.totalCost}</td>
        <td>{user.officerName}</td>
        
          
        {user.status===0?<td className='unapproved'>Un Approved </td>:user.status===2?<td  className='expired'>Expired</td>:<td className='approved'>Approved</td> }
         
          
        
        <td>
        <Link to={`EditContract/${user.id}`}><button type="button" className="btn btn-warning mx-2" >Edit</button></Link>
          <button type="button" className="btn btn-danger" onClick={() => deleteUser(user.id)}>Delete</button>
        </td>
      </tr>
    )}
    </tbody>
  </table>

</div>

</>
  
    );
  }
  
  export default Admindashboard;
  









