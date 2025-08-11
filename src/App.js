// import logo from './logo.svg';
import React from 'react';
import ReactDOM from "react-dom/client";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


// import All Components 
import Home from './components/Home';
import Create from './components/Create';
// import Create from './components/Create';
// import Edit from './components/Edit';
// import array from '/components/array';


import './App.css';


function App() {
  return (
    <div className="App">
      <h2>Crud App</h2>
      <Router>
        <Routes>
          <Route path="/" element={<Create />}/>
          <Route path="/Home" element={<Home/>} />
        </Routes>
      </Router>
      {/* <Home /> */}
      {/* <Create/> */}
      
    </div>
  );
}

export default App;

