import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Banner from '../../banner/Banner';
import { AuthContext } from '../../auth/AuthProvider';
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'
import ActiveLink from '../../activelink/ActiveLink';
import './Header.css'
import userp from '../../assets/user.jpg'


const Header = () => {
    const { displayName, user, logOut } = useContext(AuthContext);


    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error));
    }


    return (
        <Container className='mt-2'>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        The Burning Kitchen
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">

                            <ActiveLink className='px-2 text-white text-decoration-none' to='/'>Home</ActiveLink>

                            <ActiveLink className='px-2 text-white text-decoration-none' to='/blog'>Blog</ActiveLink>

                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">
                                {
                                    user ? <>
                                        <a
                                            data-tooltip-id="my-tooltip"
                                            data-tooltip-content={displayName}
                                            data-tooltip-place="top"
                                        >
                                            <img className='img' src={userp} alt="" />
                                        </a>
                                        <Tooltip id="my-tooltip" />
                                        <Button onClick={handleLogOut} variant="info">Logout</Button>
                                    </> :
                                        <Link to='/login'><Button variant="info">LogIn</Button></Link>
                                }
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </Container>
    );
};

export default Header;