import React from "react";
import './Hero.css';
import { Figure } from 'react-bootstrap';
import HeroPrincipal from '../../Assets/img/Estudiante1.png';

function HeroImagen(props){

    return(
        <Figure>
            <Figure.Image
                width={1200}
                height={500}
                alt="860x500"
                src={HeroPrincipal}
            />
            <Figure.Caption>
            </Figure.Caption>
        </Figure>
       
    );
}

export default HeroImagen;