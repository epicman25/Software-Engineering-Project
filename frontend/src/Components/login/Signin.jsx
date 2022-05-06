import React from 'react'
import {useState} from 'react'
import Axios from 'axios'
import {useNavigate} from 'react-router-dom'
import './Signin.css'
function Signin() {
  const navigate = useNavigate()
  const url=""
  const [data,setData]=useState({
    UserName:"",
    Password:""
  })

  function handle(e){
    const newdata={ ...data}
    newdata[e.target.id]=e.target.value
    setData(newdata)
    console.log(newdata)
  }

  function submit(e){
    if (data.UserName==="client" && data.Password==="client"){
      alert("Login Success as a client")
      navigate('/clientDashboard')
    }
    if (data.UserName==="dev" && data.Password==="dev"){
      alert("Login Success as a developer")
      navigate('/devDashboard')
    }
    if(data.UserName==="manager" && data.Password==="manager"){
      alert("Login Success as a manager")
      navigate('/managerdashboard')
    }
    e.preventDefault()
    Axios.post(url,{
      UserName:data.UserName,
      Password:data.Password
    })
    
    .then(res=>{
      console.log(res.data)
    })
  }

  return (
    <div className='heading'>
      <h1 >Signin</h1>
      <div className='outerbox'>
      <form onSubmit={(e)=> submit(e)}>
        <input onChange={(e)=>handle(e)} id="UserName" value={data.UserName} placeholder='UserName' type='text'/>
        <input onChange={(e)=>handle(e)} id="Password" value={data.Password} placeholder='Password' type='password' />
        <button type='submit'>Submit</button>
      </form>
      </div>
    </div>
  )
}

export default Signin
