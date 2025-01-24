/*
/////////////////////////////////////////////////////////////////
import React, { useState } from 'react';
import './HomePage.css';
export default function HomePage() {
  const [usrnmerror, setUsrnmerror] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [seatnumber, setSeatnumber] = useState('');
  const [seatnumberError, setSeatnumberError] = useState('');
  const [department, setDepartment] = useState('SE');
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  /////state object and its values will be initailized with submit by set fun then passed into array! 
  let TableRec=[];
  let [studRec,setStudRec]=useState({
    username:"",
    email:"",
    seatnumber:"",
    department:"SE"
  });
  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);

    const emailPattern = /^[a-zA-Z]+[0-9]+@gmail\.com$/;
    if (!emailPattern.test(emailValue)) {
      setEmailError('Invalid email format');
    } else {
      setEmailError('');
    }
  };

  const handleSeatnumberChange = (e) => {
    const seatnumberValue = e.target.value;
    setSeatnumber(seatnumberValue);

    const seatnumberPattern = /^EB22210006\d{3}$/;
    if (!seatnumberPattern.test(seatnumberValue)) {
      setSeatnumberError('Invalid seat number format');
    } else {
      setSeatnumberError('');
    }
  };

  const handleDepartmentChange = (e) => {
    setDepartment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!emailError && !seatnumberError ) {
      alert(`Username: ${username}, Email: ${email}, Seat Number: ${seatnumber}, Department: ${department}`);
    /////////////student data object banni wi pe data paste krna hai then pass to array 
    
    setStudRec(prevState=>({
      ...prevState,
      username: username,
      email: email,
      seatnumber: seatnumber,
      department: department  })),
      ///////////pushing the object properties into Array
      TableRec.push(studRec);
    //console.log(StudRec);
    console.log(TableRec);
    setUsername('');
      setEmail('');
      setSeatnumber('');
    }
    else {
      alert('Please fix the errors in the form');
    }
  };
  
  return (
    <div className="homepage">
      <a link="RecTable.jsx">Enter the Data in Form</a>
      <h1>Student Data Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email *:(must contain upper/lowercase & numbers etc)</label>
          <input
            type="email"
            id="email"
            value={email}
            placeholder="abcA1@gmail.com"
            onChange={handleEmailChange}
            required
          />
          {emailError && <span>{emailError}</span>}
        </div>
        <div>
          <label htmlFor="seatnumber">Seat Number *:(e.g:EB22210006XXX)</label>
          <input
            type="text"
            id="seatnumber"
            value={seatnumber}
            onChange={handleSeatnumberChange}
            required
          />
          {seatnumberError && <span>{seatnumberError}</span>}
        </div>
        <div>
          <label htmlFor="department">Department:</label>
          <select
            id="department"
            value={department}
            onChange={handleDepartmentChange}
            required
          >
            <option value="SE">SE</option>
            <option value="CS">CS</option>
          </select>
        </div>
        <button type="submit" >Submit</button>
      </form>
    </div>
  );
}*/
import React, { useState } from 'react';
import './HomePage.css';

export default function HomePage({ addRecordToTableRec }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [seatnumber, setSeatnumber] = useState('');
  const [seatnumberError, setSeatnumberError] = useState('');
  const [department, setDepartment] = useState('SE');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);

    const emailPattern = /^[a-zA-Z]+[0-9]+@gmail\.com$/;
    if (!emailPattern.test(emailValue)) {
      setEmailError('Invalid email format');
    } else {
      setEmailError('');
    }
  };

  const handleSeatnumberChange = (e) => {
    const seatnumberValue = e.target.value;
    setSeatnumber(seatnumberValue);

    const seatnumberPattern = /^EB22210006\d{3}$/;
    if (!seatnumberPattern.test(seatnumberValue)) {
      setSeatnumberError('Invalid seat number format');
    } else {
      setSeatnumberError('');
    }
  };

  const handleDepartmentChange = (e) => {
    setDepartment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!emailError && !seatnumberError) {
      const newRecord = {
        username: username,
        email: email,
        seatnumber: seatnumber,
        department: department
      };
      addRecordToTableRec(newRecord);
      setUsername('');
      setEmail('');
      setSeatnumber('');
    } else {
      alert('Please fix the errors in the form');
    }
  };

  return (
    <div className="homepage">
      <h1>Student Data Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email *:(must contain upper/lowercase & numbers etc)</label>
          <input
            type="email"
            id="email"
            value={email}
            placeholder="abcA1@gmail.com"
            onChange={handleEmailChange}
            required
          />
          {emailError && <span>{emailError}</span>}
        </div>
        <div>
          <label htmlFor="seatnumber">Seat Number *:(e.g:EB22210006XXX)</label>
          <input
            type="text"
            id="seatnumber"
            value={seatnumber}
            onChange={handleSeatnumberChange}
            required
          />
          {seatnumberError && <span>{seatnumberError}</span>}
        </div>
        <div>
          <label htmlFor="department">Department:</label>
          <select
            id="department"
            value={department}
            onChange={handleDepartmentChange}
            required
          >
            <option value="SE">SE</option>
            <option value="CS">CS</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
