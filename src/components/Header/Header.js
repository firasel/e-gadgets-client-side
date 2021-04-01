import React, { useContext } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Header.css';

const Header = () => {
    const [loggedInUser,setLoggedInUser]=useContext(UserContext);

    return (
        <Navbar bg="light" variant="light" expand="lg">
            <div className="container">
            <Navbar.Brand className='nvabarBrand' href="/home">E Gadgets</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto text-center text-lg-start navbarLink">
                    <Nav.Link as={Link} to='/home'>Home</Nav.Link>
                    <Nav.Link as={Link} to='/orders'>Orders</Nav.Link>
                    <Nav.Link as={Link} to='/manage'>Admin</Nav.Link>
                    <Nav.Link as={Link} to='/checkout'>CheckOut</Nav.Link>
                    {
                        !loggedInUser.email && <Nav.Link as={Link} to='/login' className="navbarBtn">Login</Nav.Link>
                    }
                    {
                        loggedInUser.email && <Nav.Link onClick={()=>setLoggedInUser({})} className="navbarBtn">LogOut</Nav.Link>
                    }
                    
                </Nav>
            </Navbar.Collapse>
            </div>
        </Navbar>
    );
};

export default Header;