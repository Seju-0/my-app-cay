import React from 'react';
import './Card.css';


function Card({title,imageUrl,body,origin}) {
    return (
        <div className='card-container'>
            <div className="image-container">
                <img src={imageUrl} alt=''/>
            </div>
            <div className="card-content">
                <div className="card-title">
                    <h3>{title}</h3>
                </div>
                <div className="card-body">
                    <p>{body}</p>
                </div>
                <br/>
                <div className="card-origin">
                    <p>{origin}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;