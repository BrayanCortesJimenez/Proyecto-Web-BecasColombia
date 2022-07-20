import React from "react";
import { Carousel} from 'react-bootstrap';
import {useState, useEffect} from 'react';
import GetAllBecas from "../../Funciones/BackBecas";
import './popular.css';
import CardBecas from "../Card/CardBecas";

function PopularCarousel(){

  const[AllBecas, setAllBecas] = useState([]);

  useEffect( () => {
      GetAllBecas().then(setAllBecas);
    }, []);
    

  const Becapopular1 = AllBecas.slice((AllBecas.length)-1,AllBecas.length).map(beca =>{
    return(
      <CardBecas key={beca.id} beca={beca} />
    );
  
  

  });
  const Becapopular2 = AllBecas.slice((AllBecas.length)-2,AllBecas.length-1).map(beca =>{
    return(
      <CardBecas key={beca.id} beca={beca} />
    );
  
  

  });
  const Becapopular3 = AllBecas.slice((AllBecas.length)-3,AllBecas.length-2).map(beca =>{
    return(
      <CardBecas key={beca.id} beca={beca} />
    );
  
  

  });
  

    return(
        <Carousel>
        <Carousel.Item>
          {Becapopular1}
        </Carousel.Item>
        <Carousel.Item>
          {Becapopular2}
        </Carousel.Item>
        <Carousel.Item>
          {Becapopular3}
        </Carousel.Item>
      </Carousel> 
    );
}

export default PopularCarousel;