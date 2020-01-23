import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';


function App() {

  const [teamMember, setTeamMember] = useState({ name: "", email: "", role: "" });

  const handleChange = event => {
    setTeamMember({ ...teamMember, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(teamMember.name);
    console.log(teamMember.email);
    console.log(teamMember.role);
  };

  return (
    <div className="App">
      {console.log(teamMember)}
      <form onSubmit={event => handleSubmit(event)}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={teamMember.name}
            onChange={event => handleChange(event)}
          />
        </label>

        <label>
          email:
          <input
            type="text"
            name="email"
            value={teamMember.email}
            onChange={event => handleChange(event)}
          />
        </label>
        <br></br>

        <label>
          role:
          <select>
            type="text"
            name="role"
            value={teamMember.role}
            onChange={event => handleChange(event)}
            <option>UI DEV</option>
            <option>FRONTEND DEV</option>
            <option>BACKEND DEV</option>
          </select>
        </label>
        <br></br>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
