import React, { useState } from 'react';
import "./RecTable.css"
export default function RecTable({ records }) {
  const TabDatSt={
    textDecoration: 'underline'
  }
  const tabStyle={
    borderRadius:'5px',
    backgroundColor:'bisque'
  }
  const tabRawStyle={
    borderRadius:'5px solid black',
    borderBottom:"5px solid black"
  }
  let [srchdRcd,setSrchdRcd]=useState("");
  const [filteredRecords, setFilteredRecords] = useState([]);
  const handlesearchInputchnage = (e) => {
    setSrchdRcd(e.target.value);
  };
  function RtrnSrchRec(){
  const filteredRecords = records.filter(record => 
    record.seatnumber.includes(srchdRcd),
    console.log("Searched For: ", srchdRcd),
  )
  console.log("Result for Search Records: ",filteredRecords);
  //console.log(filteredRecords);
  setFilteredRecords(filteredRecords)
  return filteredRecords
  }
  return (
    <div>
      <div className=" belownav"><h1>Record Table </h1> </div>
      <div className=" belownav searchbar">
        {srchdRcd===""?(<p>Enter the Record Seat Number : </p>):(filteredRecords.map(record => (
          <div className="srchdRecClass" >
            <p>Seat Number: {record.seatnumber}</p>
            <p>Name: {record.username}</p>
            <p>Email: {record.email}</p>
            <p>Department: {record.department}</p>
          </div>
        )))}
        <input placeholder='Input Seat # for Records'
        className='searchbar'
          value={srchdRcd}
          onChange={handlesearchInputchnage}
          >
        </input>
        <button className="searchbutton"onClick={RtrnSrchRec}>Search
        </button>
      </div>
      <div>
      {records.length === 0 ? (
        <p>No records available.</p>
      ) : (
      <table >
        <thead>
          <tr>
            <th>Username:</th>
            <th>Email:</th>
            <th>Seat Number:</th>
            <th>Department:</th>
          </tr>
        </thead>
            <tbody>
            {records.map((record, index) => (
              <tr key={index}>
                <td>|{record.username}|</td>
                <td>|{record.email}|</td>
                <td>|{record.seatnumber}|</td>
                <td>|{record.department}|</td>
              </tr>
            ))}
            </tbody>
      </table>
      )};
      </div>
    </div>
  );
}