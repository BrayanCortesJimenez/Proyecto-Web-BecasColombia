import React from "react";
import './popular.css';
import Carruselimg from '../../Assets/img/Estudiante-Hero.jpg';
import { Carousel } from 'react-bootstrap';

function PopularCarousel(props){

    return(
        <Carousel>
        <Carousel.Item>
          <img
            className="justify-content-md-center w-40 h-30"
            src={Carruselimg}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="justify-content-md-center w-40 h-30"
            src={Carruselimg}
            alt="Second slide"
          />
      
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="justify-content-md-center w-40 h-30"
            src={Carruselimg}
            alt="Third slide"
          />
      
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel> 
    );
}

export default PopularCarousel;