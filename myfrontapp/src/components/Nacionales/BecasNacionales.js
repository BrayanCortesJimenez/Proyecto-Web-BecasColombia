import GetAllBecas from '../../Funciones/BackBecas';
import {useState, useEffect} from 'react';
import './BecasNacionales.css';
import CardShowBecas from '../Card/CardShowBeca';

function BecasNacionales() {
  
  const[Becas, setBecas] = useState([]);

  useEffect( () => {
      GetAllBecas().then(setBecas);
      // eslint-disable-next-line
    }, []);
  

    // eslint-disable-next-line
  const listItem = Becas.map(beca =>{
    
    if (beca.pais === "Colombia" || beca.pais === "colombia" )
      return(
      <CardShowBecas key={beca.id} beca={beca} />
      )
      // eslint-disable-next-line
  });

    return (
      <main className='Main-Content-Nacionales'>
        <div><h1>BecasNacionales</h1>
          <ul className='Nacionales'>
              {listItem}
          </ul>
        </div>
      </main>
    );
  }
  
  export default BecasNacionales;