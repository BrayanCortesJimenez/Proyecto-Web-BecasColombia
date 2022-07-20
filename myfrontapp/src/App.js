import Abstract from './components/Noticias/Abstract';
import PopularCarousel from './components/Popular/popular';
import './App.css';


function App() {

  return (
    <div className='App'>
        <main className='main-content'>
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
