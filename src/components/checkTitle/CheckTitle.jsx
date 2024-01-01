import React from 'react';
import './checkTitle.scss';

export default function CheckTitle(props) {
  return (
    <div className='check-title'>
        <svg xmlns="http://www.w3.org/2000/svg" width='24px' height='24px' viewBox="0 0 24 24">
            <path d="M7 5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H7zm4 10.414-2.707-2.707 1.414-1.414L11 12.586l3.793-3.793 1.414 1.414L11 15.414z"></path>
        </svg>
        <span>{props.title}</span>
    </div>
  )
}