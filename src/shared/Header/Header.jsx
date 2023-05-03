import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Banner from '../../banner/Banner';
import { AuthContext } from '../../auth/AuthProvider';

const Header = () => {
    const {displayName, user, logOut} = useContext(AuthContext);


    const handleLogOut = () => {
        logOut()
        .then()
        .catch(error => console.log(error));
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
                        <Nav.Link href="#deets">
                        {
                            user?  <Button onClick={handleLogOut} variant="info">Logout</Button> :
                            <Link to='/login'><Button variant="info">LogIn</Button></Link>
                        }
                        </Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Dank memes
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <Banner></Banner>
       </div>
    );
};

export default Header;