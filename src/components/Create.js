
import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import array from "./array";

import { Link , useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import { v4 as uuidv4 } from 'uuid';

import { Button, Form } from 'react-bootstrap';


function Create(){

    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    let history = useNavigate();



    const handelSubmit = (e)=>{
        e.preventDefault();

        const ids = uuidv4();
        let uni = ids.slice(0, 8);

        let a = name, b = age;

        if(name === '' || age === ''){
            Swal.fire({
                icon: 'error',
                title: 'invalid input',
                text: 'Please fill all fields!',
            });
            return;
        }
        array.push({ id: uni, Name: a, Age: b });
        history("/");
    }
    
    return(
        <div>
            <Form className="d-grid gap-2"
            style={{margin:'12rem'}}
            >
                <Form.Group
                    className="mb-3"
                    controlId="formBasicName"
                >
                    <Form.Control
                        onChange={(e)=>
                            setName(e.target.value)
                        }
                        type="text"
                        placeholder="Enter Name "
                        required
                    />
                </Form.Group>

                <Form.Group
                    className="mb-3"
                    controlId="formBasicName"
                >
                    <Form.Control
                        onChange={(e)=>
                            setAge(e.target.value)
                        }
                        type="number"
                        placeholder="Age"
                        required
                    />
                </Form.Group>

                <Link to="/Home" className="d-grid gap-2">
                    <Button
                        onClick={(e) => handelSubmit(e)}

                        variant="primary"
                        type="submit"
                        
                        >
                        Submit
                    </Button>
                    
                </Link>

                <Link to="/Home" className="d-grid gap-2" >
                    <Button variant="info" size="lg">
                        Home
                    </Button>
                </Link>
            </Form>
        </div>


    )
}

export default Create;
