

import "bootstrap/dist/css/bootstrap.min.css";
import { Link , useNavigate } from "react-router-dom";
import { Button, Form } from 'react-bootstrap';
import {useState, useEffect} from "react";
import array from "./array";
import Swal from "sweetalert2";


function Edit(){

    const [id, setid] = useState("");
    const [name, setname]= useState("");
    const [age, setage]= useState("");
    
    let history = useNavigate();

    // Getting an index of an entry with an id
    let index = array.map(function(Item){
        return Item.id
    })
    .indexOf(id);


    // Function for handling the edit and
    // pushing changes of editing/updating
    const handelSubmit=(e)=>{
        e.preventDefault();
         // Getting an index of an entry with an id
    let index = array.map(function(Item){
        return Item.id
    })
    .indexOf(id);


        if(name === '' || age === ''){
            Swal.fire({
                icon: 'error',
                title: 'invalid input',
                text: 'Please fill all fields!',
            });
            return;
        }
        let a = array[index];
        a.Name = name;
        a.Age = age;
        // Redirecting to main page
        history("/");
    }
    useEffect(() => {
        setname(localStorage.getItem("Name"));
        setage(localStorage.getItem("Age"));
        setid(localStorage.getItem("ID"));
    }, []);

    return (
        <div>
            <Form
                className="d-grid gap-2"
                style={{ margin: "3rem" }}
            >
                <Form.Group
                    className="mb-3"
                    controlId="formBasicEmail"
                >
                    <Form.Control
                        value={name}
                        onChange={(Item) =>
                            setname(Item.target.value)
                        }
                        type="text"
                        placeholder="Enter Name"
                    />

                </Form.Group>

                <Form.Group
                    className="mb-3"
                    controlId="formBasicPassword"
                >
                    <Form.Control
                        value={age}
                        onChange={(Item) =>
                            setage(Item.target.value)
                        }
                        type="number"
                        placeholder="Age"
                    />
                </Form.Group>

                <Link to="/Edit" className="d-grid gap-2">
                    <Button 
                        onClick={(Item) => handelSubmit(Item)}

                    variant="primary" size="lg">
                        Update
                    </Button>
                </Link>

                <Link  className="d-grid gap-2" to="/">
                    <Button variant="warning" size="lg">
                        Home
                    </Button>
                </Link>

            </Form>
        </div>
        
    )
};

export default Edit;