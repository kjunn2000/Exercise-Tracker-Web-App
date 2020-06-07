import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav  from 'react-bootstrap/Nav';


export default class NavComponent extends React.Component{
    render(){
        return(
            <Navbar className="border-bottom" bg="transparent" expand="lg">
                <Navbar.Brand>Jun</Navbar.Brand>
                <Navbar.Toggle className="border-0" aria-controls="navbar-toogle"/>
                <Navbar.Collapse id="navbar-toogle"> 
                    <Nav className="ml-auto">
                        <Link className="nav-link" to="/">Exercises</Link>
                        <Link className="nav-link" to="/create">Create Exercise Log</Link>
                        <Link className="nav-link" to="/user">Create User</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}   


