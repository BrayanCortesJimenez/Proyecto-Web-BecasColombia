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
    
    const listItem = TodasNews.slice(0,6).map((news) =>(
      <NewsCard key={news.title} news={news} />
    ));

    return (
            <ul className="newsGrid">
              {listItem}
            </ul>

    );
   
}
export default Abstract;