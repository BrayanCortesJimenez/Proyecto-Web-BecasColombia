import React from "react";
import { Card, ListGroup, ListGroupItem, Button } from "react-bootstrap";
import './CardShowBeca.css';
import BecaImg from '../../Assets/img/Grado.jpg';


function CardShowBecas({beca}){

    return(
            <Card border="info" style={{ width: '18rem' }}>
                <Card.Img className="Zoom" variant="top" src={BecaImg} />
                <Card.Body>
                    <Card.Title className="Titulo-Beca text-dark">{beca.nombre}</Card.Title>
                </Card.Body>
                <ListGroup className="bg-dark text-white">
                    <ListGroupItem>Universidad:{beca.universidad}</ListGroupItem>
                    <ListGroupItem>Pais:{beca.pais}</ListGroupItem>
                    <ListGroupItem>Financiacion:{beca.porcentaje}%</ListGroupItem>
                    <ListGroupItem>Requerimientos:{beca.requerimientos}</ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <Button className="btn btn-primary">Actualizar</Button>
                    <Button className="btn btn-danger">Eliminar</Button>
                </Card.Body>
            </Card>
    );
}

export default CardShowBecas;