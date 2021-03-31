import React from 'react';
import "./card.styles.css";

export const Card = (props) => (
    <div className="card-container">
        <img alt="spots" src={`https://picsum.photos/id/1${props.spot.id}/200`} />
        <p>{props.spot.address.city}</p>
        <p>{props.spot.website}</p>
    </div>
)