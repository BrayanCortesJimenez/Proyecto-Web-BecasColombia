import React from "react";
import './navbar.css';
import { Navbar,Container,Nav } from 'react-bootstrap';

function Headernav(props){

    return(
        <Navbar className="Navegador" variant="dark" >
            <Container>
                <Navbar.Brand className="col-4 align-self-start" href="#Home">BecasColombia.com</Navbar.Brand>
                    <Nav className="Manejadro-menu">
                        <Nav.Link className="objeto-menu" href="#">Becas Nacionales</Nav.Link>
                        <Nav.Link className="objeto-menu" href="#">Becas Internacionales</Nav.Link>
                        <Nav.Link className="objeto-menu" href="#">Publicar Beca</Nav.Link>
                    </Nav>
            </Container>
        </Navbar>
       
    );
}

export default Headernav;