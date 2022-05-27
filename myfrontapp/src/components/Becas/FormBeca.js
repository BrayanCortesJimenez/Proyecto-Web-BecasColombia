import React from "react";
import { Form, Button } from "react-bootstrap";
import {useParams} from "react-router-dom";
import {useState, useEffect} from 'react';
import {registerBecas, getBecas} from "../../Funciones/BackBecas.js";
import './FormBeca.css';


function FormularioBecas(){

    const params = useParams();

    const initialSatate = {id:0, nombre: "", porcentaje: 0, pais: "", universidad: "", requerimientos: ""};

    const[BecaNueva, setBecaNueva] = useState(initialSatate);

    const handleInputChange = (e) => {
        
        setBecaNueva({ ...BecaNueva, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try{
            let res;
            res = await registerBecas(BecaNueva);
            const data = await res.json();
            if(data.message === "Success"){
                setBecaNueva(initialSatate);
                window.location.replace("/");
            }
        }catch(error){
            console.log(error);
        }
    };

    const getBeca = async (becaId) =>{
        try{
            const res=await getBecas(becaId);
            const data= await res.json();
            console.log(data);
            const { nombre, porcentaje, pais, universidad, requerimientos} = data.becas;
            setBecaNueva({ nombre:nombre, porcentaje:porcentaje, pais:pais, universidad:universidad, requerimientos:requerimientos});
        }catch(error){
            console.log(error)
        }
    };

    useEffect(() =>{
        if(params.id){
          getBeca(params.id)  
        }
        // eslint-disable-next-line
    })

    return(
        <Form onSubmit={handleSubmit} className="col-md-3 mx-auto bg-dark text-white">
            <Form.Group className="col-mb-3 mx-auto" controlId="formTituloBeca">
                <Form.Label>Titulo Beca</Form.Label>
                <Form.Control type="text" name="nombre" value={BecaNueva.nombre} onChange={handleInputChange} placeholder="Ingrese el titulo de la beca" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPorcentaje">
                <Form.Label>Porcentaje</Form.Label>
                <Form.Control type="number" name="porcentaje" value={BecaNueva.porcentaje} onChange={handleInputChange}  placeholder="Ingrese el porcentaje cubierto" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPais">
                <Form.Label>Pais</Form.Label>
                <Form.Control type="text" name="pais" value={BecaNueva.pais} onChange={handleInputChange} placeholder="Ingrese el pais donde ofrecen la beca" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formUniversidad">
                <Form.Label>Universidad</Form.Label>
                <Form.Control type="text" name="universidad" value={BecaNueva.universidad} onChange={handleInputChange} placeholder="Ingrese la universidad que ofrece la beca" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formRequerimientos">
                <Form.Label>Requerimiento</Form.Label>
                <Form.Control type="text" name="requerimientos" value={BecaNueva.requerimientos} onChange={handleInputChange} placeholder="Ingrese el requerimiento de la beca" />
            </Form.Group>
            <Button className="btn btn-primary px-5 mx-5" variant="primary" type="submit">
                Crear Beca
            </Button>
        </Form>
    );
}

export default FormularioBecas;