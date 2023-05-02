import React, { useContext, useState } from 'react';
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthProvider';

const Registration = () => {
    const [error, setError] = useState('');
    const {createUser} = useContext(AuthContext);

    const handleRegistration = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;

        console.log(name, email, password, photo);

       

        createUser(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser)
        })
        .catch(error => {
            console.log(error)
            setError('Password should be at least 6 character')
            
        })

        if(password < 6 ){
            setError('Password should at least 6 character');
        }
        
        
    }

    return (
       <div>
         <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                The Burning Kitchen
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                            <Link className='px-2 text-white text-decoration-none' to='/'>Home</Link>
                       
                            <Link className='px-2 text-white text-decoration-none' to='/blog'>Blog</Link>
                        
                            <Link className='px-2 text-white text-decoration-none' to='/registration'>Registration</Link>
                       
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">More deets</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Dank memes
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
         <Form onSubmit={handleRegistration} className='w-50 mx-auto'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name="name" placeholder="Enter email" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name="email" placeholder="Enter email" required/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" placeholder="Password" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Photo url</Form.Label>
                <Form.Control type="text" name="photo" placeholder="Photo url" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Register
            </Button>
            <br />
            <Form.Text className="tex-danger">
                
            </Form.Text>
            <Form.Text className="text-muted">
                Already have a account? Please <Link to='/login'>Login</Link>
            </Form.Text>
        </Form>
        <p className='text-danger text-center'>{error}</p>
       </div>
    );
};

export default Registration;