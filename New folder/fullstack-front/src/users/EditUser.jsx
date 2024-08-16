import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const EditUser = () => {
    const[name,setName]=useState("");
    const[userName,setUserName]=useState("");
    const[email,setEmail]=useState("");
    const nav = useNavigate();
    const {id} = useParams();
async function updateData(obj){
    let res = await fetch(`http://localhost:8081/user/${id}`,{
        method:"PUT",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify(obj)
    })
    nav('/');
}
async function getData(){
  let res = await fetch(`http://localhost:8081/user/${id}`);
  let data = await res.json();
  setName(data.name);
  setUserName(data.username);
  setEmail(data.email);
}

useEffect(()=>{
   getData();
},[])

    function addData(){
        let obj = {
            name:name,
            username:userName,
            email:email
        }
        updateData(obj);

    }
    
  return (
    <div className='container'>
        <div className='row'>
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                <h2 className='text-center md-4'>Update User</h2>
                <div className='text-center mb-3'>
                    <label htmlFor='Name' className='form-label'>
                        Name:
                    </label>
                    <input type="text" className='form-control' placeholder='Enter your Name' name='name' onChange={(e)=>{
                        setName(e.target.value);
                    }} value={name}/>
                    <label htmlFor='Name' className='form-label'>
                        UserName:
                    </label>
                    <input type="text" className='form-control' placeholder='Enter your User Name' name='username' onChange={(e)=>{
                        setUserName(e.target.value);
                    }}  value={userName} />
                    <label htmlFor='Name' className='form-label'>
                        Email:
                    </label>
                    <input type="text" className='form-control' placeholder='Enter your Email' name='email' onChange={(e)=>{
                        setEmail(e.target.value);
                    }} value={email}/>
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

export default EditUser