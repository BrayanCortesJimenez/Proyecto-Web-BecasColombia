import React from "react";
import './navbar.css';
import { Navbar,Container,Nav } from 'react-bootstrap';

function Headernav(props){

    return(
        <Navbar className="Navegador" variant="dark" >
            <Container>
                <Navbar.Brand className="me-left" href="/">BecasColombia.com</Navbar.Brand>
                    <Nav className="me-rigth">
                        <Nav.Link  href="/BecasNacionales">Becas Nacionales</Nav.Link>
                        <Nav.Link  href="/BecasInternacionales">Becas Internacionales</Nav.Link>
                        <Nav.Link  href="/PublicarBeca">Publicar Beca</Nav.Link>
                    </Nav>
            </Container>
        </Navbar>   
    );
}

export default Headernav;