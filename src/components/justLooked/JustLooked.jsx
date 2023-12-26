import React from 'react';
import Popular from '../popular-see/Popular';
import db from '../../db/db';
export default function JustLooked() {
    function showJustLook(){
        if(localStorage.getItem('justLook')){
          const justLook = JSON.parse(localStorage.getItem('justLook'));
          const data = JSON.parse(db);
          let res = [];
          justLook.forEach(item => {
            data.forEach(product => {
              if(product.id == item){
                res.push(product);
              }else return;
            })
          })
        return ( 
        <Popular
        title='Вы недавно просмотрели'
        data={res.slice(0,10)}
        />
        )
      }else{
        return(<div className="just-looked">
          Вы еще нечего не посмотрели 
          <p>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm5 12H7v-4h10v4z"></path>
            </svg>
          </p>
          </div>)
        }
      }
  return (
    <>
    {showJustLook()}
    </>
  )
}
