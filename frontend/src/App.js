import General from './Components/General/General';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import './App.css';
import DevDashboard from './Components/Developer/DevDashboard';
import ClientDashboard from './Components/Client/ClientDashboard';
import ManagerDashboard from './Components/Project_Manager/ManagerDashboard';
import Signupsupport from './Components/login/Signup_support';
import Signin from './Components/login/Signin';
import Forgot_pasword from './Components/login/Forgot_pasword';
import Signin_support from './Components/login/Signin_support';


function App() {
  return (
   <>
    <Router>
      
      <Routes>
        <Route path="/" element={<General/>} /> 
        
        <Route path="/signup_support" element={<Signupsupport/>} />
        <Route path="/signin" element={<Signin/>} />
        <Route path="forgot" element={<Forgot_pasword/>} />
        <Route path="/devdashboard" element={<DevDashboard/>} />
        <Route path="/clientdashboard" element={<ClientDashboard/>} />
        <Route path="/managerdashboard" element={<ManagerDashboard/>} />
        <Route path="/signin_support" element={<Signin_support/>} />
      </Routes>      
    </Router>
    
    
   </> 
  )
}

export default App;
