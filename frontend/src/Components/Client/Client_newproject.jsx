import React from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import {useState} from 'react'
import axios from 'axios';
function Client_newproject() {

  const [title,setTitle]=useState('')
  const [description,setDescription]=useState('')


  const handleSubmit=(e)=>{
    axios.post('',{
      'name':'title','description':'description','client_id':'client_id','status':'status','estimated_deadline':'estd_time'
    })
  }

  return (
    <div>
      <h1>Add a new project</h1>
      <div className="App list-group-item justify-content-center align-items-center mx-auto " style={{'width':'400px','backgroundColor':'white','marginTop':'15px'}}>
             <input className='form-control titleIn' placeholder='Enter the project title' onChange={event => setTitle(event.target.value)}/>

             <textarea type="textArea" className='mb-2 form-control desIn' placeholder='Enter the project Description' style={{'height':'150px'}} onChange={event => setDescription(event.target.value)}></textarea>
             

            <button className='btn btn-outline-primary mx-2 mb-3' style={{'borderRadius':'50px','fontWeight':'bold'}} onsClick={handleSubmit}>Add</button>
      </div>


    </div>
  )
}

export default Client_newproject