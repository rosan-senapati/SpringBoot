import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ViewUser = () => {
  const {id} = useParams();
  const[user,setUser]=useState({});
  async function getData(){
    let res = await fetch(`http://localhost:8081/user/${id}`);
    let data = await res.json();
    setUser(data);
  }

  useEffect(()=>{
    getData();
  })
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow text-center">
          <h2 className="text-center md-4">User Details</h2>
          <div className="card">
            <div className="card-header">
              Details of User ID:{user.id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Name:</b>
                  {user.name}
                </li>
                <li className="list-group-item">
                  <b>User Name:</b>
                  {user.username}
                </li>
                <li className="list-group-item">
                  <b>Email:</b>
                  {user.email}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/"}>Back to Home</Link>
        </div>
      </div>
    </div>
  );
};

export default ViewUser;
