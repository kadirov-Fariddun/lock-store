import React from 'react';
// props short documentation
// src
// number
// title
// text


//styles 
import './howWeWorkCard.scss';
export default function HowWeWorkCard(props) {
  return (
    <>
      <div className="how-we-work-card">
         {/* card images */}
        <div className="how-we-work-card-images">
            <img src={props.src} alt='image' />
            {props.number?<span>{props.number}</span>:<img className='sub-img' src={props.subSrc} alt="description"/>}
        </div>
        {/* card images end */}
        {/* title */}
        <div className="how-we-work-card-title">{props.title}</div>
        {/* title end */}
        {/* text */}
        {props.children||<div className="how-we-work-card-text">{props.text}</div>}
        {/* text end */}
      </div>
    </>
  )
}
