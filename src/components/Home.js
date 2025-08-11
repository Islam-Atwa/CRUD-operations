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




  function deleted(id){
    
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        let index = array.map(function(Item){
          return Item.id;
        })
        .indexOf(id);
        array.splice(index, 1);
            history("/");

        
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })

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
                      <Button
                      onClick={()=> deleted(item.id)}
                       variant="danger"
                        >
                        Delete
                        </Button>
                    </Link>
                  </td>
                </tr>
              );
            })}
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