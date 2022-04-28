import React from 'react'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
//import {useRef} from 'react'
import Axios from 'axios';
import './Signup_support.css'
import Signupform from './Signupform'
function Signupsupport() {
  const navigate = useNavigate()
  const url=''
  const [values, setValues] = useState({
    username: '',
    password: '',
    confirmpassword: '',
    email: '',
    fullname: '',
    phone: '',

  })
  
  

  
  const inputs=[
    {
      id:1,
      name:'username',
      type:'text',
      errorMessage:"Username should be 3-10 characters long",
      placeholder:'Enter your username',
      label:'username',
      pattern:"^[a-zA-Z][a-zA-Z0-9]{3,15}$",
      required:true
    },
    {
      id:2,
      name:'password',
      type:'password',
      errorMessage:"Password should be 8-20 characters and it should include atleast 1 letter,1 number and 1 special character",
      placeholder:'Enter your password',
      pattern:'^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$',
      label:'password',
      required:true
    },
    {
      id:3,
      name:'confirmpassword',
      type:'password',
      errorMessage:"Passwords don't match",
      placeholder:'confirmpassword',
      label:'confirmpassword',
      pattern:values.password,
      required:true
    },
    {
      id:4,
      name:'email',
      type:'email',
      errorMessage:"It should be a valid email address",
      placeholder:'Enter your email',
      label:'email',
      required:true
    },
    {
      id:5,
      name:'fullname',
      type:'text',
      
      placeholder:'Enter your fullname',
      label:'fullname'
    },
    {
      id:6,
      name:'phone',
      type:'number',
      errorMessage:"it should be 10 digits",
      placeholder:'Enter your phone number',
      label:'phone',
      pattern:"^[0-9]{10}$",
      required:true
    },
  ]
  

  const handlesubmit=(e)=>{
    e.preventDefault()
    Axios.post(url,{
      username:values.username,
      password:values.password,
      email:values.email,
      fullname:values.fullname,
      phone:values.phone
    })
    .then(res=>{
      console.log(res.values)
    })
    
  }

  const onChange=(e)=>{
    setValues({...values,[e.target.name]:e.target.value}
    )
  } 
  console.log(values)
  return (
    <div className='app'>
    <form onSubmit={handlesubmit} className="forms">
      <h1>Signup</h1>
      {inputs.map((input)=>(
        <Signupform key={input.id} {...input} value={values[input.name]} onChange={onChange}/>
      ))}
      
      <button type="submit">Submit</button>
      <p>Already an user? Signin</p><button className='here' onClick={()=> navigate('/signin_support')}>here</button>
    
    </form>
    </div>
  )

}

export default Signupsupport