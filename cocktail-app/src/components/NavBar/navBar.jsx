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
                    <Navbar.Brand><u><h1>Cocktail Lounge</h1></u></Navbar.Brand>
                    <Nav>
                        <Nav.Item className="text-lg"> 
                            <Nav.Link as={Link} to="/"><h5>Home</h5></Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="text-lg"> 
                            <Nav.Link as={Link} to="/addCollection"><h5>Add Collection</h5></Nav.Link>
                        </Nav.Item>
                        <Nav.Item> 
                            <Nav.Link as={Link} to="/addCocktail"><h5>Add Cocktail</h5></Nav.Link>
                        </Nav.Item>
                        </Nav>
                </Container>
            </Navbar>    
        </React.Fragment>

    );
}