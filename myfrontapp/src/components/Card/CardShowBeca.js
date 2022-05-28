import React from "react";
import { Card, ListGroup, ListGroupItem, Button } from "react-bootstrap";
import {DelteBecas} from "../../Funciones/BackBecas.js";
import './CardShowBeca.css';
import BecaImg from '../../Assets/img/Grado.jpg';


function CardShowBecas({beca}){

    const handleDelete = async (becaId)=>{
      await DelteBecas(becaId);
      if(beca.pais === "Colombia" || beca.pais === "colombia"){
        window.location.replace("/BecasNacionales");   
      }else{
        window.location.replace("/BecasInternacionales");  
      }
    };

    return(
            <Card border="info" style={{ width: '19rem' }}>
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
                    <Button onClick={()=> window.location.replace(`/UpdateBeca/${beca.id}`)} className="btn btn-block btn-primary">Actualizar</Button>
                    <Button onClick={()=>beca.id && handleDelete(beca.id)} className="btn btn-block btn-danger">Eliminar</Button>
                    <Button onClick={()=>window.location.replace(`/VerDetalles/${beca.id}`)}className="btn btn-block btn-success ">Detalles</Button>
                </Card.Body>
            </Card>
    );
}

export default CardShowBecas;