import './App.css';
import Abstract from './components/Noticias/Abstract';


function App() {

  return (
    <div className='App'>
        <header>

        </header>
        <main className='main-content'>
          <div className='Hero'>

          </div>
          <div className='Most-popular'>

          </div>
          <div className='News'>
            <h1 className='Title-News'>Seccion de Noticias</h1>
            <Abstract/>
          </div>
          
        </main>
        <footer className='footer-content'>

        </footer>
    </div>
  );
}

export default App;
