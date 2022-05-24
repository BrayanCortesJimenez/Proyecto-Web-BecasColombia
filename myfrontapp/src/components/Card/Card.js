import React from "react";
import './Card.css';

function NewsCard({news}){

    return(
       <li className="newsCard">
        <a className="title" href={news.url}>{news.title}</a>
        <img className="newsImage" src ={news.multimedia[2].url} alt={news.title}/>
        <p className="Abstract">{news.abstract}</p>
        </li> 
    );
}

export default NewsCard;