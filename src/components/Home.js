import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/css/bootstrap.min.js";
import { Form, Button, Table } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";
import array from './array';

function Home(){

  let history = useNavigate();

  function setId(id, name, age){
    localStorage.setItem("ID", id);
    localStorage.setItem("Name", name);
    localStorage.setItem("Age", age);
    
  }

    return (
      <>
        <table className="table table-striped border-success">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {array.map((item, index)=>{
              return (
                <tr key={index}>

                  <td>{item.Name}</td>
                  <td>{item.Age}</td>
                  <td>
                    <Link className='d-flex justify-content-center gap-2'>
                      <Button variant="info" >Update</Button>
                      <Button variant="danger" >Delete</Button>
                    </Link>
                  </td>
                </tr>
              );
            })}
            <tr>
              <td>Moshrif</td>
              <td>38</td>
              <td>
                <Link className='d-flex justify-content-center gap-2'>
                  <Button variant="info" >Update</Button>
                  <Button variant="danger" >Delete</Button>
                </Link>
              </td>
            </tr>

          </tbody>
      </table>
      <div className="d-grid gap-2 mt-4">

        <Link to="/">
            <Button variant="success" size="lg">
                Create New User
            </Button>
        </Link>
      </div>
      
      </>
    // <div className="container">    

    );
}

export default Home;  