import React from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import {useState} from 'react'
function Client_newproject() {

  const [title,setTitle]=useState('')
  const [description,setDescription]=useState('')
  
  return (
    <div>
      <h1>Add a new project</h1>
      <div className="App list-group-item justify-content-center align-items-center mx-auto " style={{'width':'400px','backgroundColor':'white','marginTop':'15px'}}>
             <input className='form-control titleIn' placeholder='Enter the project title'/>

             <textarea type="textArea" className='mb-2 form-control desIn' placeholder='Enter the project Description' style={{'height':'150px'}}></textarea>
             


      </div>


    </div>
  )
}

export default Client_newproject