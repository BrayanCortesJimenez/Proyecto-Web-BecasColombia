import React from "react";
import GetAllNEWS from "../../Funciones/ArticleComponent";
import {useState, useEffect} from 'react';
import NewsCard from "../Card/Card";
import './Abstract.css'

function Abstract(){
    const[TodasNews, setTodasNews] = useState([]);

    useEffect( () => {
        GetAllNEWS().then(setTodasNews);
      }, []);

    return (
            <ul className="newsGrid">
              {TodasNews.map((news) =>(
                <NewsCard key={news.title} news={news} />
              ))}
            </ul>

    );
   
}
export default Abstract;