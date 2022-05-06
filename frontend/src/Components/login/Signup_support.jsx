import React from 'react'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
//import {useRef} from 'react'
import Axios from 'axios';
import './Signup_support.css'
import Signupform from './Signupform'
function Signupsupport() {
  const navigate = useNavigate()
  const url='http://127.0.0.1:8000/client/create'
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
      // pattern:"^[a-zA-Z][a-zA-Z0-9]{3,15}$",
      required:true
    },
    {
      id:2,
      name:'password',
      type:'password',
      errorMessage:"Password should be 8-20 characters and it should include atleast 1 letter,1 number and 1 special character",
      placeholder:'Enter your password',
      // pattern:'^(?=.[0-9])(?=.[a-zA-Z])(?=.[!@#$%^&])[a-zA-Z0-9!@#$%^&*]{8,20}$',
      label:'password',
      required:true
    },
    
    {
      id:3,
      name:'email',
      type:'email',
      errorMessage:"It should be a valid email address",
      placeholder:'Enter your email',
      label:'email',
      required:true
    },
    
    {
      id:4,
      name:'Company',
      type:'text',
      
      placeholder:'Enter your company name',
      label:'Company',
  
      required:true
    },
  ]
  
 
  const handlesubmit=(e)=>{
    e.preventDefault()
    console.log("helo2")
    Axios.post(url,{
      username:values.username,
      email:values.email,
      password:values.password,
      company:values.phone
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
      <h1 className='signup'>Signup</h1>
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