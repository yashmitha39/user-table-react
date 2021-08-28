import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUserInformation();
  })

  const getUserInformation = async() => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    setUsers([...data]);
  }

  return (
    <div>
      <h1>User Information</h1>
      <h2 style={{display: users.length ? "none" : ""}}>No information available</h2>
      <table style={{display: !users.length ? "none" : ""}}>
        <thead>
        <th>Username</th>
        <th>Name</th>
        <th>Email</th>
        <th>City</th>
        </thead>
        <tbody>
          {
            users.map(user => {
              const {username, name, email, address: {city}} = user;
              return(
                <tr>
                  <td>{username}</td>
                  <td>{name}</td>
                  <td>{email}</td>
                  <td>{city}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;