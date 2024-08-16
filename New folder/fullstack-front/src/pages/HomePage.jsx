import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [users, setUsers] = useState([]);

  async function getData() {
    let res = await fetch("http://localhost:8081/users");
    let data = await res.json();
    setUsers(data);
  }
 function deleteData(id){
    async function deleteUser(id)
    {
      let res = await fetch(`http://localhost:8081/user/${id}`,{
        method:"DELETE"
      })
    }
    deleteUser(id);
  }

  useEffect(() => {
    getData();
  });
  return (
    <div className="container">
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">USER NAME</th>
              <th scope="col">NAME</th>
              <th scope="col">EMAIL</th>
              <th scope="col">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {users.map((e, idx) => (
              <tr>
                <td>{idx+1}</td>
                <td>{e.username}</td>
                <td>{e.name}</td>
                <td>{e.email}</td>
                <td>
                  <Link className="btn btn-primary mx-2" to={`/viewuser/${e.id}`}>View</Link>
                  <Link className="btn btn-outline-primary mx-2" to={`/edituser/${e.id}`}>Edit</Link>
                  <button className="btn btn-danger mx-2" onClick={()=>{
                    deleteData(e.id);
                  }}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HomePage;
