
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './HomePage';
import "./App.css";
import RecTable from './RecTable';
function App() {
  const [TableRec, setTableRec] = useState([]);
  const addRecordToTableRec = (record) => {
    setTableRec([...TableRec, record]);
  };
  return (
      <div className="main">
        <div className="nav">
          <nav>
            <Link to="/">Homepage</Link>
            <Link to="/rec-table">Record Table</Link>
          </nav>
        </div>
        <Routes>
          <Route path="/" element={<HomePage addRecordToTableRec={addRecordToTableRec} />} />
          <Route path="/rec-table" element={<RecTable records={TableRec} />} />
        </Routes>
      </div>
  );
}
export default App;