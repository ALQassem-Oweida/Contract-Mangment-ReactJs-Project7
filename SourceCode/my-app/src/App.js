import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import Nav from './components/Nav';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import {  Routes, Route } from "react-router-dom";
import Userprofile from './components/Userprofile';
import Admindashboard from './components/Admindashboard';
import Contract from './Contract';
import EditContract from './components/EditContract.js';
import Footer from './components/Footer';
import Error404 from './components/Error404';



function App() {
  return (
<div>
     <Nav />
     <Routes>
      <Route path='/' element={<Home/>}/> 
      <Route path='/Login' element={<Login/>}/> 
      <Route path='/Signup' element={<Signup/>}/> 
      <Route path='/Userprofile' element={<Userprofile/>}/> 
      <Route path='/Admindashboard' element={<Admindashboard/>}/> 
      <Route path='/Contract' element={<Contract />}/> 
      <Route path='/Admindashboard/EditContract/:id'  element={<EditContract/>}/>
      <Route path='*'  element={<Error404/>}/>
     </Routes>
     < Footer/>
    </div>


  );
}

export default App;
