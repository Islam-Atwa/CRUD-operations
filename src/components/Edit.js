

import "bootstrap/dist/css/bootstrap.min.css";

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

                <Button
                    variant="primary"
                    type="submit"
                    size="lg"
                >
                    Update
                </Button>

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