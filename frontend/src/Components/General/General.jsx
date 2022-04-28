import React from 'react'
//import Navbar from './Navbar'

import './General.css'
import {useNavigate} from 'react-router-dom'
function General() {
    const navigate = useNavigate()
    //const location = useLocation()
    return (
        <>
            
            <div className='General-navbar'>
                <div className="navbar-internal">
                    <ul className='navbar-ul'>
                        <li className='navbar-li'><button className='btn_nav'>Home</button></li>
                        <li className='navbar-li'><button className='btn_nav'>About us</button></li>
                        <li id="achievements"className='navbar-li'><button className='btn_nav'>Achievements</button></li>
                        <li className='navbar-li'><button className='btn_nav'>Contact us</button></li>
                        <div className="nav_btn">
                            
                            <button className="btn_nav" onClick={()=> navigate('/signup_support')}>Sign-in/Sign-up</button>

                            
                        </div>

                    </ul>

                </div>
            </div>

            
        </>
    )
}

export default General
