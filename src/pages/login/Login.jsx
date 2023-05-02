import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
       <div>
         <Form className='w-50 mx-auto'>
            <h3 className='text-success'>Please Login!!</h3>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Login
            </Button>
            <Form.Text className="text-muted">
                New To This Site? Please <Link to='/register'>Register</Link>
          </Form.Text>
        </Form>
        <div className='text-center mx-auto'>
        <Button variant="primary" type="submit">
            Sign In With Google
            </Button>
            <br />
            <Button className='mt-2' variant="primary" type="submit">
                Sign In With Github
            </Button>
        </div>
       </div>
    );
};

export default Login;