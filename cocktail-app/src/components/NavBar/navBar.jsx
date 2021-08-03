import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';



export default function NavBar(){



    return(
        <React.Fragment>
            <Navbar className="bg-light" variant="light">
                <Container>
                    <Navbar.Brand><u><h1>The Cocktail Lounge</h1></u></Navbar.Brand>
                    <Nav>
                    </Nav>
                </Container>
            </Navbar>    
        </React.Fragment>

    );
}