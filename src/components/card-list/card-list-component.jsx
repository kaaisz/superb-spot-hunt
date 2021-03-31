import React from 'react';
import './card-list.styles.css';

export const CardList = (props) => {
    // console.log(props);
    return (
        <div className="card-list">
            {
                props.spots.map(spot => (
                    <p key={spot.id}>{ spot.address.city }</p>)
                )
            }
        </div>
    )
};