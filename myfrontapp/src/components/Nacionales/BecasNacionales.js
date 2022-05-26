import GetAllBecas from '../../Funciones/BackBecas';
import './BecasNacionales.css';

function BecasNacionales() {
  
    GetAllBecas();

    return (
      <div className='Nacionales'>
          <h1>BecasNacionales</h1>
      </div>
    );
  }
  
  export default BecasNacionales;