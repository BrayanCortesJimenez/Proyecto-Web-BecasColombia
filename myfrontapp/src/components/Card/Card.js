import React from "react";
import './Card.css';

function NewsCard({news}){

    return(
       <li className="newsCard">
        <a className="title" href={news.url}>{news.title}</a>
        <a href={news.url}>
            <img className="newsImage" src ={news.multimedia[2].url} alt={news.title}/>
        </a>
        <p className="Abstract">{news.abstract}</p>
        </li> 
    );
}

export default NewsCard;