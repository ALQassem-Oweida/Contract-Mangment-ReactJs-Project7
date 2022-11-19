import { Link } from "react-router-dom";
import {useNavigate} from "react-router-dom";


function Nav() {


  let navigate=useNavigate();
  
  function logout() {
   sessionStorage.clear();
    navigate('/Login')
  }
  
 
  return (

<header id="header">
  <div className="container-fluid">
    <div id="logo" className="pull-left">
      <h1><Link  className="navbar-brand" to='/'>CONTRACT</Link></h1>
    </div>
    <nav id="nav-menu-container">
      <ul className="nav-menu">
        <li className="menu-active"> <Link  className="navbar-brand" to='/'>Home</Link></li>
        <li><a href="/#about">About Us</a></li>
        <li><a href="/#services">Services</a></li>
        <li><a href="/#facts">Facts</a></li>
        <li><a href="/#team">Team</a></li>


     

        
        {sessionStorage.getItem("username")!== null?<><li><Link className="navbar-brand" to='/Contract'>Contarcts</Link></li>{sessionStorage.getItem('role')==="admin"?<li><Link className="navbar-brand" to='/Admindashboard'>Dashbord</Link></li>:<> </>}<li><Link  className="navbar-brand" to='/Userprofile'>{sessionStorage.getItem('username')} </Link></li><li><button className="logout" onClick={logout} >LOGOUT</button></li></>
        :<><li ><Link  className="navbar-brand" to='/Signup'>Signup</Link></li><li><Link  className="navbar-brand" to='/Login'>Login</Link></li></>}


  
      </ul>
    </nav>
  </div>
</header>

  
  );
}

export default Nav;
