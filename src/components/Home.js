import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/css/bootstrap.min.js";
import Table from 'react-bootstrap/Table';
import { Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";


function Home(){
  let history = useNavigate();


  function setId(id, name, age){
    localStorage.setItem("id", id);
    localStorage.setItem("Name", name);
    localStorage.setItem("Age", age);
  }
  function deleted(id) {
        let index = array
            .map(function (e) {
                return e.id;
            })
            .indexOf(id);

        // Deleting the entry with the specified index
        array.splice(index, 1);

        // Redirecting to the same page to re-render
        history("/");
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
            {Array.map((item, index)=>{
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