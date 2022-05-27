import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import './CardBecas.css';
import Carruselimg from '../../Assets/img/Estudiante-Hero.jpg';


function CardBecas({beca}){

    return(
        <div className="CardBeca">
            <Card className="CardBeca mb-2 card bg-dark text-white" style={{ width: '50rem' }}>
                <Card.Img variant="top" src={Carruselimg} />
                <Card.Body>
                    <Card.Title>{beca.nombre}</Card.Title>
                </Card.Body>
                <ListGroup className="bg-dark text-white">
                    <ListGroupItem>Universidad:{beca.universidad}</ListGroupItem>
                    <ListGroupItem>Pais:{beca.pais}</ListGroupItem>
                    <ListGroupItem>Financiacion:{beca.porcentaje}%</ListGroupItem>
                    <ListGroupItem>Requerimientos:{beca.requerimientos}</ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <Card.Link href="#"></Card.Link>
                    <Card.Link href="#"></Card.Link>
                </Card.Body>
            </Card>
        </div>
    );
}

export default CardBecas;