import React from "react";
import { Form, Button } from "react-bootstrap";
import {useParams} from "react-router-dom";
import {useState, useEffect} from 'react';
import {registerBecas, getBecas, updateBecas} from "../../Funciones/BackBecas.js";
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
            if(!params.id){
                res = await registerBecas(BecaNueva);
                const data = await res.json();
                if(data.message === "Success"){
                setBecaNueva(initialSatate);
                if(BecaNueva.pais === "Colombia" || BecaNueva.pais === "colombia"){
                    window.location.replace("/BecasNacionales");
                }else{
                    window.location.replace("/BecasInternacionales");
                }
                }
            }else{
                await updateBecas(params.id,BecaNueva);
                if(BecaNueva.pais === "Colombia" || BecaNueva.pais === "colombia"){
                    window.location.replace("/BecasNacionales");
                }else{
                    window.location.replace("/BecasInternacionales");
                }
            }
            
        }catch(error){
            console.log(error);
        }
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
        <Form onSubmit={handleSubmit} className="col-md-5 mx-auto bg-dark text-white">
            <div>
                {
                    params.id?(
                        <h1>Actualizar Beca</h1>

                    ):(
                        <h1>Publicar Beca</h1>
                    )
                }
            </div>
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
                {
                    params.id?(
                        <Button className="btn btn-block btn-warning" variant="warning" type="submit">
                            Actualizar
                        </Button>

                    ):(
                        <Button className="btn btn-block btn-primary" variant="primary" type="submit">
                            Crear Beca
                        </Button>
                    )
                }
            </div>
        </Form>
    );
}

export default FormularioBecas;