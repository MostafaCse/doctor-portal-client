import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './InfoCard.css';

const InfoCard = ({ info }) => {
    return (
        <div className="col-md-4 ">
            <div className={`align-items-center businessInfo-container d-flex info-${info.background}`}>
                <div className="offset-1">
                    <FontAwesomeIcon size="2x" icon={info.icon}></FontAwesomeIcon>
                </div>
                <div className="offset-1">
                    <h4>{info.title}</h4>
                    <small>{info.description}</small>
                </div>
            </div>
        </div>


    );
};

export default InfoCard;