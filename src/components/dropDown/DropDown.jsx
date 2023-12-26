import React,{useState,useEffect} from 'react';
import './dropDown.scss';

export default function DropDown({title,text}) {
    const [downActive,setDownActive] = useState(false)
  return (
    <>
      <div className={`drop-down ${downActive?'drop-down-active':''}`}>
        <div className="drop-down-title" onClick={()=>{
            downActive?setDownActive(false):setDownActive(true)
        }}>
            <span>{title}</span>
            <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.2334 1.25L5.90006 5.91667L10.5667 1.25" stroke="#161C24" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
        <p className="drop-down-text">{text}</p>
      </div>
    </>
  )
}
