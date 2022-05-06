import React from 'react'
import {useState} from 'react'
import Axios from 'axios'
import {useNavigate} from 'react-router-dom'
import './Signin.css'
function Signin() {
  const navigate = useNavigate()
  const url=""
  const [data,setData]=useState({
    username:"",
    password:""
  })

  function handle(e){
    const newdata={ ...data}
    newdata[e.target.id]=e.target.value
    setData(newdata)
    console.log(newdata)
  }

  function submit(e){
    if (data.username==="client" && data.password==="client"){
      alert("Login Success as a client")
      navigate('/clientDashboard')
    }
    if (data.username==="dev" && data.password==="dev"){
      alert("Login Success as a developer")
      navigate('/devDashboard')
    }
    if(data.username==="manager" && data.password==="manager"){
      alert("Login Success as a manager")
      navigate('/managerdashboard')
    }
    e.preventDefault()
    Axios.post(url,{
      username:data.username,
      password:data.password
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
        <input onChange={(e)=>handle(e)} id="username" value={data.username} placeholder='username' type='text'/>
        <input onChange={(e)=>handle(e)} id="password" value={data.password} placeholder='password' type='password' />
        <button type='submit'>Submit</button>
      </form>
      </div>
    </div>
  )
}

export default Signin
