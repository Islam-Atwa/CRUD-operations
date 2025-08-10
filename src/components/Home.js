import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/css/bootstrap.min.js";
import Table from 'react-bootstrap/Table';
import { Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";





function Home(){

  


      
  
    return (
      <table class="table table-striped border-success">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Osam</td>
            <td></td>
            <td>
              <Link className='d-flex justify-content-center gap-2'>
                <Button variant="info" >Update</Button>
                <Button variant="danger" >Delete</Button>
              </Link>
            </td>
          </tr>
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

    )
}

export default Home;  