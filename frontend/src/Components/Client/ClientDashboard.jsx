import React from "react";
import { useNavigate } from "react-router-dom";

import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
function ClientDashboard() {
  const navigate = useNavigate();



  
  return (
    <>
      <div className="General-navbar">
       <div className="navbar-internal">
            <ul className='navbar-ul'>
              <li className='navbar-li'><button className='btn_nav'>Home</button></li>                         
              <li className='navbar-li'><button className='btn_nav'>About us</button></li>
              
              <li className='navbar-li'><button className='btn_nav'>Contact us</button></li>

              <div className="nav_btn">

                  <button className="btn_nav" onClick={()=> navigate('/signup_support')}>SignOut</button>



              </div>
              <li className='navbar-li'><button className='btn_nav'>Profile</button></li>
            </ul>
            <div className="App list-group-item justify-content-center align-items-center mx-auto " style={{'width':'400px','backgroundColor':'white','marginTop':'15px'}}>
              <button style={{'width':'300px','marginBottom':'10px'}} onClick={()=> navigate('/client_newproject')}>Create a new project</button>
      
              <button style={{'width':'300px','marginBottom':'10px'}} onClick={()=> navigate('/client_viewcurrproj')}>View your current projects</button>
              <button style={{'width':'300px','marginBottom':'10px'}} onClick={()=> navigate('/client_viewpastproj')}>View past projects</button>

              

            </div>

        </div>      
      </div>
    </>
  );
}

export default ClientDashboard;