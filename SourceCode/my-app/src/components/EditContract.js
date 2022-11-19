import React from 'react'
import {useState, useEffect } from "react";
import {useParams} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import axios from "axios";



const E  = () => {

  let navigate=useNavigate();
  const [inputs,setContract] = useState([]);
  const {id} = useParams();

    useEffect(() => {
        getUse();
    }, []);


    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setContract(values => ({...values, [name]: value}));
  }



///show data

  function getUse() {
    axios.get(`http://localhost/project7API/cont.php/${id}`).then(function(response) {
        console.log(response.data);
        setContract(response.data);
    });
}



      const handleSubmit = (e) => {
      
        e.preventDefault();
        axios.put(`http://localhost/project7API/cont.php/${id}`, inputs).then(function(response){
          getUse();
          navigate('/Admindashboard');

        });
        
    }



  return (
<>

<div className='edit container mt-5 '>

<h2 className='mb-5'>Edit Contract</h2>

<form className=' container' onSubmit={handleSubmit} >


 <div className="form-group ">
<label for="exampleInputEmail1" class="form-label">Contract Name</label> 

   <input type="text" name="contractName"disabled className="form-control" value={inputs.contractName} id="contractName" placeholder="Contract Name"required />
   
 </div>
 <div className="form-group mt-3">
 <label for="exampleInputEmail1" class="form-label">Officer Name</label> 
   <input type="text" className="form-control" disabled name="officerName"  value={inputs.officerName}  id="officerName" placeholder="Officer Name"  required />
   
 </div>

<div className="form-group mt-3">
<label for="exampleInputEmail1" class="form-label">employee Number</label> 

 <input type="number" className="form-control"disabled name="employeeNumber"  value={inputs.employeeNumber}  id="employeeNumber" placeholder="Employee Number" required />
 
</div> 
<div className="form-group mt-3">   
<div>
<label for="exampleInputEmail1"  class="form-label">Start Date:</label> 
<input disabled type="text"className="form-control" value={inputs.startdate} />
<label for="exampleInputEmail1"  class="form-label">New Start Date:</label> 

<input type="date"className="form-control" 
onChange={handleChange}
 name="startdate"  required /></div> 


<div className="form-group mt-3">
<label for="exampleInputEmail1"  class="form-label">End Date:</label> 
<input disabled type="text"className="form-control" value={inputs.enddate} />
<label for="exampleInputEmail1" class="form-label">New End Date:</label> 
        <input type="date" 
        onChange={handleChange}
 className="form-control"   name="enddate"required/></div>
 
</div>


<div className="form-group mt-3">

<label for="exampleInputEmail1" class="form-label">Choose Status</label>
<select class="form-select"  name='status'
onChange={handleChange}
 aria-label="Default select example">
  <option selected disabled>{inputs.status}</option>
  <option value={0}>Unapprove</option>
  <option value={1}>Approve</option>
  <option value={2}>Expired</option>
</select>

</div>


<div className='mt-5 mb-5'><button type='submit' >Save</button></div>


</form>
</div>



    </>
  )
}

export default E