import React from 'react';
import './ChallangeDetailsCard.css';

const ChallangeDetailsCard = ({cardName, cardValue}) => {
    return(
        <div className="details-card-container">
            <div className="card-name">{cardName}</div>
            <div className="card-value">{cardValue}</div>
        </div>
    )
}

export default ChallangeDetailsCard;