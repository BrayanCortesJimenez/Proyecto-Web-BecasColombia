import React from "react";
import { Card } from "react-bootstrap";
import './Card.css';

function NewsCard({news}){

    return(
        <Card style={{ width: '20rem' }}>
            <a href={news.url}><Card.Img className="Zoom" variant="top" src={news.multimedia[1].url} alt={news.title}/></a>
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