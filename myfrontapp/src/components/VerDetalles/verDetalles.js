import React from "react";
import { Form, Button} from "react-bootstrap";
import {useParams} from "react-router-dom";
import {useState, useEffect} from 'react';
import {getBecas} from "../../Funciones/BackBecas.js";
import './verDetalles.css';



function VerDetalles(){

    const params = useParams();

    const initialSatate = {id:0, nombre: "", porcentaje: 0, pais: "", universidad: "", requerimientos: ""};

    const[BecaNueva, setBecaNueva] = useState(initialSatate);

    const handleInputChange = (e) => {
        
        setBecaNueva({ ...BecaNueva, [e.target.name]: e.target.value});
    };

    const getBeca = async (becaId) =>{
        try{
            const res=await getBecas(becaId);
            const data= await res.json();
            const { nombre, porcentaje, pais, universidad, requerimientos} = data.becas[0];
            setBecaNueva({ nombre, porcentaje, pais, universidad, requerimientos});
        }catch(error){
            console.log(error);
        }
    };

    useEffect(() =>{
        if(params.id){
          getBeca(params.id);  
        }
        // eslint-disable-next-line
    }, []);

    return(
        <main className="Main-Content-Detalles-Beca">
            <div><h1>Detalles Beca</h1>
                <Form className="col-md-5 mx-auto bg-dark text-white">
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
                    <div className="d-grid gap-2">
                        <Button onClick={()=>{
                            if(BecaNueva.pais === "Colombia" || BecaNueva.pais === "colombia"){
                            window.location.replace("/BecasNacionales")}else{window.location.replace("/BecasInternacionales")}}}className="btn btn-block btn-danger " variant="danger">Volver</Button>
                    </div>
                </Form>
            </div>
        </main>
    );
}

export default VerDetalles;