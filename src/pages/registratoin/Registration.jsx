import React, { useContext, useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthProvider';
import 'react-tooltip/dist/react-tooltip.css'
import Header from '../../shared/Header/Header';
import { updateProfile } from 'firebase/auth';


const Registration = () => {
    const [error, setError] = useState('');
    const {createUser, user} = useContext(AuthContext);

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
            console.log(loggedUser);
            updatePhoto(result.user, photo)
        })
        .catch(error => {
            console.log(error)
            setError('Password should be at least 6 character')
            
        })

        if(password < 6 ){
            setError('Password should at least 6 character');
        }
        
        
    }

    const updatePhoto =(user, photoURL) => {
        updateProfile(user, {
            photoURL : photoURL
        })
        .then(result => {
            console.log('photo url updated')
        })
        .catch(error => {
            setError(error.message)
        })
    }



    return (
       <div>
            <Header></Header>
        <Card className='w-50 mx-auto mt-4'>
        <Form onSubmit={handleRegistration} className='w-50 mx-auto'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="email" name="email" placeholder="Enter Name" required/>
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
        </Card>
       </div>
    );
};

export default Registration;