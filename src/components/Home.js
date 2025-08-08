import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/css/bootstrap.min.js";
import Table from 'react-bootstrap/Table';
import { Form } from 'react-bootstrap';




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
            <td>Hegazy</td>
            <td>Moshrif</td>

          </tr>
        </tbody>
        

    </table>

    )
}

export default Home;  