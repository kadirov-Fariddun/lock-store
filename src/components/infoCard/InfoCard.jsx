import React from 'react';
import './infoCard.scss';

export default function InfoCard(props) {
  return (
    <>
    <div className="info-card">
        <div className="info-card-content">
           <div className="info-card-content-image">
             <img src={props.src} alt="description" />
            </div>
            <div className="info-card-content-title">{props.title}</div>
        </div>
        <div className="info-card-content">
            <span className={props.lineNone?'line-none':''}></span>
            <div className="info-card-content-text">{props.text}</div>
        </div>
    </div>
    </>
  )
}
