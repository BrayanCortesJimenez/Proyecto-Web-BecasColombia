import React from "react";
import './Hero.css';
import { Figure } from 'react-bootstrap';
import HeroPrincipal from '../../Assets/img/Estudiante1.png';

function HeroImagen(props){

    return(
        <Figure>
            <Figure.Image
                width={860}
                height={422}
                alt="860x422"
                src={HeroPrincipal}
            />
            <Figure.Caption>
            </Figure.Caption>
        </Figure>
       
    );
}

export default HeroImagen;