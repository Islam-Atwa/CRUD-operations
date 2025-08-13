

import "bootstrap/dist/css/bootstrap.min.css";
import { Link , useNavigate } from "react-router-dom";
import { Button, Form } from 'react-bootstrap';


function Edit(){
    return (
        <div>
            <Form
                className="d-grid gap-2"
                style={{ margin: "5rem" }}
            >
                <Form.Group
                    className="mb-3"
                    controlId="formBasicEmail"
                >
                    <Form.Control
                        
                        type="text"
                        placeholder="Enter Name"
                    />

                </Form.Group>

                <Form.Group
                    className="mb-3"
                    controlId="formBasicPassword"
                >
                    <Form.Control
                        
                        type="number"
                        placeholder="Age"
                    />
                </Form.Group>

                <Link to="/Edit" className="d-grid gap-2">
                    <Button variant="primary" size="lg">
                        Update
                    </Button>
                </Link>

                <Link className="d-grid gap-2" to="/">
                    <Button variant="warning" size="lg">
                        Home
                    </Button>
                </Link>

            </Form>
        </div>
        
    )
};

export default Edit;