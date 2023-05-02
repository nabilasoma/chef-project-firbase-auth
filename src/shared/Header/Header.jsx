import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Banner from '../../banner/Banner';

const Header = () => {
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
                            <Link className='px-2 text-white text-decoration-none' to='/category'>Category</Link>
                        
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
        <Banner></Banner>
       </div>
    );
};

export default Header;