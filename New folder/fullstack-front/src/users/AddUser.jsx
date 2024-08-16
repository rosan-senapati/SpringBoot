import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AddUser = () => {
    const[name,setName]=useState("");
    const[userName,setUserName]=useState("");
    const[email,setEmail]=useState("");
    const nav = useNavigate();
async function postData(obj){
    let res = await fetch("http://localhost:8081/user",{
        method:"POST",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify(obj)
    })
    nav('/');
}

    function addData(){
        let obj = {
            name:name,
            username:userName,
            email:email
        }
        postData(obj);

    }
    
  return (
    <div className='container'>
        <div className='row'>
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                <h2 className='text-center md-4'>Register User</h2>
                <div className='text-center mb-3'>
                    <label htmlFor='Name' className='form-label'>
                        Name:
                    </label>
                    <input type="text" className='form-control' placeholder='Enter your Name' name='name' onChange={(e)=>{
                        setName(e.target.value);
                    }} />
                    <label htmlFor='Name' className='form-label'>
                        UserName:
                    </label>
                    <input type="text" className='form-control' placeholder='Enter your USer Name' name='username' onChange={(e)=>{
                        setUserName(e.target.value);
                    }}  />
                    <label htmlFor='Name' className='form-label'>
                        Email:
                    </label>
                    <input type="text" className='form-control' placeholder='Enter your Email' name='email' onChange={(e)=>{
                        setEmail(e.target.value);
                    }} />
                    <button type="submit" className='btn btn-outline-primary'style={{marginTop:"2rem"}} onClick={()=>{
                        addData();
                    }}>Submit</button>
                    <button type="submit" className='btn btn-outline-danger'style={{marginTop:"2rem", marginLeft:"1rem"}} onClick={()=>{
                        nav('/');
                    }}>Cancel</button>
                </div>

            </div>
        </div>

    </div>
  )
}

export default AddUser