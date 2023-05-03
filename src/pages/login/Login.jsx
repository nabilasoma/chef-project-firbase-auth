import React, { useContext } from 'react';
import { Button, Card, Container, Form, Nav, Navbar } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthProvider';
import ActiveLink from '../../activelink/ActiveLink';
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'






const Login = () => {

    const {signIn, googleSign, gitHubSignIn} = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);

    const from = location.state?.from?.pathname || '/';

    const handleLogin = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        
        console.log(email, password);

        signIn(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            form.reset('');
            navigate(from, { replace: true });

        })
        .catch(error => {
            console.log(error)
        })
    };

    const handleGoogle = () => {
        googleSign()
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser)
        })
        .catch(error => {
            console.log(error)
        })

    };

    const handleGithub = () => {
        gitHubSignIn()
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
        })
        .catch(error => {
            console.log(error)
        })
    };


   

    return (
       <div>   
        <Card className='mx-auto w-50 mt-4 p-4'>
        <Form onSubmit={handleLogin} className='w-50 mx-auto'>
            <h3 className='text-success'>Please Login!!</h3>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name="email" placeholder="Enter email" required/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" placeholder="Password" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="info" type="submit">
                Login
            </Button>
            <br />
            <Form.Text className="text-success">
                New To This Site? Please <Link to='/registration'>Register</Link>
          </Form.Text>
        </Form>
        <div className='text-center'>
            <Button onClick={handleGoogle} variant="outline-secondary" type="submit">Sign In With Google</Button>
            <br />
            <Button onClick={handleGithub} variant="outline-info" className='mt-2' type="submit">
                Sign In With Github
            </Button>
        </div>
        </Card>
       </div>
    );
};

export default Login;