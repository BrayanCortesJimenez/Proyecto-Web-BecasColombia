
//import Modal from "./components/Modal";
//import axios from 'axios';
import {useState, useEffect} from 'react';
import './App.css';
import GetAllNEWS from './components/ArticleComponent';


function App() {
  const[TodasNews, setTodasNews] = useState([]);

  useEffect( () => {
    GetAllNEWS().then(setTodasNews);
  }, []);


  return (
    <div className="App">
        <h1>Noticias</h1>
        <ul>
          {TodasNews.map((news , index) =>(
            <li key={index}>
              {news.abstract};
              <img src ={news.multimedia[0].url}/>
            </li>
          ))}
        </ul>
    </div>
  );
}

export default App;
