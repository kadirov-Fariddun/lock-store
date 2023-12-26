import React,{ useState,useEffect } from 'react';
import { Route, Routes,NavLink } from 'react-router-dom';
// data base
import db from '../../db/db.js';
//components
import Header from '../header/Header.jsx';
import Home from '../home/Home.jsx';
import Footer from '../footer/Footer.jsx';
import Catalog from '../catalog/Catalog.jsx';
import CardInfo from '../card/cardInfo/CardInfo.jsx';
import Trade from '../trade/Trade.jsx';
import ShippingPayment from '../shippingPayment/ShippingPayment.jsx';
import About from '../about/About.jsx';
import Button from '../button/Button.jsx';
import PlacingOrder from '../placingOrder/PlacingOrder.jsx';

function App() {
const [data] = useState(JSON.parse(db));
const [basketShow,setBasketShow] = useState(false);
const [likedShow,setLikedShow] = useState(false);
const [basketCountShop,setBasketCountShop] = useState(1);
function getObjectLS(objName){
  let arr = [];
  let result = [];
  if(localStorage.getItem(objName) && JSON.parse(localStorage.getItem(objName).length != 0)){
    arr = JSON.parse(localStorage.getItem(objName));
    arr.forEach(id=>{
      result.push(data[id])
    })
    return [true,result];
  }else return [false,[]];
};
// useEffect(()=>{
//   setData(JSON.parse(db))
// },[data])
// const data = ;

  
  return (
    <>
    <Header data={data}
     onClickLiked={()=>{
      likedShow?setLikedShow(false):setLikedShow(true);
     }} 
     onClickBasket={()=>{
      basketShow?setBasketShow(false):setBasketShow(true);
     }}
     />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />}/>
        {/* product info */}
        {
          data.map(product=>{
           return(<Route path={"/product-"+product.id} element={
              <CardInfo product={product}/>
            } />)
        })
}
        {/* trade */}
        <Route path="/trade" element={<Trade />} />
        {/* shipping payment */}
        <Route path='/shipping-payment' element={<ShippingPayment/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/placing-order' element={<PlacingOrder 
        product={getObjectLS('basket')[1][0]}
        shopCount={basketCountShop}
        />}
        />
      </Routes> 

    <Footer />
    {/* блок корзины */}
    <div className={`basket-block ${basketShow?'basket-block-show':''}`}>
      <div className="basket-block-title">Корзина <span onClick={()=>setBasketShow(false)}>&times;</span></div>
    {
    getObjectLS('basket')[0]?
    getObjectLS('basket')[1].map(item=>(
      <div className='basket-block-item'>
        <div className="basket-block-item-flex">
          <img src={item.images[0]} alt="description" width='135px' height='120px'/>
          <div className="basket-block-item-info">
            <div className="basket-block-item-info-title">{item.name}</div>
            <div className="basket-block-item-info-text">+ Подарок: <span>“Приложение к замкам Golden Service”</span></div>
            <div className="basket-block-item-info-count-shop">
            <button className={`basket-block-item-info-count-shop-m ${basketCountShop==1? 'none':''}`}
            onClick={()=>{
              basketCountShop!=1?setBasketCountShop(basketCountShop-1):basketCountShop;
              }}>-</button>
             <span>{basketCountShop}</span>
             <button className="basket-block-item-info-count-shop-p" 
             onClick={()=>{
              setBasketCountShop(basketCountShop+1);
             }}>+</button>
            </div>
          </div>
          <div className="basket-block-item-btn">
          <button className="basket-block-item-btn-remove">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M5 20a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8h2V6h-4V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2H3v2h2zM9 4h6v2H9zM8 8h9v12H7V8z"></path>
              <path d="M9 10h2v8H9zm4 0h2v8h-2z"></path>
            </svg>
            Удалить
          </button>
          <div className="basket-block-item-price">
            {item.discount}₽
          </div>
          </div>
        </div>
        <div className="basket-block-item-all-price">Итого: <span>{item.discount*basketCountShop}₽</span></div>
        {(item.discount*basketCountShop)>50000?
        <div className='basket-block-item-btn-shoping optom'>
          <NavLink to='trade' onClick={()=>setBasketShow(false)}>
            Оптовая продажа
          </NavLink>
          <span>
              К сожалению, оформления товара свыше 100 000₽ доступно только оптом,
              пожалуйста перейдите на страницу оптовой продажи
          </span>
          
        </div>:
        <NavLink to='/placing-order' className="basket-block-item-btn-shoping">
          <Button onClick={()=>setBasketShow(false)} text='Оформить Заказ' width='100%'/>
        </NavLink>
        
      }
      </div>
    ))
      :<div className='basket-block-empty'>Корзина Пусто</div>
    }
    
      <div className="basket-block-recomendet">
        <div className="basket-block-recomendet-title">С этим покупают</div>
      {
      data.slice(0,3).map(item=>(
        <div className="basket-block-recomendet-item">
          <img src={item.images[0]} alt="description" width='102px' height='90px' />
          <div className="basket-block-recomendet-item-name">
            <span>{item.name}</span>
            <div className="basket-block-recomendet-item-price">
              {item.price}₽ <span>{item.discount}₽</span>
            </div>
          </div>
          <button className="basket-block-recomendet-item-btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path>
          </svg> Добавить
          </button>
        </div>
      ))
    }
      </div>
   
    </div>
    </>
   
  )
}

export default App;
