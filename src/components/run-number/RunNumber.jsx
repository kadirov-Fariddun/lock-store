import {React,useState,useEffect} from 'react';
// только бегущие

function counter({ val, time},) {
  const [ currVal, setCurrVal ] = useState(0);
      useEffect(() => {
        currVal !== val && setTimeout(setCurrVal, time, currVal + 1);
      },[ currVal ]);
      return <div className="counter">{currVal}</div>;
  }
export default function RunNumber({title,counters,start}) {
    return (
      <div className='run-number'>
        {
        counters.map(n =>{
          if(start){
           return counter({...n})
          };
          return <div className="counter">{n.val}</div>;
        })}
        <div className="counter-name">
            {title}
        </div>
      </div>
    )
  }
  

  
 