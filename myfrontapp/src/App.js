import HeroImagen from './components/Hero/Hero';
import Headernav from './components/navbar/navbar';
import Abstract from './components/Noticias/Abstract';
import PopularCarousel from './components/Popular/popular';
import './App.css';


function App() {

  return (
    <div className='App'>
        <header className='header-content'>
          <Headernav/>
        </header>
        <main className='main-content'>
          <div className='Hero'>
            <HeroImagen/>
          </div>
          <div className='Most-popular'>
            <PopularCarousel/>
          </div>
          <div className='News'>
            <h1 className='Title-News'>Noticias</h1>
            <Abstract/>
          </div>  
        </main>
    </div>
  );
}

export default App;
