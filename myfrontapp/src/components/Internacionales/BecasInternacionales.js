import GetAllBecas from '../../Funciones/BackBecas';
import {useState, useEffect} from 'react';
import './BecasInternacionales.css';
import CardShowBecas from '../Card/CardShowBeca';

function BecasInternacionales() {
  
  const[interBecas, setinterBecas] = useState([]);

  useEffect( () => {
      GetAllBecas().then(setinterBecas);
    }, []);
  

  
  const listItem = interBecas.map(beca =>{
    
    if (beca.pais !== "Colombia" && beca.pais !== "colombia" )
      return(
      <CardShowBecas key={beca.id} beca={beca} />
      )
  });

    return (
      <main className='Main-Content-Internacionales'>
        <div><h1>Becas Internacionales</h1>
          <ul className='Internacionales'>
              {listItem}
          </ul>
        </div>
      </main>
    );
  }
  
  export default BecasInternacionales;