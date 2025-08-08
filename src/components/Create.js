
import Link from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

import { Button, Form } from 'react-bootstrap';


function Create(){
    return(
        <div>
            <Form className="d-grid gap-2"
            style={{margin:"5rem"}}
            >
                <Form.Group
                    className="mb-3"
                    controlId="formBasicName"
                >
                    <Form.Control
                        type="text"
                        placeholder="Enter Name"
                        required
                    />
                </Form.Group>

                <Form.Group
                    className="mb-3"
                    controlId="formBasicName"
                >
                    <Form.Control
                        type="number"
                        placeholder="Age"
                        required
                    />
                </Form.Group>

                <Button
                    variant="primary"
                    type="submit"
                >
                    Submit
                </Button>

                <a className="d-grid gap-2" to="/" >
                    <Button variant="info" size="lg" >
                        Home
                    </Button>
                </a>
            </Form>
        </div>


    )
}

export default Create;
