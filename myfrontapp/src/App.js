import './App.css';
import Headernav from './components/navbar/navbar';
import Abstract from './components/Noticias/Abstract';
import PopularCarousel from './components/Popular/popular';


function App() {

  return (
    <div className='App'>
        <header className='header-content'>
          <Headernav/>
        </header>
        <main className='main-content'>
          <div className='Hero'>

          </div>
          <div className='Most-popular'>
            <PopularCarousel/>
          </div>
          <div className='News'>
            <h1 className='Title-News'>Noticias</h1>
            <Abstract/>
          </div>
          
        </main>
        <footer className='footer-content'>

        </footer>
    </div>
  );
}

export default App;
