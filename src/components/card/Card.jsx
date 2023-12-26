import{React,useState,useEffect} from 'react';
// short documentation 
//props
// class
// image 
// count    boolean
// countProduct
// gift     bool
// sale     bool
// stars
// feedback
// name 
// price 
// discount
// text
// btnText
import './card.scss';
export default function Card(props) {
  function pushId(id){
    const LS = localStorage;
    if(LS.getItem('justLook')){
      let justLook = JSON.parse(LS.getItem('justLook'));
      
      justLook.forEach((item,index)=>{
        if(item === id){
          justLook.splice(index,1);
          justLook.unshift(item);
          LS.setItem('justLook',JSON.stringify(justLook));
          
        }else{
          justLook.unshift(id);
          LS.setItem('justLook',JSON.stringify(justLook));
        }
      })
    }
    else{
      let justLook = [];
      justLook.unshift(id);
      LS.setItem('justLook',JSON.stringify(justLook));
    }
    let justLook = JSON.parse(LS.getItem('justLook'));
    const result = justLook.reduce((acc, item) => {
      if (acc.includes(item)) {
        return acc; // если значение уже есть, то просто возвращаем аккумулятор
      }
      return [...acc, item]; // добавляем к аккумулятору и возвращаем новый аккумулятор
    }, []);
    return LS.setItem('justLook',JSON.stringify(result));
  }

  function star(){
    let arr = [];
    for(let i = 1;i<=5;i++){
      if(props.stars >= i){
        arr.push(
          <svg key={i} width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.38272 1.25533C6.59605 0.692662 7.40338 0.692662 7.61738 1.25533L8.99738 5.07799C9.09405 5.33133 9.34005 5.5 9.61472 5.5H13.0061C13.6327 5.5 13.9061 6.28 13.4134 6.662L11.0001 8.83333C10.8919 8.91643 10.8129 9.03165 10.7744 9.16243C10.7358 9.29322 10.7397 9.43287 10.7854 9.56133L11.6667 13.2967C11.8814 13.8967 11.1867 14.412 10.6614 14.0427L7.38338 11.9627C7.27113 11.8838 7.13726 11.8414 7.00005 11.8414C6.86284 11.8414 6.72898 11.8838 6.61672 11.9627L3.33872 14.0427C2.81405 14.412 2.11872 13.896 2.33338 13.2967L3.21472 9.56133C3.26044 9.43287 3.26429 9.29322 3.22572 9.16243C3.18716 9.03165 3.10816 8.91643 3.00005 8.83333L0.586718 6.662C0.0933844 6.28 0.368051 5.5 0.993384 5.5H4.38472C4.51825 5.50044 4.64876 5.46033 4.759 5.38498C4.86923 5.30962 4.95399 5.20257 5.00205 5.07799L6.38205 1.25533H6.38272Z" fill="#F7AB3A"/>
          </svg>
        );
      }else{
      arr.push(
        <svg key={i} width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.38272 1.25533C6.59605 0.692662 7.40338 0.692662 7.61738 1.25533L8.99738 5.07799C9.09405 5.33133 9.34005 5.5 9.61472 5.5H13.0061C13.6327 5.5 13.9061 6.28 13.4134 6.662L11.0001 8.83333C10.8919 8.91643 10.8129 9.03165 10.7744 9.16243C10.7358 9.29322 10.7397 9.43287 10.7854 9.56133L11.6667 13.2967C11.8814 13.8967 11.1867 14.412 10.6614 14.0427L7.38338 11.9627C7.27113 11.8838 7.13726 11.8414 7.00005 11.8414C6.86284 11.8414 6.72898 11.8838 6.61672 11.9627L3.33872 14.0427C2.81405 14.412 2.11872 13.896 2.33338 13.2967L3.21472 9.56133C3.26044 9.43287 3.26429 9.29322 3.22572 9.16243C3.18716 9.03165 3.10816 8.91643 3.00005 8.83333L0.586718 6.662C0.0933844 6.28 0.368051 5.5 0.993384 5.5H4.38472C4.51825 5.50044 4.64876 5.46033 4.759 5.38498C4.86923 5.30962 4.95399 5.20257 5.00205 5.07799L6.38205 1.25533H6.38272Z" stroke="#C4CDD5" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      );
      }
    };
    return arr;
  };
  return (
    <>
      <div className={`card ${props.class?props.class:''}`} onClick={()=>{pushId(props.id)}}>
        {/* card flex */}
        <div className="card-flex">
        {/* image */}
        <div className="card-image">
          <img src={props.image} alt="image" />
          
            {
             props.count ?
            props.countProduct > 0?
              <div className='card-count'>
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" >
                    <path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z" fill='#24C56E'></path>
                  </svg>
                  В наличии
                </span>
              </div>
            :
            <div className='card-count'>
              <span>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 1L1 9M9 9L1 1L9 9Z" stroke="#E44286" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                Нет в наличии
              </span>
            </div>:
            ''
            }
            {
              props.gift?
              <div className="card-gift">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_11341_569)">
                    <path d="M11 4.5H1.00001C0.862008 4.5 0.75 4.61201 0.75 4.75001V11.75C0.75 11.888 0.862008 12 1.00001 12H11C11.138 12 11.25 11.888 11.25 11.75V4.75001C11.25 4.61201 11.138 4.5 11 4.5ZM10.75 11.5H1.24999V4.99999H10.75V11.5H10.75Z" fill="#4295E4"/>
                    <path d="M11.5 2.49998H0.500008C0.362008 2.49998 0.25 2.61199 0.25 2.74999V4.74999C0.25 4.88799 0.362008 5 0.500008 5H11.5C11.638 5 11.75 4.88799 11.75 4.74999V2.74999C11.75 2.61197 11.638 2.49998 11.5 2.49998ZM11.25 4.49998H0.750016V2.99998H11.25V4.49998Z" fill="#4295E4"/>
                    <path d="M6.00001 2.49998C5.86201 2.49998 5.75 2.61199 5.75 2.74999V11.75C5.75 11.888 5.86201 12 6.00001 12C6.13801 12 6.25002 11.888 6.25002 11.75V2.74999C6.25002 2.61197 6.13801 2.49998 6.00001 2.49998Z" fill="#4295E4"/>
                    <path d="M6.2555 2.691C5.99851 1.48549 4.4655 0.192 3.444 0.0190078C3.381 0.00649219 3.3165 0 3.25001 0C2.6985 0 2.25 0.4485 2.25 1.00001C2.25 1.23052 2.33051 1.45552 2.4765 1.63402C2.47849 1.63552 2.47999 1.63802 2.48149 1.64002C3.22399 2.58851 5.69551 2.95202 5.9765 2.99051C5.98801 2.99201 5.99949 2.99302 6.01051 2.99302C6.08 2.99302 6.146 2.96452 6.194 2.91302C6.2495 2.85349 6.27252 2.7705 6.2555 2.691ZM2.86849 1.32251C2.86399 1.31602 2.859 1.31051 2.85399 1.305C2.78599 1.21751 2.74999 1.11199 2.74999 1.00001C2.74999 0.724008 2.9745 0.500016 3.24999 0.500016C3.28299 0.500016 3.31549 0.503508 3.35398 0.510516C4.10349 0.637523 5.23498 1.54451 5.64148 2.42951C4.77101 2.26901 3.3015 1.8945 2.86849 1.32251Z" fill="#4295E4"/>
                    <path d="M8.74973 0C8.68324 0 8.61874 0.00649219 8.56273 0.0175078C7.53474 0.192 6.00174 1.48549 5.74475 2.691C5.72776 2.7705 5.75075 2.85349 5.80625 2.913C5.85376 2.964 5.92025 2.99299 5.98925 2.99299C6.00024 2.99299 6.01175 2.99198 6.02274 2.991C6.30373 2.95249 8.77523 2.589 9.51773 1.64051C9.51973 1.63852 9.52122 1.63601 9.52324 1.63402C9.66923 1.45549 9.74974 1.23049 9.74974 1.00001C9.74974 0.4485 9.30124 0 8.74973 0ZM9.14573 1.30549C9.14074 1.311 9.13573 1.31648 9.13123 1.323C8.69873 1.89401 7.22923 2.2695 6.35822 2.43C6.76521 1.54399 7.89722 0.6375 8.65273 0.509508C8.68423 0.503508 8.71673 0.500016 8.74973 0.500016C9.02524 0.500016 9.24973 0.724008 9.24973 1.00001C9.24975 1.11199 9.21375 1.21699 9.14573 1.30549Z" fill="#4295E4"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_11341_569">
                    <rect width="12" height="12" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>
                Подарок
              </div>:''
            }
         
          {
            props.sale?
            <span className='card-sale'>SALE</span>
            :''
          }
        </div>
        {/* image end */}
        {/* start adn feedbacks */}
        {
          props.feedback ?
        <div className="card-feedback">
          <div className="card-feedback-stars">
            {star().map(item=>item)}
          </div>
          {
          <div className="card-feedback-feedback">
            ({props.feedback}) отзывов
          </div>
          }
        </div>
        : ''}
          {/* card info */}
          <div className="card-content-info">
              {
                props.name ?
                <div className="card-title">
                  {props.name}
                </div>:''
              }
              {
                props.text?
                <div className="card-text">
                  <span>
                   Замок дверной электронный Golden Soft<br/>
                   GS-200Z-5 имеет роскошный глянцевый<br/>
                   блеск, четкие линии, красивые формы.
                   </span>
                  <span>
                    Подходит для установки на<br/>
                   деревянную/межкомнатную дверь.
                   </span>
                </div>:''
              }
              {
                props.price?
                <div className="card-price">
                  <span>{props.discount}₽</span>
                  <span>{props.price}₽</span>
                </div>:''
              }
              {
                props.btn?
                <button className="card-btn">
                  <span>До</span>бавить в корзину
                </button>:''
              }
          </div>
        </div>
      </div>
       
    </>
  )
}
