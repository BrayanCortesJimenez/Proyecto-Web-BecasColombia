import './PublicarBeca.css';
import FormularioBecas from '../Becas/FormBeca';

function CrearBeca() {
  
    return (
      <main className='Main-Content-Publicar-Beca'>
        <div><h1>Publicar Beca o Actualizar Becas </h1>
          <div className='Publicar-Beca'>
            <FormularioBecas/>
          </div>
        </div>
      </main>
    );
  }
  
  export default CrearBeca;