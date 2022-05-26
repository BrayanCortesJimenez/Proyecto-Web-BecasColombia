import React from "react";
import { Card } from "react-bootstrap";
import './Card.css';

function NewsCard({news}){

    return(
        <Card >
            <a href={news.url}><Card.Img variant="top" src={news.multimedia[2].url} alt={news.title}/></a>
            <Card.Body>
                <Card.Title className="Title-card">{news.title}</Card.Title>
                <Card.Text>
                    {news.abstract}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default NewsCard;